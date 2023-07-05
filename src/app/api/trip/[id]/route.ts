import Trip from "@/models/Trip";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

// Get a specific trip by _id from mongodb
export async function GET(_, { params }) {
  const { id } = params;

  try {
    await connect();
    const tripData: any = await Trip.findById(id);
    return new NextResponse(JSON.stringify(tripData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
}

// Delete a specific trip by _id from mongodb
export async function DELETE(_, { params }) {
  const { id } = params;

  try {
    await connect();
    const tripData: any = await Trip.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify(tripData), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
}
