"use client";

import { Flowbite } from "flowbite-react";
import Navigator from "./Navigator";
import { isClient } from "./isClient";

export default function Home() {
  let dark = isClient() && localStorage.getItem("theme") === "dark";

  return (
    <Flowbite theme={{ dark }}>
      <Navigator />
      <p className="text-center text-3xl font-bold dark:text-white">
        Home Page
      </p>
    </Flowbite>
  );
}
