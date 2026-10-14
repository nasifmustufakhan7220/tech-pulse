import { ICategory, IProducts } from "@/Types/Tech.types";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories } from "./CategoryProducts";
import { notFound } from "next/navigation";

const getProductDetails = async (productSlug: string) => {
  const res = await fetch(
    `https://better-auth-backend-kappa.vercel.app/api/products/${productSlug}`,
  );
  if(!res.ok) notFound();
  return await res.json();
};

const ProductDetailsCard = async ({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) => {
  const { productSlug } = await params;

  const details: IProducts = await getProductDetails(productSlug);
  const Allcategories:ICategory[] = await getAllCategories();

  const category = Allcategories.find(c=>c.name.toLowerCase() === details.category);
  console.log(category);

  const lowest = details.stores.reduce((p, min) =>
    p.price < min.price ? p : min,
  );

  const keys = Object.entries(details.specs);

  return (
    <div>
      <div className="flex items-center gap-2 mb-8 text-xs text-slate-500">
        <Link href={`/`}><p className="text-indigo-600 hover:underline no-underline font-medium">Home</p></Link>
        <span>›</span>
        <Link href={`/category/${category?.slug}`}><p className="text-indigo-600 hover:underline no-underline capitalize font-medium">{category?.name.toUpperCase()}</p></Link>
        <span>›</span>
        <p className="text-slate-600 font-medium truncate">{details.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 flex flex-col gap-5">
          <div className="bg-white border border-slate-200 rounded-xl p-8 flex items-center justify-center min-h-70 shadow-xs">
            <Image
              alt="ASUS ROG Zephyrus G14 (2024)"
              src={details.image}
              width={500}
              height={500}
              style={{
                maxWidth: "100%",
                maxHeight: "240px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3.5 flex items-center gap-2">
              🏪 Store Comparison
            </h3>

            <div className="flex flex-col gap-2.5">
              {details.stores.map((s) => (
                <div key={s.name}>
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${lowest.price === s.price ? "border-emerald-300 bg-emerald-50/60" : "border-[#e2e8f0] bg-[#fafbfc]"} `}
                  >
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">
                        {s.name}
                      </div>
                      {lowest.price === s.price && (
                        <div className="text-[0.7rem] text-emerald-700 font-bold mt-0.5">
                          ✓ Lowest Price
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-slate-900 text-base">
                        {s.price}
                      </div>
                      <a
                        className="text-[0.72rem] text-indigo-600 hover:underline font-semibold no-underline"
                        target="_blank"
                        href={s.url}
                      >
                        Visit →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-5">
          <div>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md inline-block mb-3">
              {details.brand} · {details.category}
            </span>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {details.name}
            </h1>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {details.description}
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-xs text-slate-500 mb-1">Current Price</div>

                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  ৳{details.currentPrice}
                </div>

                <div className="flex items-center gap-2.5 mt-1.5">
                  <span className="text-xs text-slate-400 line-through">
                    ৳{details.previousPrice}
                  </span>

                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200">
                    {details.trend === "down"
                      ? `▼ ${Math.abs(details.trendPercent)}`
                      : `▲ ${Math.abs(details.trendPercent)}`}
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-3.5">
              📋 Key Specifications
            </h3>

            <div className="flex flex-col divide-y divide-slate-100">

                {keys.map((k, i) => (
                  <div key={i} className="flex justify-between py-2 text-xs">
                    <span className="text-slate-500 capitalize">{k[0]}</span>
                    <span className="text-slate-800 font-medium">
                      {k[1]}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
