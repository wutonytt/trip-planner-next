import Trip from "@/models/Trip";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  // Add your code here to fetch data
  try {
    await connect();
    const tripData: any = await Trip.find();
    return new NextResponse(JSON.stringify(tripData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
}
