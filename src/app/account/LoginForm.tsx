import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

interface LoginFormProps {
  setModalBody: Dispatch<SetStateAction<string>>;
}

export default function LoginForm({ setModalBody }: LoginFormProps) {
  return (
    <form className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Log in
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
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          onClick={() => setModalBody("forgot-password")}
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
          onClick={() => setModalBody("signup")}
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Create an account
        </a>
      </div>
    </form>
  );
}
