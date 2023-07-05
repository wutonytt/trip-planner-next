"use client";

import { Card } from "flowbite-react";
import TripCard from "./TripCard";
import { Key, use } from "react";
import { ObjectId } from "mongodb";
import queryClient from "@/utils/queryClient";

type Trips = {
  image: string;
  title: string;
  desc: string;
}[];

export default function TripList() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const trips = use(
    queryClient(
      "trip",
      () =>
        fetch(`${baseUrl}/api/trip`).then((res) => res.json()) as Promise<Trips>
    )
  );

  return (
    <div className="grid grid-flow-row auto-rows-fr grid-cols-2 gap-4 p-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {trips.map(
        (
          trip: {
            _id: ObjectId;
            image: string;
            title: string;
            desc: string;
          },
          index: Key
        ) => {
          return <TripCard key={index} trip={trip} />;
        }
      )}
      {!trips && "Something went wrong"}
      <Card
        className="col-span-1 row-span-1 block h-96 rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700"
        href="/trip/new"
      >
        <p className="text-center text-xl font-semibold text-gray-500 dark:text-gray-400">
          + Add a new trip
        </p>
      </Card>
    </div>
  );
}
