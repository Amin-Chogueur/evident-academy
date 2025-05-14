"use client";

import { Country, State } from "country-state-city";
import type { IState } from "country-state-city";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import BackgroundImage from "@/components/common/backgroundImage";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  mobile: z.string().min(5, "Mobile number is required"),
  clinic: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
  });

  const countries = Country.getAllCountries();
  const selectedCountry = watch("country");

  const [cities, setCities] = useState<IState[]>([]);

  useEffect(() => {
    if (selectedCountry) {
      setCities(State.getStatesOfCountry(selectedCountry));
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Here you can send the form data to your API
    reset();
  };

  return (
    <>
      <BackgroundImage imageKey="contactUs" />
      <section className="max-w-4xl mx-auto px-4 pb-12 space-y-8 bg-gray-100 rounded-2xl">
        <h1 className="text-[48px] font-bold text-center text-black">
          Contact us
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Get in touch with the Evident Academy team.
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-base md:text-lg font-bold"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="flex flex-col">
              <label htmlFor="title">
                Title<span className="text-red-700">*</span>:
              </label>
              <select
                id="title"
                {...register("title")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              >
                <option value="">Please select your title</option>
                <option value="Dental student">Dental student</option>
                <option value="Dentist">Dentist</option>
                <option value="Dental specialist">Dental specialist</option>
                <option value="Other">Other</option>
              </select>
              {errors.title && (
                <p className="text-red-600 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Full name */}
            <div className="flex flex-col">
              <label htmlFor="fullName">
                Full name<span className="text-red-700">*</span>:
              </label>
              <input
                id="fullName"
                type="text"
                {...register("fullName")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email">
                Email<span className="text-red-700">*</span>:
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label htmlFor="mobile">
                Mobile number<span className="text-red-700">*</span>:
              </label>
              <input
                id="mobile"
                type="tel"
                {...register("mobile")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              />
              {errors.mobile && (
                <p className="text-red-600 text-sm">{errors.mobile.message}</p>
              )}
            </div>

            {/* Clinic */}
            <div className="flex flex-col">
              <label htmlFor="clinic">Clinic/Organization:</label>
              <input
                id="clinic"
                type="text"
                {...register("clinic")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label htmlFor="country">
                Country<span className="text-red-700">*</span>:
              </label>
              <select
                id="country"
                {...register("country")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-red-600 text-sm">{errors.country.message}</p>
              )}
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label htmlFor="city">
                City<span className="text-red-700">*</span>:
              </label>
              <select
                id="city"
                {...register("city")}
                className="font-normal border border-[#a6a6a6] rounded p-2"
                disabled={!selectedCountry}
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-600 text-sm">{errors.city.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message">
              Message<span className="text-red-700">*</span>:
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="font-normal border border-[#a6a6a6] rounded p-2"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid && isSubmitted}
            className="px-6 py-2 bg-black text-white rounded hover:bg-[#222] disabled:bg-gray-600"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
