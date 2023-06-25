"use client";

import { Breadcrumb } from "flowbite-react";
import { FaHouse } from "react-icons/fa6";

export default function TripBreadcrumb({ trip_name }: any) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={FaHouse}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>Trips</Breadcrumb.Item>
    </Breadcrumb>
  );
}
