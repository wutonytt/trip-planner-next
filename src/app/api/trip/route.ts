import Trip from "@/models/Trip";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Get trip list from mongodb
export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  const userId = token.sub;
  try {
    await connect();
    const tripData: any = await Trip.find({ userId: userId });
    return new NextResponse(JSON.stringify(tripData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
}

// create trip in mongodb
export async function POST(request: Request) {
  const { title, desc, image, userId } = await request.json();

  await connect();

  const newTrip = new Trip({
    title: title,
    desc: desc,
    image: image,
    userId: userId,
  });

  try {
    const saved_trip = await newTrip.save();
    return NextResponse.json({ id: saved_trip._id }, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
