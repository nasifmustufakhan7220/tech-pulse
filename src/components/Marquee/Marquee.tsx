
import { IProducts } from "@/Types/Tech.types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://better-auth-backend-kappa.vercel.app/api/products",
    { cache: "force-cache" },
  );

  const data: IProducts[] = await res.json();

  return (
    <div className="border border-[#e2e8f0] px-3 py-2.5">
      <MarqueeText direction="right" pauseOnHover={true} className="cursor-pointer">
        {data.map((mar) => (
          <div
            key={mar._id}
            className="mx-1 inline-flex items-center gap-2 whitespace-nowrap"
          >

            {/* Product Name */}
            <p className="text-[12px] font-bold text-slate-700">
              {mar.name}
            </p>

            {/* Current Price */}
            <p className="text-[12px] font-bold text-slate-800">
              ৳{mar.currentPrice}
            </p>

            {/* Price Trend */}
            {mar.trend === "up" ? (
              <span className="inline-flex items-center gap-1 rounded border border-red-200 bg-red-50 px-1.5 py-0.5 text-xs font-bold text-red-600">
                <span>▼</span>
                <span>{Math.abs(mar.trendPercent)}%</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded border border-green-200 bg-green-50 px-1.5 py-0.5 text-xs font-bold text-green-700">
                <span>▲</span>
                <span>{Math.abs(mar.trendPercent)}%</span>
              </span>
            )}

            {/* Separator */}
            <span className="text-slate-300 mr-6">•</span>

            
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
