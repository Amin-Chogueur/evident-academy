export const faqData = [
  {
    id: 1,
    question: "Who is eligible to enroll in these courses?",
    answer: [
      {
        text: "Our courses are open to licensed dentists, dental specialists, and dental students, depending on the course requirements. Please refer to each course page for specific eligibility.",
      },
    ],
  },
  {
    id: 2,
    question: "Are the courses beginner-friendly?",
    answer: [
      {
        text: "Absolutely! We offer courses for all experience levels—beginner, intermediate, and advanced. Course descriptions clearly outline the appropriate level for each.",
      },
    ],
  },
  {
    id: 3,
    question: "What topics and skills will I learn?",
    answer: [
      {
        text: "Our curriculum covers endodontics, prosthodontics, pediatric dentistry, restorative techniques, and surgical procedures, among others.",
      },
    ],
  },
  {
    id: 4,
    question: "Will I get hands-on experience?",
    answer: [
      {
        text: "Yes. Practical training includes work with typodonts, extracted teeth, 3D models, and in some cases, animal specimens like sheep heads.",
      },
    ],
  },
  {
    id: 5,
    question: "Are instruments and materials provided?",
    answer: [
      {
        text: "Yes, all necessary materials, tools, and equipment are supplied during the training sessions.",
      },
    ],
  },
  {
    id: 6,
    question: "Should I bring any supplies with me?",
    answer: [
      {
        text: "No additional equipment is needed. Just bring a notebook, tablet, or laptop to take notes.",
      },
    ],
  },
  {
    id: 7,
    question: "Where are the courses conducted?",
    answer: [
      {
        text: "Courses are offered in major cities across Algeria. Course pages include exact venue and city details.",
      },
    ],
  },
  {
    id: 8,
    question: "How long does each course last?",
    answer: [
      {
        text: "Duration varies from 1-day intensives to 3-day comprehensive workshops. Course pages include full schedules.",
      },
    ],
  },
  {
    id: 9,
    question: "Will I get a certificate after completing the course?",
    answer: [
      {
        text: "Yes. A certificate of completion is awarded to all participants who successfully finish the course.",
      },
    ],
  },
  {
    id: 10,
    question: "What is your refund and cancellation policy?",
    answer: [
      {
        text: "Full Refund: Cancel within 48 hours of payment for a full refund (minus applicable fees).",
      },
      {
        text: "50% Refund or Full Credit: Cancel 30+ days before the course for a 50% refund or full credit toward any course within 12 months.",
      },
      {
        text: "50% Credit Only: Cancel 15–29 days before the course to receive a 50% credit for future courses (valid for 12 months).",
      },
      {
        text: "No Refund or Credit: Cancellations within 14 days or no-shows are non-refundable.",
      },
    ],
  },
  {
    id: 11,
    question: "Are there group or clinic discounts available?",
    answer: [
      {
        text: "Yes, we offer special pricing for group or clinic registrations. Please contact us for a personalized quote.",
      },
      {
        text: "Additional discounts are available for Evident Academy Club members.",
      },
    ],
  },
  {
    id: 12,
    question: "How do I register for a course?",
    answer: [
      {
        text: "Visit our website, select your preferred course, and complete the registration and payment process online.",
      },
    ],
  },
  {
    id: 13,
    question: "What payment methods do you accept?",
    answer: [
      {
        text: "We accept Carte EDAHABIA, major credit cards, PayPal, and bank transfers.",
      },
    ],
  },
];

export const courseDetails = {
  __html: `
    <div style="max-width: 64rem; margin: auto; padding: 1.25rem; border-radius: 1rem; font-size: 1.125rem; line-height: 1.75rem;">
      <!-- Top Info Section -->
      <div style="display: flex; flex-direction: column; gap: 1rem; text-align: center;" class="md:flex-row justify-center items-center gap-x-10">
        <p>
          <strong style="color: #a6a6a6;">Nearest date:</strong> 25/05/2025
        </p>
        <p>
          <strong style="color: #a6a6a6;">Next dates:</strong> 20/10/2025
        </p>
      </div>

      <hr style="border-top: 2px solid #a6a6a6; margin: 1rem 0;" />

      <!-- Course Program Section -->
      <div>
        <p style="font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; text-align: center; color: #a6a6a6;">
          Course Program:
        </p>
        <div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 1rem;" class="md:flex-row justify-between">
          <div style="flex: 1;">
            <p style="font-weight: 600;">DAY 1 – Primary Endo from A to Z</p>
            <ul style="list-style-type: disc; margin-left: 1rem;">
              <li>Diagnosis & treatment planning</li>
              <li>Isolation &rubber dam techniques</li>
              <li>Access cavity</li>
              <li>Working length determination & instrumentation</li>
              <li>Irrigation protocol</li>
              <li>3D Obturation</li>
            </ul>
          </div>
          <div style="flex: 1;">
            <p style="font-weight: 600;">DAY 2 – Retreatment from A to Z</p>
            <ul style="list-style-type: disc; margin-left: 1rem;">
              <li>Case selection</li>
              <li>Access through crown/indirect restoration</li>
              <li>Disobturation</li>
              <li>Ledge bypass</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Lecturer and Cost Info -->
      <p style="font-weight: 600; font-size: 1.25rem; margin-top: 1.5rem; text-align: center; color: #a6a6a6;">
        About the course lecturer:
      </p>

      <p>
        <strong>Course cost:</strong> The cost includes lunch & coffee breaks
      </p>

      <p>
        <strong>10% Discount</strong> for Evident Academy Club members on all hands-on courses
      </p>

      <!-- Agenda Section -->
      <div>
        <p style="font-weight: 600; font-size: 1.25rem; margin-top: 1.5rem;">
          Agenda:
        </p>
        <ul style="list-style-type: disc; margin-left: 1rem;">
          <li>09:00 – 12:00 Hands-on practice</li>
          <li>12:00 – 13:00 Lunch</li>
          <li>13:00 – 14:30 Hands-on practice</li>
          <li>14:30 – 15:30 Coffee break</li>
          <li>15:30 – 16:30 Hands-on practice</li>
        </ul>
      </div>

      <p style="margin-top: 1.5rem;">
        You will have access to cutting-edge equipment and a comprehensive selection of the latest materials and instruments available on the market.
      </p>
    </div>
  `,
};
