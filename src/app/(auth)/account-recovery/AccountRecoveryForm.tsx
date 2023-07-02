"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function AccountRecoveryForm() {
  function sendPasswordResetEmail(email: string) {
    console.log("Sending password reset email to " + email);
    // send password reset email to the email address via mail server
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    sendPasswordResetEmail(email);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Forgot your password?
        </h3>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Type in your email and we will send you a link to reset your password!
        </p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@company.com"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="t&c" />
        <Label htmlFor="t&c">
          I accept the{" "}
          <a
            className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
            href="#"
          >
            Terms and Conditions
          </a>
        </Label>
      </div>
      <div>
        <Button className="w-full" type="submit">
          Send password reset email
        </Button>
      </div>
    </form>
  );
}
