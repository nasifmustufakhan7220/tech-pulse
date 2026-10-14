
import Link from "next/link";
import { FaArrowLeft, FaHouse, FaMagnifyingGlass } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-4 py-12">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="relative mx-auto mb-8 flex h-48 w-64 items-center justify-center sm:h-56 sm:w-80">
          <div className="absolute inset-0 rounded-full bg-indigo-50 blur-2xl" />

          <div className="relative flex items-center gap-2">
            <span className="text-8xl font-black tracking-tighter text-indigo-100 sm:text-9xl">
              4
            </span>

            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-indigo-600 shadow-xl shadow-indigo-200 sm:h-28 sm:w-28">
              <FaMagnifyingGlass className="text-4xl text-white sm:text-5xl" />
            </div>

            <span className="text-8xl font-black tracking-tighter text-indigo-100 sm:text-9xl">
              4
            </span>
          </div>

          <span className="absolute right-6 top-5 h-3 w-3 rounded-full bg-purple-400" />
          <span className="absolute bottom-5 left-7 h-2.5 w-2.5 rounded-full bg-indigo-400" />
        </div>

        {/* Content */}
        <div className="mb-8 space-y-4">
          <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Error 404
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Oops! Page Not Found
          </h1>

          <p className="mx-auto max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            The page you are looking for does not exist or may have been moved.
            Let get you back to comparing the best tech prices.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 sm:w-auto"
          >
            <FaHouse className="text-xs" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:w-auto"
          >
            <FaArrowLeft className="text-xs" />
            Browse Products
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-100 pt-6">
          <p className="text-sm font-bold text-indigo-600">
            TechPulse
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Compare tech prices. Find the best deals.
          </p>
        </div>
      </div>
    </main>
  );
}
