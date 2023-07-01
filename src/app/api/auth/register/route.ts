import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export async function POST(request: Request) {
  // Get user data from the request body
  const { name, email, password, passwordConfirm } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  if (password !== passwordConfirm) {
    return new NextResponse("Passwords do not match", { status: 400 });
  }

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("Account has been created", { status: 201 });
  } catch (error: any) {
    return new NextResponse("Email has already been used", {
      status: 500,
    });
  }
}
