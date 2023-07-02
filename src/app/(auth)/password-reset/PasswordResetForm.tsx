"use client";

import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

export default function PasswordResetForm() {
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
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Reset password
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
          <Label htmlFor="password" value="New password" />
        </div>
        <TextInput id="password" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password-confirm" value="Confirm new password" />
        </div>
        <TextInput id="password-confirm" type="password" required />
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
          Reset password
        </Button>
      </div>
    </form>
  );
}
