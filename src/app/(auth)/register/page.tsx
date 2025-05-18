"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State } from "country-state-city";

import type { IState } from "country-state-city";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
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

export type RegisterFormData = z.infer<typeof formSchema>;

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
    resolver: zodResolver(formSchema),
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

      {/* Full Name */}
      <div>
        <label className="block font-semibold mb-1">
          Full Name<span className="text-red-700">*</span>:
        </label>
        <input
          type="text"
          {...register("fullName")}
          placeholder="Your full name"
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.fullName && (
          <p className="text-red-600">{errors.fullName.message}</p>
        )}
      </div>

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

      {/* Mobile Number */}
      <div>
        <label className="block font-semibold mb-1">
          Mobile Number<span className="text-red-700">*</span>:
        </label>
        <input
          type="tel"
          {...register("mobile")}
          placeholder="+213..."
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.mobile && (
          <p className="text-red-600">{errors.mobile.message}</p>
        )}
      </div>

      {/* Clinic/Organization */}
      <div>
        <label className="block font-semibold mb-1">
          Clinic/Organization<span className="text-red-700">*</span>:
        </label>
        <input
          type="text"
          {...register("clinic")}
          placeholder="Name of your clinic or institution"
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.clinic && (
          <p className="text-red-600">{errors.clinic.message}</p>
        )}
      </div>

      {/* Country */}
      <div className="flex flex-col">
        <label htmlFor="country" className="font-bold">
          Country<span className="text-red-700">*</span>:
        </label>
        <select
          id="country"
          {...register("country")}
          className="border rounded p-2"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-600">{errors.country.message}</p>
        )}
      </div>

      {/* City */}
      <div className="flex flex-col">
        <label htmlFor="city" className="font-bold">
          City<span className="text-red-700">*</span>:
        </label>
        <select
          id="city"
          {...register("city")}
          disabled={!selectedCountry}
          className="border rounded p-2 disabled:bg-gray-200"
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        {errors.city && <p className="text-red-600">{errors.city.message}</p>}
      </div>

      {/* Service */}
      <div className="flex flex-col">
        <label htmlFor="service" className="font-bold">
          Select a Service<span className="text-red-700">*</span>:
        </label>
        <select
          id="service"
          {...register("service")}
          className="border rounded p-2"
        >
          <option value="">-- Please choose an option --</option>
          <option value="Hands-on Dental Courses">
            Hands-on Dental Courses
          </option>
          <option value="Online Dental Courses">Online Dental Courses</option>
          <option value="Join the Academy Club">Join the Academy Club</option>
        </select>
        {errors.service && (
          <p className="text-red-600">{errors.service.message}</p>
        )}
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
        disabled={!isValid || isSubmitted || loading}
        className="bg-black hover:bg-[#222] p-2 rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {loading ? "In Process..." : "Register"}
      </button>
    </form>
  );
}
