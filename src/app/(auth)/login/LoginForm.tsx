"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";
import InfoAlert from "./InfoAlert";
import { Suspense, useState } from "react";

function InfoAlertFallback() {
  return <></>;
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    await signIn("credentials", { email, password, callbackUrl: "/trip" });
    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Log in to your account
      </h3>
      <Suspense fallback={<InfoAlertFallback />}>
        <InfoAlert />
      </Suspense>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput disabled={loading} id="email" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput disabled={loading} id="password" type="password" required />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          href="/account-recovery"
          className="cursor-pointer text-sm font-medium text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Forgot password?
        </a>
      </div>
      <div>
        <Button
          disabled={loading}
          isProcessing={loading}
          className="w-full"
          type="submit"
        >
          Log in
        </Button>
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
