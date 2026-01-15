"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Arif Hossain",
    role: "Senior Software Engineer",
    company: "CloudNova",
    image: "/img1.jpg", 
    review:
      "TechHive delivers top-quality IT products that integrate seamlessly into our workflow. Performance and reliability are truly impressive.",
  },
  {
    name: "Nusrat Jahan",
    role: "IT Manager",
    company: "DataCore Ltd.",
    image: "/img22.jpg",
    review:
      "We’ve reduced deployment time significantly after using TechHive solutions. Their support team is responsive and professional.",
  },
  {
    name: "Rafi Ahmed",
    role: "Startup Founder",
    company: "DevSpark",
    image: "/img2.jpg",
    review:
      "Clean architecture, excellent documentation, and scalable tools. TechHive is now our go-to IT solutions provider.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 mt-7 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Professionals Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Trusted by engineers, managers, and founders across the tech
            industry.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-sm p-6 cursor-pointer hover:shadow-md transition"
            >
              <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.review}
              </p>

              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
