import Navigator from "../navigator/Navigator";
import TripList from "./TripList";
import TripBreadcrumb from "./TripBreadcrumb";

export default function TripPage() {
  return (
    <div>
      <Navigator />
      <div className="p-5">
        <TripBreadcrumb />
        <TripList />
      </div>
    </div>
  );
}
