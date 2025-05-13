"use client";
import { Country, State } from "country-state-city";
import { useState } from "react";
import BackgroundImage from "@/components/common/backgroundImage";

export default function ContactUs() {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const cities = State.getStatesOfCountry(selectedCountry);
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      {" "}
      <BackgroundImage imageKey="contactUs" />{" "}
      <section className="max-w-4xl mx-auto px-4 pb-12 space-y-8 bg-gray-100  rounded-2xl">
        {/* Page Title */}
        <h1 className="text-[48px]  font-bold text-center text-black">
          Contact us
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold  text-center">
          Get in touch with the Evident Academy team.
        </h2>

        {/* Contact Form */}
        <form className="space-y-6 text-base md:text-lg font-bold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                className="font-normal border border-[#a6a6a6]  rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullName">Full name:</label>
              <input
                id="fullName"
                type="text"
                className="font-normal border border-[#a6a6a6]   rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                className="font-normal border border-[#a6a6a6]   rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile">Mobile number:</label>
              <input
                id="mobile"
                type="tel"
                className="font-normal border border-[#a6a6a6]  rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="clinic">Clinic/Organization:</label>
              <input
                id="clinic"
                type="text"
                className="font-normal border border-[#a6a6a6]   rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="font-normal border border-[#a6a6a6] rounded p-2"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City:</label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`font-normal border border-[#a6a6a6] rounded p-2 disabled:bg-gray-200`}
                disabled={!selectedCountry}
              >
                <option value="">Select a city</option>
                {cities &&
                  cities.map((city, i) => (
                    <option key={`${city.name}${i}`} value={city.name}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows={5}
              className="font-normal border border-[#a6a6a6]   rounded p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-black cursor-pointer text-white rounded hover:bg-[#222]"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
