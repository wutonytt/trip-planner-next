"use client";

import { Button, ListGroup } from "flowbite-react";
import DailyItinerary from "./DailyItinerary";

interface ItineraryProps {
  plans: {
    date: string;
    details: { type: string; time: string; title: string; body: string }[];
  }[];
}

export default function Itinerary({ plans }: ItineraryProps) {
  return (
    <div className="w-full overflow-y-scroll md:w-1/3">
      <ListGroup className="rounded-none border-0 ">
        {plans.map((plan, index) => {
          return (
            <ListGroup.Item
              key={index}
              className="border-0 dark:bg-black [&>*]:first:rounded-t-none [&>*]:last:rounded-b-none"
            >
              <div className="w-full flex-row px-5 py-2 text-left">
                <div className="flow-root ">
                  <p className="float-left text-xl font-bold">{plan.date}</p>
                  <Button size="xs" color="gray" className="float-right">
                    Edit
                  </Button>
                </div>
                <DailyItinerary details={plan.details} />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
