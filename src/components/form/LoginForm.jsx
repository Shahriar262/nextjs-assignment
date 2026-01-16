// "use client";

// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";

// export default function LoginForm() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const session = useSession();

//   useEffect(() => {
//     if (session.status === "authenticated") {
//       toast.success("Logged in successfully!", { autoClose: 2000 });
//       router.push("/items");
//     }
//   }, [session.status]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Mock login
//     if (email === "admin@example.com" && password === "123456") {
//       document.cookie = "auth=true; path=/";
//       toast.success("Logged in successfully!", { autoClose: 2000 });
//       router.push("/items");
//     } else {
//       setError("Invalid credentials!");
//       toast.error("Login failed! Check your credentials.", { autoClose: 2000 });
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const res = await signIn("google", { redirect: false });
//     if (res?.error) {
//       toast.error("Google login failed!", { autoClose: 2000 });
//     } else {
//       toast.success("Google login successful!", { autoClose: 2000 });
//       router.push("/items");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Email address
//         </label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="you@example.com"
//           className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="••••••••"
//           className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {error && <p className="text-sm text-red-600">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
//       >
//         Sign In
//       </button>
//       {/* ===== Google Sign-In ===== */}
//       <div
//         onClick={handleGoogleSignIn}
//         className="mt-1 w-full flex items-center text-sm justify-center gap-2 border border-gray-400 hover:bg-gray-100 cursor-pointer py-1 rounded-md"
//       >
//         <FcGoogle size={30} />

//         <p>Continue with Google</p>
//       </div>
//     </form>
//   );
// }

"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const session = useSession();
  const [googleHandled, setGoogleHandled] = useState(false); // avoid duplicate toast

  // Google session effect
  useEffect(() => {
    if (session.status === "authenticated" && !googleHandled) {
      setGoogleHandled(true); // mark handled
      toast.success("Google login successful!", { autoClose: 2000 });
      router.push("/items");
    }
  }, [session.status, googleHandled, router]);

  // ===== Mock login handler =====
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Mock login
    if (email === "admin@example.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      toast.success("Mock login successful!", { autoClose: 2000 });
      router.push("/items");
    } else {
      setError("Invalid credentials!");
      toast.error("Login failed! Check your credentials.", { autoClose: 2000 });
    }
  };

  // ===== Google login handler =====
  const handleGoogleSignIn = async () => {
    setGoogleHandled(false); // reset
    const res = await signIn("google", { redirect: false });
    if (res?.error) {
      toast.error("Google login failed!", { autoClose: 2000 });
    }
    // else: toast + redirect handled in useEffect above
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Sign In
      </button>

      {/* ===== Google Sign-In ===== */}
      <div
        onClick={handleGoogleSignIn}
        className="mt-1 w-full flex items-center text-sm justify-center gap-2 border border-gray-400 hover:bg-gray-100 cursor-pointer py-1 rounded-md"
      >
        <FcGoogle size={30} />
        <p>Continue with Google</p>
      </div>
    </form>
  );
}
