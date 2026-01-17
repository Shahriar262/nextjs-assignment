"use client";

import { motion } from "framer-motion";
import { FaLaptop, FaNetworkWired, FaCloud } from "react-icons/fa";

const categories = [
  {
    icon: <FaLaptop />,
    title: "Laptops & Devices",
    desc: "High-performance laptops and workstations",
  },
  {
    icon: <FaNetworkWired />,
    title: "Networking",
    desc: "Enterprise networking & infrastructure",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Tools",
    desc: "Cloud-ready software & services",
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

export default function CategoriesSection() {
  return (
    <section className="mt-0 md:mt-5 px-4 md:px-0">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Product Categories
        </h2>
        <p className="mt-4 text-gray-600">
          Explore a wide range of IT products designed for modern businesses.
        </p>
      </motion.div>

      {/* Category Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {categories.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center cursor-pointer"
          >
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
