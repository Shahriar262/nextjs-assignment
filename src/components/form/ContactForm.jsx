"use client";

import { useState } from "react";
import { toast } from "react-toastify";


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    toast.success("Inquiry submitted successfully", {
      duration: 3000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          required
          placeholder="Full name"
          className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          required
          type="email"
          placeholder="Company email"
          className="border px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <input
        placeholder="Company / Organization"
        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      <textarea
        required
        rows={5}
        placeholder="Describe your requirements"
        className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      <button
        disabled={submitted}
        className={`px-8 py-3 rounded-lg font-medium transition
          ${
            submitted
              ? "bg-indigo-600 text-white cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
      >
        {submitted ? "Submitted" : "Submit Inquiry"}
      </button>

    </form>
  );
}
