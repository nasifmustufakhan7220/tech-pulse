import { ICategory, IProducts } from "@/Types/Tech.types";
import React from "react";
import ProductCard from "./Home/ProductCard";
import Link from "next/link";
const getCategoriesProduct = async (categorySlug: string) => {
  const res = await fetch(
    `https://better-auth-backend-kappa.vercel.app/api/products?category=${categorySlug}`,
  );
  const data = await res.json();
  return data;
};

const getAllCategories = async()=>{
    const res = await fetch('https://better-auth-backend-kappa.vercel.app/api/categories');
    const data = await res.json();
    return data;
}

const CategoryProducts = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) => {
  const { categorySlug } = await params;
  const categoriesProducts: IProducts[] =
    await getCategoriesProduct(categorySlug);

    const singelCategory:ICategory[] = await getAllCategories();
    const categoryName = singelCategory.find(n=> n.name.toLowerCase() === categorySlug.toLowerCase());


  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pb-12 mt-10 ">
        <div className="flex items-center gap-2 mb-8 text-xs text-slate-500">
            <Link href={`/`}><span className="text-sm text-indigo-600 hover:underline no-underline font-medium">Home</span></Link>
            <span className="text-xl">›</span>
            <p className="text-sm text-slate-600 font-medium capitalize">{categoryName?.name}</p>
        </div>

        <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-2xl shadow-xs">
                {categoryName?.icon}
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight capitalize">{categoryName?.name}</h1>
                    <p className="text-slate-500 text-sm mt-0.5">Browse best prices for {categoryName?.name} across top stores</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500">{categoriesProducts.length}  products found</span>
                <span className="px-3 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[0.75rem] font-semibold">Prices updated today
</span>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categoriesProducts.map((c) => (
            <ProductCard key={c._id} card={c} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryProducts;
