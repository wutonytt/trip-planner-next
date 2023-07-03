import TripList from "./TripList";
import TripBreadcrumb from "./TripBreadcrumb";

export default function TripPage() {
  return (
    <div>
      <div className="p-5">
        <TripBreadcrumb />
        <TripList />
      </div>
    </div>
  );
}
