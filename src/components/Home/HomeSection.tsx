import React from "react";

const HomeSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 text-center">

    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">Compare Tech Prices Easily </h1>
      <p className="text-slate-600 text-sm md:text-base mb-6">
        Find the best deals for CPUs, GPUs, Laptops & Phones across top shops.
      </p>
      <div className="flex justify-center gap-3">
        <button className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm no-underline transition-colors">
          Browse Products
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm no-underline transition-colors">
          Sign Up
        </button>
      </div>
    </div>
    </section>
  );
};

export default HomeSection;
