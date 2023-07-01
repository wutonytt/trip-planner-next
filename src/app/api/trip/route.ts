import Trip from "@/models/Trip";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// Get trip list from mongodb
export async function GET() {
  try {
    await connect();
    const tripData: any = await Trip.find();
    return new NextResponse(JSON.stringify(tripData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
}

// create trip in mongodb
export async function POST(request: Request) {
  const { title, desc, image } = await request.json();

  await connect();

  const newTrip = new Trip({
    title: title,
    desc: desc,
    image: "",
  });

  try {
    await newTrip.save();
    return new NextResponse("Trip created", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
