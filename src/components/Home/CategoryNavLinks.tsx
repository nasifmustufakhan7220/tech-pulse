"use client";
import { ICategory } from "@/Types/Tech.types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryNavLinks = () => {
  const [navLinks, setNavLinks] = useState<ICategory[]>([]);

  useEffect(() => {
    fetch("https://better-auth-backend-kappa.vercel.app/api/categories", {
      next: { revalidate: 60 },
    })
      .then((res) => {
        if(!res.ok) notFound();
       return res.json()
      })
      .then((data) => setNavLinks(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="max-w-6xl mx-auto px-6 pb-8">
      <div className="flex flex-wrap gap-2 justify-center list-none">
        <Link href={'/'} className="px-3.5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold no-underline">🔥 All</Link>
        {navLinks.map((link) => (
          <Link href={`/category/${link?.slug}`} key={link?._id}>
            <div
            className="pl-3 pr-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 text-slate-600 text-xs font-medium no-underline transition-colors cursor-pointer"
            
          >
            {link?.icon}
            {link?.name}
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryNavLinks;
