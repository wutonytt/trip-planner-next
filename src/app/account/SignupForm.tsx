import { Button, Label, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface SignupFormProps {
  setModalBody: Dispatch<SetStateAction<string>>;
}

export default function SignupForm({ setModalBody }: SignupFormProps) {
  return (
    <form className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign up
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
          onClick={() => setModalBody("login")}
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Log in with your account
        </a>
      </div>
    </form>
  );
}
