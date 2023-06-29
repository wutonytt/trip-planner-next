import { Button, Label, TextInput } from "flowbite-react";

export default function PasswordResetForm() {
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
          href="/login"
          className="cursor-pointer text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Log in with your account
        </a>
      </div>
    </form>
  );
}
