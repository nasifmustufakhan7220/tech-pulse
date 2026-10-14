const MarqueeSkeleton = () => {
  return (
    <div className="w-full overflow-hidden border border-slate-200 bg-white">
      <div className="flex min-w-max animate-pulse items-center gap-8 px-4 py-3">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-2.5"
          >
            {/* Product Name */}
            <div className="h-3 w-28 rounded bg-slate-200" />

            {/* Price */}
            <div className="h-3 w-14 rounded bg-slate-200" />

            {/* Price Change Badge */}
            <div
              className={`h-5 w-14 rounded border ${
                index % 2 === 0
                  ? "border-red-100 bg-red-50"
                  : "border-emerald-100 bg-emerald-50"
              }`}
            />

            {/* Separator */}
            <div className="h-1 w-1 rounded-full bg-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSkeleton;