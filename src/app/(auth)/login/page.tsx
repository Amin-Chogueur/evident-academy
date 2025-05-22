"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/common/Input";
import { loginFormSchema } from "@/lib/authValidation/formSchema";
import Link from "next/link";

export type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const { loading, onLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginInputs = [
    {
      type: "email",
      placeholder: "example@email.com",
      lable: "Email",
      error: errors.email,
      register: register("email"),
    },
    {
      type: "password",
      placeholder: "******",
      lable: "Password",
      error: errors.password,
      register: register("password"),
    },
  ];
  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="max-w-4xl mx-auto px-4 py-12 bg-gray-100 rounded-2xl space-y-5"
    >
      <h1 className="text-[48px] font-bold text-center">Login</h1>
      {loginInputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}

      <button
        type="submit"
        disabled={!isValid || isSubmitted || loading}
        className="bg-black hover:bg-[#222] p-2 rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? "In Process..." : "Login"}
      </button>
      <p className="text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-600 underline">
          Register here
        </Link>
        .
      </p>
    </form>
  );
}
