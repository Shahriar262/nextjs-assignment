"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "High Performance",
    desc: "Optimized hardware & software solutions for speed and efficiency.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Systems",
    desc: "Enterprise-grade security you can rely on.",
  },
  {
    icon: <FaCogs />,
    title: "Customizable",
    desc: "Flexible products tailored to your business needs.",
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
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-0">
      {/* Section Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose TechHive
        </h2>
        <p className="mt-4 text-gray-600">
          We deliver reliable, secure, and high-performance IT products for
          modern businesses.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="p-6 bg-white rounded-2xl shadow-md text-center cursor-pointer hover:shadow-xl"
          >
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
