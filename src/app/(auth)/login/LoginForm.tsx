"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (
      event.currentTarget.elements.namedItem("username") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    signIn("credentials", { username, password });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Log in
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your username" />
        </div>
        <TextInput id="username" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" type="password" required />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          href="/password-reset"
          className="cursor-pointer text-sm font-medium text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Forgot password?
        </a>
      </div>
      <div className="w-full">
        <Button type="submit">Log in</Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?&nbsp;
        <a
          href="/signup"
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Create an account
        </a>
      </div>
    </form>
  );
}
