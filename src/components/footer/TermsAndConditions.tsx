"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      {/* Registration & Payment */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Registration & Payment</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Registration is confirmed only once payment is received in full.
          </li>
          <li>
            We accept Carte EDAHABIA, credit cards, PayPal, and bank transfers.
          </li>
          <li>
            Prices are quoted in DZD and EUR and do not include applicable sales
            taxes.
          </li>
        </ul>
      </section>

      {/* Course Materials & Intellectual Property */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Course Materials & Intellectual Property
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            All slides, handouts, videos, and other materials remain the
            exclusive property of Evident Academy.
          </li>
          <li>
            You may not reproduce, distribute, or publicly share any portion of
            the course materials without written permission.
          </li>
        </ul>
      </section>

      {/* Participant Conduct */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Participant Conduct</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            You agree to abide by all safety and hygiene protocols, especially
            during hands-on sessions.
          </li>
          <li>
            Disruptive behavior may result in removal from the course without
            refund.
          </li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certificates</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Hands-on courses:</strong> Attend ≥ 90% of sessions and
            complete all exercises to qualify for a certificate.
          </li>
          <li>
            <strong>Online courses:</strong> Complete 100% of the course
            content.
          </li>
          <li>
            <strong>Conferences:</strong> Attend the full duration and check in
            at designated points. For workshops, ≥ 90% attendance is required
            for a certificate.
          </li>
          <li>
            <strong>Evident Academy Club:</strong> Attend all sessions and
            participate in discussions for the full month. Certificates are
            issued upon request.
          </li>
        </ul>
      </section>

      {/* Liability & Disclaimer */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Liability & Disclaimer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Evident Academy and its instructors are not liable for any direct or
            indirect damages arising from participation in our courses.
          </li>
          <li>
            Clinical techniques demonstrated are for educational purposes;
            always exercise professional judgment and comply with local
            regulations.
          </li>
        </ul>
      </section>

      {/* Privacy & Data Protection */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Privacy & Data Protection
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            We collect only the information necessary to register and
            communicate with you.
          </li>
          <li>
            Your data will be processed in accordance with our Privacy Policy
            and will not be shared without your consent.
          </li>
        </ul>
      </section>

      {/* Force Majeure */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Force Majeure</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            We are not responsible for delays or cancellations caused by events
            beyond our control (e.g., natural disasters, government actions,
            pandemics).
          </li>
          <li>
            In such cases, we will offer you a full credit toward a future
            course.
          </li>
        </ul>
      </section>

      {/* Modifications */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Modifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            We reserve the right to change course content, faculty, dates, or
            venue as necessary.
          </li>
          <li>
            Significant changes will be communicated at least 30 days in
            advance. You may choose to:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Transfer your registration to a future offering of the same
                course (subject to availability).
              </li>
              <li>
                Receive a full credit toward any other course or program, valid
                for up to 12 months.
              </li>
            </ul>
          </li>
          <li>
            Refunds will only be issued if transfer or credit options are not
            feasible.
          </li>
        </ul>
      </section>

      {/* Governing Law */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
        <p>
          These terms are governed by the laws of{" "}
          <strong>[State/Country]</strong>. Any disputes will be resolved in the
          courts of <strong>[City, State/Country]</strong>.
        </p>
      </section>

      {/* Final Acknowledgement */}
      <section className="mt-8">
        <p>
          By completing your registration, you acknowledge that you have read,
          understand, and agree to these Cancellation & Refund Policies and
          Terms & Conditions.
        </p>
      </section>
    </div>
  );
}
