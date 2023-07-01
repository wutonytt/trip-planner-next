import ItineraryBreadcrumb from "./ItineraryBreadcrumb";
import Navigator from "@/app/navigator/Navigator";
import Map from "./Map";
import Itinerary from "./Itinerary";
// import { usePathname } from "next/navigation";

export default function ItineraryPage() {
  // const pathname = usePathname();
  // itinerary data should be fetch via API by trip-key (pathname or dedicated uuid)
  const itinerary = {
    trip_name: "Visiting my aunt in LA",
    plans: [
      {
        date: "Aug 1, 2023",
        details: [
          {
            type: "flight",
            time: "10:10 AM",
            title: "Taipei (TPE) to Los Angeles (LAX)",
            body: "Flight: Eva Air BR6 departed",
          },
          {
            type: "flight",
            time: "7:10 AM",
            title: "Land in LA",
            body: "Flight: Eva Air BR6 arrived",
          },
          {
            type: "lodging",
            time: "9:00 PM",
            title: "Rancho Cucamonga",
            body: "Aunt's house in LA",
          },
        ],
      },
      {
        date: "Aug 2, 2023",
        details: [
          {
            type: "flight",
            time: "3:00 PM",
            title: "Ontario (ONT) to Chicago (MDW)",
            body: "Flight: Southwest Airlines",
          },
          {
            type: "flight",
            time: "5:00 PM",
            title: "Ontario (ONT) to Chicago (MDW)",
            body: "Flight: Southwest Airlines landed in Chicago",
          },
        ],
      },
      {
        date: "Aug 3, 2023",
        details: [
          {
            type: "train",
            time: "4:00 PM",
            title: "Chicago Union Station to Champaign-Urbana Station",
            body: "Amtrak",
          },
          {
            type: "train",
            time: "6:00 PM",
            title: "Chicago Union Station to Champaign-Urbana Station",
            body: "Amtrak: arrived at Champaign-Urbana Station",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <Navigator />
      <div className="px-5 pt-5">
        <ItineraryBreadcrumb trip_name={itinerary.trip_name} />
      </div>
      <div className="flex h-[calc(100vh-110px)]">
        <Itinerary plans={itinerary.plans} />
        <Map />
      </div>
    </div>
  );
}
