"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">About TechHive</h3>
          <p className="text-gray-300 text-sm">
            TechHive is an IT products showcase project built with Next.js and
            Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-blue-400 transition">
                Items
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact & Social</h3>
          <p className="text-gray-300 text-sm">Email: admin@techhive.com</p>
          <p className="text-gray-300 text-sm mb-2">Phone: +880 1234 567890</p>
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} TechHive. All rights reserved.
      </div>
    </footer>
  );
}
