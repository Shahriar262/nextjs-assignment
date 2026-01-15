"use client";

import { motion } from "framer-motion";
import { FaUsers, FaShieldAlt, FaRocket, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    icon: <FaUsers />,
    title: "10K+ Clients",
    desc: "Trusted by developers, startups, and enterprises worldwide.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    desc: "Industry-standard security practices for all products.",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    desc: "Optimized solutions designed for speed and scalability.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Dedicated technical support whenever you need it.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Tech Professionals <br className="hidden md:block" />
            Choose <span className="text-blue-200">TechHive</span>
          </h2>

          <p className="mt-5 text-blue-100 max-w-md">
            We deliver reliable, scalable, and secure IT solutions that help
            businesses grow faster in the digital era.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition"
            >
              <div className="text-3xl text-blue-200 mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-blue-100 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
