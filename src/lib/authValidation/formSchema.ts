import { z } from "zod";
export const registerFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  mobile: z.string().min(1, "Mobile number is required"),
  clinic: z.string().min(1, "Clinic/Organization is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  service: z.string().min(1, "Service is required"),
  password: z
    .string()
    .min(6, "Password must be at leat 6 characters")
    .max(12, "Password too large"),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),

  password: z
    .string()
    .min(6, "Password must be at leat 6 characters")
    .max(12, "Password too large"),
});