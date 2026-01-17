"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative py-5 md:py-14 px-4 md:px-0">
      {/* Gradient rounded container + blur wrapper */}
      <div className="relative max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-12 py-16 overflow-hidden">
        {/* Decorative blurred circles confined inside container */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold leading-tight text-center"
        >
          Build Smarter with <span className="text-blue-200">TechHive</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-4 text-blue-100 max-w-2xl mx-auto text-sm md:text-base text-center"
        >
          Discover high-quality IT products designed for performance, security,
          and scalability. Trusted by professionals worldwide.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/items"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition"
          >
            Browse Products <FaArrowRight />
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 border border-white/70 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
