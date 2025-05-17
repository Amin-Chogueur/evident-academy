import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    clinic: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      enum: [
        "Hands-on Dental Courses",
        "Online Dental Courses",
        "Join the Academy Club",
      ],
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
