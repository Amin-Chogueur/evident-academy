"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State } from "country-state-city";

import type { IState } from "country-state-city";
import { useAuth } from "@/context/AuthContext";
import { registerFormSchema } from "@/lib/authValidation/formSchema";
import Input from "@/components/common/Input";
import Link from "next/link";

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const { loading, onRegister } = useAuth();
  const countries = Country.getAllCountries();
  const [cities, setCities] = useState<IState[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitted, isValid },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
    criteriaMode: "all",
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      clinic: "",
      country: "",
      city: "",
      service: "",
      password: "",
    },
  });

  const selectedCountry = watch("country");
  const registerInput = [
    {
      type: "text",
      placeholder: "Your full name",
      lable: "Full Name",
      error: errors.fullName,
      register: register("fullName"),
    },
    {
      type: "email",
      placeholder: "example@email.com",
      lable: "Email",
      error: errors.email,
      register: register("email"),
    },
    {
      type: "tel",
      placeholder: "+213...",
      lable: "Mobile Number",
      error: errors.mobile,
      register: register("mobile"),
    },
    {
      type: "text",
      placeholder: "Name of your clinic or institution",
      lable: "Clinic/Organization",
      error: errors.clinic,
      register: register("clinic"),
    },
    {
      type: "select",
      placeholder: "--Please choose an option--",
      lable: "Service",
      values: [
        { label: "Hands-on Dental Courses", value: "Hands-on Dental Courses" },
        { label: "Online Dental Courses", value: "Online Dental Courses" },
        { label: "Join the Academy Club", value: "Join the Academy Club" },
      ],
      error: errors.service,
      register: register("service"),
    },
    {
      type: "select",
      lable: "Country",
      placeholder: "--Select a country--",
      values: countries.map((c) => ({
        label: c.name,
        value: c.isoCode,
      })),
      error: errors.country,
      register: register("country"),
    },
    {
      type: "select",
      lable: "City",
      placeholder: "--Select a city--",
      values: cities.map((c) => ({
        label: c.name,
        value: c.name,
      })),
      error: errors.city,
      register: register("city"),
    },
    {
      type: "password",
      placeholder: "******",
      lable: "Password",
      error: errors.password,
      register: register("password"),
    },
  ];

  useEffect(() => {
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry);
      setCities(stateList);
      // Reset the city when country changes
      setValue("city", "");
    } else {
      setCities([]);
    }
  }, [selectedCountry, setValue]);
  function handleRegister(data: RegisterFormData) {
    onRegister(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="max-w-4xl mx-auto px-4 py-12 bg-gray-100 rounded-2xl space-y-5"
    >
      <h1 className="text-[48px] font-bold text-center">Register</h1>
      {registerInput.map((input, index) => (
        <Input key={index} {...input} />
      ))}

      <button
        type="submit"
        disabled={!isValid || isSubmitted || loading}
        className="bg-black hover:bg-[#222] p-2 rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {loading ? "In Process..." : "Register"}
      </button>
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 underline">
          Log in here
        </Link>
        .
      </p>
    </form>
  );
}
