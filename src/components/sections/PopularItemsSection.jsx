"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/data/items.json");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to load items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <section className="py-20 mt-4 px-4 md:px-0">
      {/* ===== Section Header ===== */}
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

      {/* ===== Product Grid (ONLY 4 ITEMS) ===== */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        {!loading &&
          items.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 mt-1 flex-1">{item.description}</p>
                <p className="text-gray-800 font-medium mt-2">${item.price}</p>
                <Link href={`/items/${item.id}`}>
                  <div className="mt-4 text-blue-600 text-sm font-medium cursor-pointer">
                    View Details →
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
      </motion.div>

      {/* ===== Show All Button ===== */}
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
