"use client";

import { Card } from "flowbite-react";
import TripCard from "./TripCard";

export default function TripList() {
  const trips = [
    {
      image: "/images/trip/uiuc.jpg",
      trip_name: "Going to start my graduate study at UIUC",
      trip_description:
        "Starting my new semester at UIUC in Illinois, where I will be studying computer science",
    },
    {
      image: "/images/trip/los-angeles.jpg",
      trip_name: "Visiting my aunt in LA",
      trip_description:
        "A visit to my aunt's house in LA before going to my new school",
    },
    {
      image: "/images/trip/los-angeles-1.jpg",
      trip_name: "Visiting my aunt in LA",
      trip_description:
        "A visit to my aunt's house in LA before going to my new school",
    },
    {
      image: "/images/trip/los-angeles-1.jpg",
      trip_name: "Visiting my aunt in LA",
      trip_description:
        "A visit to my aunt's house in LA before going to my new school",
    },
    {
      image: "/images/trip/los-angeles-1.jpg",
      trip_name: "Visiting my aunt in LA",
      trip_description:
        "A visit to my aunt's house in LA before going to my new school",
    },
  ];

  return (
    <div className="grid grid-flow-row auto-rows-fr grid-cols-2 gap-4 p-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {trips.map((trip, index) => {
        return (
          <TripCard
            key={index}
            image={trip.image}
            trip_name={trip.trip_name}
            trip_description={trip.trip_description}
          />
        );
      })}
      <Card className="row-span-1 items-center" href="/trip/">
        <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
          + Add a new trip
        </p>
      </Card>
    </div>
  );
}
