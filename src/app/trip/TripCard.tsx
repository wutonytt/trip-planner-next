import Image from "next/image";
import { ObjectId } from "mongodb";

interface TripCardProps {
  trip: {
    _id: ObjectId;
    image: string;
    title: string;
    desc: string;
  };
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <a
      href={`/trip/${trip._id}`}
      className="col-span-1 row-span-1 block h-96 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700"
    >
      {trip.image && (
        <Image
          width={500}
          height={500}
          className="h-3/5 w-full rounded-t-lg object-cover object-center"
          src={trip.image}
          alt={`The picture of ${trip.title}`}
        />
      )}
      <div className="flex flex-col p-5">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {trip.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {trip.desc}
        </p>
      </div>
    </a>
  );
}
