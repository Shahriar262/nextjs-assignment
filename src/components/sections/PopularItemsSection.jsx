"use client";

import { motion } from "framer-motion";
import { FaBox, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Smart Server Rack",
    category: "Infrastructure",
  },
  {
    id: 2,
    name: "Cloud Storage System",
    category: "Cloud",
  },
  {
    id: 3,
    name: "Enterprise Router",
    category: "Networking",
  },
  {
    id: 4,
    name: "AI Workstation Pro",
    category: "Hardware",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function PopularItemsSection() {
  return (
    <section className="py-20 mt-4 px-4 md:px-0">
      {/* Section Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Products
        </h2>
        <p className="mt-4 text-gray-600">
          Discover our most in-demand IT and technology solutions.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 text-2xl">
              <FaBox />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>

            <div className="mt-4 text-blue-600 text-sm font-medium">
              View Details →
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show All Button */}
      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <Link
          href="/items"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Show All Products <FaArrowRight />
        </Link>
      </motion.div>
    </section>
  );
}
