"use client";

import { Flowbite } from "flowbite-react";
import { isClient } from "../../isClient";
import Navigator from "@/components/Navigator";
import LoginForm from "./LoginForm";

export default function TripPage() {
  let dark = isClient() && localStorage.getItem("theme") === "dark";

  return (
    <Flowbite theme={{ dark }}>
      <Navigator />
      <div className="m-auto w-full p-5 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
        <LoginForm />
      </div>
    </Flowbite>
  );
}
