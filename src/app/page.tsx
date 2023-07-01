"use client";

import { Flowbite } from "flowbite-react";
import { isClient } from "../utils/isClient";
import Navigator from "@/app/navigator/Navigator";
export default function Home() {
  let dark = isClient() && localStorage.getItem("theme") === "dark";

  return (
    <Flowbite theme={{ dark }}>
      <Navigator />
      <div className="flex h-[calc(100vh-110px)] w-full flex-col items-center justify-center px-20 text-left md:px-24 xl:px-60">
        <p className="text-8xl font-bold text-gray-900 dark:text-white">
          Plan your next trip{" "}
          <span className="text-sky-500 dark:text-sky-400">wisely</span>
        </p>
      </div>
    </Flowbite>
  );
}
