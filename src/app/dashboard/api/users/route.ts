import { connectDb } from "@/lib/mongoDb/connectDb";
import User from "@/lib/mongoDb/models/userModel";
import { NextResponse } from "next/server";

export async function GET() {
  connectDb();
  try {
    const users = await User.find(
      {},
      "fullName email mobile clinic country city service createdAt role"
    );

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
  }
}
