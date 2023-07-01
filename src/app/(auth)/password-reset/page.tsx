import Navigator from "../../navigator/Navigator";
import PasswordResetForm from "./PasswordResetForm";

export default function TripPage() {
  return (
    <div>
      <Navigator />
      <div className="m-auto w-full p-5 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
        <PasswordResetForm />
      </div>
    </div>
  );
}
