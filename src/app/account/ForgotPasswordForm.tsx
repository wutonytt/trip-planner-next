import { Button, Label, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface ForgotPasswordFormProps {
  setModalBody: Dispatch<SetStateAction<string>>;
}

export default function ForgotPasswordForm({
  setModalBody,
}: ForgotPasswordFormProps) {
  return (
    <form className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Reset your password
      </h3>
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
      <div className="w-full">
        <Button type="submit">Send password reset email</Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        <a
          onClick={() => setModalBody("login")}
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Log in with your account
        </a>
      </div>
    </form>
  );
}
