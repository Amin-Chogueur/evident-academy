import User from "@/lib/mongoDb/models/userModel";
import { NextRequest, NextResponse } from "next/server";
type ParamsType = {
  userId: string;
};
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<ParamsType> }
) {
  try {
    const { userId } = await params;
    const deletedUser = await User.findByIdAndDelete(userId);
    const deletedId = deletedUser._id.toString();
    return NextResponse.json({
      message: "user Deleted successfully",
      deletedId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
