import { Suspense } from "react";
import TripList from "./TripList";
import LoadingSkeleton from "./LoadingSkeleton";

export default function TripPage() {
  return (
    <div>
      <div className="p-5">
        <Suspense fallback={<LoadingSkeleton />}>
          <TripList />
        </Suspense>
      </div>
    </div>
  );
}
