"use client";
import { IProducts } from "@/Types/Tech.types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardSkeleton } from "./ProductsSkeleton";
import AllProducts from "./AllProducts";


const PriceDown = () => {
  const [priceDown, setPriceDown] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://better-auth-backend-kappa.vercel.app/api/products", {
      next: { revalidate: 60 },
    })
      .then((res) => {
        if(!res.ok) throw new Error("Data featching failed");
        return res.json();
      })
      .then((data) => setPriceDown(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const downPrices = priceDown
    .filter((down) => down.trend === "down")
    .slice(0, 4);
  return (
    <div>

    
    <section className="max-w-6xl mx-auto px-6 pb-12">
      <h2 className="text-lg font-bold text-slate-900 mb-4">🎯 Price Drops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? Array.from({ length: 4 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      )) : downPrices.map((down) => (
          <ProductCard key={down._id} card={down} />
        ))}
      </div>


      

    </section>
        <AllProducts products={priceDown} isLoading={isLoading} />
    </div>
  );
};

export default PriceDown;
