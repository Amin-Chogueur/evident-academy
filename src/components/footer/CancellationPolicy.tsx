"use client";

import React from "react";

export default function CancellationPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Cancellation & Refund Policy</h1>

      {/* General */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">General</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            All cancellations must be submitted in writing via email to{" "}
            <a
              href="mailto:support@evidentacademy.com"
              className="text-blue-600 underline"
            >
              support@evidentacademy.com
            </a>
            .
          </li>
          <li>
            Refunds (when applicable) will be processed within 14 business days
            of cancellation approval.
          </li>
        </ul>
      </section>

      {/* Hands-On Courses */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hands-On Courses</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Full Refund:</strong> Cancellations made within 48 hours of
            payment are eligible for a full refund minus a small processing fee
            (if applicable).
          </li>
          <li>
            <strong>50% Refund or Full Credit:</strong> Cancellations received
            30 or more days before the course start date are eligible for either
            a 50% refund or a full credit valid for 12 months.
          </li>
          <li>
            <strong>50% Credit:</strong> Cancellations received 15–29 days
            before the course start date will receive a 50% credit valid for 12
            months.
          </li>
          <li>
            <strong>No Refund or Credit:</strong> Cancellations received fewer
            than 15 days before the course start date, or no-shows, are not
            eligible under any circumstances.
          </li>
        </ul>
      </section>

      {/* Online Courses */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Online Courses</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>No Refund:</strong> We do not offer refunds for online
            course purchases.
          </li>
        </ul>
      </section>

      {/* Conference Registration */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference Registration</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Full Refund:</strong> Within 48 hours of payment, minus a
            small processing fee (if applicable).
          </li>
          <li>
            <strong>50% Refund or Full Credit:</strong> 30+ days before the
            conference, valid toward any future course/conference for 12 months.
          </li>
          <li>
            <strong>50% Credit:</strong> 15–29 days before the conference, valid
            for 12 months.
          </li>
          <li>
            <strong>No Refund or Credit:</strong> Less than 15 days or no-shows
            are not eligible.
          </li>
        </ul>
      </section>

      {/* Academy Club Membership */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Evident Academy Club Membership
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Full Refund:</strong> Within 7 days of payment.
          </li>
          <li>
            <strong>No Refund:</strong> After 7 days, no refunds or credits will
            be issued.
          </li>
        </ul>
      </section>
    </div>
  );
}
