"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export default function ItemCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-48">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
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
  );
}
