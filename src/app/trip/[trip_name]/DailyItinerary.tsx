"use client";

import { Timeline } from "flowbite-react";
import { FaBed, FaLocationDot, FaPlane, FaTrain } from "react-icons/fa6";

interface DailyItineraryProps {
  details: { type: string; time: string; title: string; body: string }[];
}

const typeIconMapper = {
  lodging: FaBed,
  locaion: FaLocationDot,
  flight: FaPlane,
  train: FaTrain,
};

export default function DailyItinerary({ details }: DailyItineraryProps) {
  return (
    <div className="px-5 pb-0 pt-5">
      <Timeline>
        {details.map((detail, index) => {
          return (
            <Timeline.Item key={index}>
              <Timeline.Point
                icon={
                  typeIconMapper[detail.type as keyof typeof typeIconMapper]
                }
              />
              <Timeline.Content>
                <Timeline.Time>{detail.time}</Timeline.Time>
                <Timeline.Title>{detail.title}</Timeline.Title>
                <Timeline.Body>{detail.body}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
}
