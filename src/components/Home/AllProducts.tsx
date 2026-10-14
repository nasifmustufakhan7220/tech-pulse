"use client"
import { IProducts } from "@/Types/Tech.types";
import ProductCard from "./ProductCard";
import { ProductCardSkeleton } from "./ProductsSkeleton";
import { useEffect, useState } from "react";

const AllProducts = ({
  products,
  isLoading,
}: {
  products: IProducts[];
  isLoading: boolean;
}) => {
  const [search, setSearch] = useState("");

  const product = products.filter(p=>{
    if(search.trim().length < 0){
      return products;
    }

    const filterProducts = p.category.toLowerCase().includes(search.toLowerCase());
    return filterProducts;
  })

  // const [items, setItems] = useState<IProducts[]>([]);
  // useEffect(()=>{
  //    const product = products.filter(p=> {
  //     if(!search.trim()) return p;

  //     const filterProducts = p.name.toLowerCase().includes(search.toLowerCase());
  //     return filterProducts;
  //   });
  //   setItems(product);

  // },[search,products]);
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pb-12 mt-10 ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              ⚡ All Products
            </h2>
            <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full font-medium">
              {products.length} products
            </span>
          </div>
          <div className="relative w-full sm:w-72 md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 text-sm">
              🔍
            </span>
            <input
              placeholder="Search products..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-8 py-2 text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400 shadow-xs"
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: 12 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            :
            // need to add a consition if no data is load
             product.map((card) => (
                <ProductCard key={card._id} card={card} />
              ))}
             {/* items.map((card) => (
                <ProductCard key={card._id} card={card} />
              ))} */}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
