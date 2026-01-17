"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 pt-8 md:pt-21 pb-0 md:pb-[50px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* LEFT: TEXT */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Smart IT Products for <br /> Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          viewport={{ once: false }}
          className="mt-5 text-gray-600 max-w-lg"
        >
          Enterprise-grade hardware, cloud solutions, and scalable IT
          infrastructure tailored for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: false }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/items"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="border bg-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition"
          >
            Contact Sales
          </Link>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
        className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src="/banner2222.jpg"
          alt="TechHive IT Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </section>
  );
}
