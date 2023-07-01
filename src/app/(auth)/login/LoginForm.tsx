"use client";

import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const hasError = searchParams.has("error");
  const hasSuccess = searchParams.has("success");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    signIn("credentials", { email, password, callbackUrl: "/trip" });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white">
        Log in
      </h3>
      {hasError && (
        <div className="w-full">
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <p>{searchParams.get("error").split(":")[1].trimStart()}</p>
            </span>
          </Alert>
        </div>
      )}
      {hasSuccess && (
        <div className="w-full">
          <Alert color="success" icon={HiInformationCircle}>
            <span>
              <p>{searchParams.get("success").split(":")[1].trimStart()}</p>
            </span>
          </Alert>
        </div>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" type="email" required />
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
