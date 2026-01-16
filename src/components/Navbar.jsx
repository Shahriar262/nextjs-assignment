"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import {
  IoHomeOutline,
  IoLogInOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    const cookieAuth = document.cookie.includes("auth=true"); 
    const googleAuth = !!session?.user; 
    setIsLoggedIn(cookieAuth || googleAuth);
  }, [pathname, session]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    // Remove mock login cookie
    document.cookie = "auth=; max-age=0; path=/";
    // Sign out google session
    await signOut({ redirect: false });
    setIsLoggedIn(false);
    toast.success("Logged out successfully!", { autoClose: 2000 });
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo3.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span className="font-bold text-xl text-gray-800">TechHive</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-[6px]"
          >
            <IoHomeOutline /> Home
          </Link>
          <Link
            href="/items"
            className="text-gray-700 hover:text-blue-600 flex items-center gap-[6px]"
          >
            <AiOutlineProduct className="text-[18px] md:text-[19px]" /> Items
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-4 py-1 cursor-pointer rounded hover:bg-blue-700 transition flex items-center gap-[6px]"
            >
              <IoLogOutOutline className="text-[18px] md:text-[19px]" /> Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-1 cursor-pointer rounded hover:bg-blue-700 transition flex items-center gap-[6px]"
            >
              <IoLogInOutline className="text-[18px] md:text-[19px]" /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-800" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/items"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Items
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="w-full block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
