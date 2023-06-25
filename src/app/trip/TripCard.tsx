interface TripCardProps {
  image: string;
  trip_name: string;
  trip_description: string;
}

export default function TripCard(trip: TripCardProps) {
  return (
    <a
      href={`/trip/${trip.trip_name.toLowerCase().replaceAll(" ", "-")}`}
      className="col-span-1 row-span-1 block rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700"
    >
      <img
        className="h-1/2 w-full rounded-t-lg object-cover object-center"
        src={trip.image}
        alt={`The picture of ${trip.trip_name}`}
      />
      <div className="flex flex-col p-5">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {trip.trip_name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {trip.trip_description}
        </p>
      </div>
    </a>
  );
}
