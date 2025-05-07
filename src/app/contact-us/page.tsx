import React from "react";

export default function ContactUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8 bg-gray-100  rounded-2xl">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600">
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
              className="font-normal border border-blue-500 rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fullName">Full name:</label>
            <input
              id="fullName"
              type="text"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile">Mobile number:</label>
            <input
              id="mobile"
              type="tel"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="clinic">Clinic/Organization:</label>
            <input
              id="clinic"
              type="text"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country">Country:</label>
            <input
              id="country"
              type="text"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="city">City:</label>
            <input
              id="city"
              type="text"
              className="font-normal border border-blue-500  rounded p-2"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={5}
            className="font-normal border border-blue-500  rounded p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
