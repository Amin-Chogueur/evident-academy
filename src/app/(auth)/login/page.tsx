"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),

  password: z
    .string()
    .min(6, "Password must be at leat 6 characters")
    .max(12, "Password too large"),
});

export type LoginFormData = z.infer<typeof formSchema>;

export default function Login() {
  const { onLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="max-w-4xl mx-auto px-4 py-12 bg-gray-100 rounded-2xl space-y-5"
    >
      <h1 className="text-[48px] font-bold text-center">Login</h1>

      {/* Email */}
      <div>
        <label className="block font-semibold mb-1">
          Email<span className="text-red-700">*</span>:
        </label>
        <input
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      {/* paasword */}
      <div>
        <label className="block font-semibold mb-1">
          Password<span className="text-red-700">*</span>:
        </label>
        <input
          type="password"
          {...register("password")}
          placeholder="******"
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid && isSubmitted}
        className="bg-black hover:bg-[#222] p-2 rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        Login
      </button>
    </form>
  );
}
