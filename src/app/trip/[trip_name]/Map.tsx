"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 40.76, lng: -73.983 }), []);

  return (
    <div className="w-0 md:w-2/3">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={center}
          zoom={15}
          options={{ gestureHandling: "greedy" }}
          // mapTypeId="satellite"
          // tilt={45}
        />
      )}
    </div>
  );
}
