"use client";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const handelOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data: userSignUpData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (userSignUpData) {
      toast.success("Congratulations! You're singup done", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: {},
        className: "",

        // Custom Icon
        icon: "👏",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },

        // Additional Configuration
        removeDelay: 1000,

        // Toaster instance
        toasterId: "default",
      });
    } else {
      toast.error("Somethinng went wrong. Please try again", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: {},
        className: "",

        // Custom Icon
        icon: "🥹",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },

        // Additional Configuration
        removeDelay: 1000,

        // Toaster instance
        toasterId: "default",
      });
      console.log(error);
      return;
    }
  };
  return (
    <main className="flex min-h-[calc(100vh-77px)] items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-[20px] border border-slate-200 bg-white px-6 py-9 shadow-sm sm:px-9 sm:py-10">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">
            Create Account
          </h1>

          <p className="text-sm text-slate-500">
            Join TechPulse to track tech prices &amp; set alerts
          </p>
        </div>

        {/* Sign-up form */}
        <form className="space-y-6" onSubmit={handelOnSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              required
              className="w-full border-0 border-b border-slate-200 bg-transparent py-2 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full border-0 border-b border-slate-200 bg-transparent py-2 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-600"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              minLength={8}
              pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"
              title="Password must have at least 8 characters, 1 uppercase letter, and 1 number."
              required
              className="w-full border-0 border-b border-slate-200 bg-transparent py-2 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-600"
            />

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-[0.99]"
          >
            Sign Up
          </button>
        </form>

        {/* Sign-in link */}
        <p className="mt-7 text-center text-sm text-slate-500">
          Already have an account?
          <Link
            href="/sign-in"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;
