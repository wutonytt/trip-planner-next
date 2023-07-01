"use client";

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export default function SignupForm() {
  const [{ isError, errorMessage }, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (
      event.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const email = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    const passwordConfirm = (
      event.currentTarget.elements.namedItem(
        "password-confirm"
      ) as HTMLInputElement
    ).value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        }),
      });

      res.status === 201 &&
        router.push("/login?success=Success: Account has been created");
      res.status !== 201 &&
        setError({
          isError: true,
          errorMessage: (await res.text()).toString(),
        });
    } catch (error) {
      setError({ isError: true, errorMessage: "Something went wrong" });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white">
        Sign up
      </h3>
      {isError && (
        <div className="w-full">
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <p>{errorMessage}</p>
            </span>
          </Alert>
        </div>
      )}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" type="text" required />
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password-confirm" value="Confirm your password" />
        </div>
        <TextInput id="password-confirm" type="password" required />
      </div>
      <div className="w-full">
        <Button type="submit">Sign up</Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Already have an account?&nbsp;
        <a
          href="/login"
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Log in with your account
        </a>
      </div>
    </form>
  );
}
