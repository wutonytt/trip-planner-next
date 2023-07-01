import Navigator from "@/app/navigator/Navigator";
import EditTripForm from "./EditTripForm";

export default function TripPage() {
  return (
    <div>
      <Navigator />
      <div className="m-auto w-full p-5 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
        <EditTripForm />
      </div>
    </div>
  );
}
