import mongoose from "mongoose";
export async function connectDb() {
  const mongo_uri = process.env.MONGO_URI!;
  try {
    await mongoose.connect(mongo_uri, { dbName: "evident_academy" });
    console.log("db connection success");
  } catch (error) {
    console.log(error);
  }
}
