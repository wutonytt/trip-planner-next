"use client";

import { Breadcrumb } from "flowbite-react";
import { FaHouse } from "react-icons/fa6";

export default function ItineraryBreadcrumb({ trip_name }: any) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={FaHouse}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/trip">Trips</Breadcrumb.Item>
      <Breadcrumb.Item>{trip_name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
