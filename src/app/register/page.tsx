"use client";
import PaymentOptions from "@/components/PaymentOptions";
import { Country, State } from "country-state-city";
import { useState } from "react";
export default function Register() {
  const countries = Country.getAllCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const cities = State.getStatesOfCountry(selectedCountry);
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <form className="max-w-4xl mx-auto px-4 py-12  bg-gray-100  rounded-2xl space-y-5">
      <h1 className="text-[48px] font-bold text-center ">Register</h1>

      <div>
        <label className="block font-semibold mb-1">Full Name:</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border border-[#a6a6a6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Email:</label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full border border-[#a6a6a6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blackfocus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Mobile Number:</label>
        <input
          type="tel"
          placeholder="+213..."
          className="w-full border border-[#a6a6a6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Clinic/Organization:</label>
        <input
          type="text"
          placeholder="Name of your clinic or institution"
          className="w-full border border-[#a6a6a6] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="country" className="font-bold">
          Country:
        </label>
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
        <label htmlFor="city" className=" font-bold">
          City:
        </label>
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
      <div className="flex flex-col">
        <label htmlFor="service" className="block mb-2 font-bold">
          Select a Service
        </label>
        <select
          id="service"
          className="font-normal border border-[#a6a6a6] rounded p-2"
        >
          <option value="">-- Please choose an option --</option>
          <option value="hands-on">Hands-on Dental Courses</option>
          <option value="online">Online Dental Courses</option>
          <option value="club">Join the Academy Club</option>
        </select>
      </div>
      <PaymentOptions />
      <button className="bg-black hover:bg-[#222] p-2 rounded cursor-pointer text-white">
        Rgister
      </button>
    </form>
  );
}
