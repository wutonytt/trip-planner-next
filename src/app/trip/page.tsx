"use client";

import { Flowbite } from "flowbite-react";
import Navigator from "../navigator/Navigator";
import TripList from "./TripList";
import TripBreadcrumb from "./TripBreadcrumb";
import { isClient } from "../../utils/isClient";

export default function TripPage() {
  let dark = isClient() && localStorage.getItem("theme") === "dark";

  return (
    <Flowbite theme={{ dark }}>
      <Navigator />
      <div className="p-5">
        <TripBreadcrumb />
        <TripList />
      </div>
    </Flowbite>
  );
}
