const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen border-t border-b border-slate-200 bg-[#f7f9fc] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl animate-pulse">
        {/* Breadcrumb Skeleton */}
        <div className="mb-7 flex items-center gap-2">
          <div className="h-2 w-7 rounded bg-slate-200" />
          <div className="h-2 w-1 rounded bg-slate-200" />
          <div className="h-2 w-10 rounded bg-slate-200" />
          <div className="h-2 w-1 rounded bg-slate-200" />
          <div className="h-2 w-32 rounded bg-slate-200" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[368px_minmax(0,1fr)]">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Product Image Card */}
            <div className="flex h-63.75 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-28 w-44 rounded-lg bg-slate-200 sm:h-32 sm:w-48" />
            </div>

            {/* Store Comparison Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4.25 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-slate-200" />
                <div className="h-3 w-28 rounded bg-slate-200" />
              </div>

              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex min-h-15.5 items-center justify-between rounded-lg border p-3 ${
                      index === 0
                        ? "border-emerald-100 bg-emerald-50/50"
                        : "border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="h-3 w-16 rounded bg-slate-200" />
                      {index === 0 && (
                        <div className="h-2 w-20 rounded bg-slate-200" />
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="h-4 w-20 rounded bg-slate-200" />
                      <div className="h-2 w-9 rounded bg-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Product Title */}
            <div className="space-y-3 py-1">
              <div className="h-5 w-24 rounded bg-indigo-100" />
              <div className="h-7 w-4/5 max-w-95 rounded bg-slate-200" />
              <div className="h-3 w-full max-w-115 rounded bg-slate-200" />
            </div>

            {/* Current Price Card */}
            <div className="rounded-xl border border-slate-200 bg-white 4.25 shadow-sm">
              <div className="mb-2 h-3 w-20 rounded bg-slate-200" />
              <div className="mb-2 h-7 w-36 rounded bg-slate-200" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-10 rounded bg-slate-200" />
                <div className="h-5 w-12 rounded bg-rose-100" />
              </div>
            </div>

            {/* Key Specifications Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-4.25 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-slate-200" />
                <div className="h-3 w-32 rounded bg-slate-200" />
              </div>

              <div className="space-y-0">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex min-h-6.75 items-center justify-between gap-4 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="h-2.5 w-16 shrink-0 rounded bg-slate-200" />
                    <div className="h-2.5 w-28 max-w-[60%] rounded bg-slate-200 sm:w-36" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;