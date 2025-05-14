"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State } from "country-state-city";
import type { IState } from "country-state-city";
import PaymentOptions from "@/components/PaymentOptions";

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
});

type FormData = z.infer<typeof formSchema>;

export default function Register() {
  const countries = Country.getAllCountries();
  const [cities, setCities] = useState<IState[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitted, isValid },
    reset,
  } = useForm<FormData>({
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

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          <option value="hands-on">Hands-on Dental Courses</option>
          <option value="online">Online Dental Courses</option>
          <option value="club">Join the Academy Club</option>
        </select>
        {errors.service && (
          <p className="text-red-600">{errors.service.message}</p>
        )}
      </div>

      {/* Payment Options */}
      <PaymentOptions />

      <button
        type="submit"
        disabled={!isValid && isSubmitted}
        className="bg-black hover:bg-[#222] p-2 rounded text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        Register
      </button>
    </form>
  );
}
