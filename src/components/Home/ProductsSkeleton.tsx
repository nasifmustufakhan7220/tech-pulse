
const SkeletonBox = ({
  className = "",
}: {
  className?: string;
}) => (
  <div
    className={`animate-pulse rounded bg-gray-200 ${className}`}
  />
);

export const ProductCardSkeleton = () => {
  return (
    <div className="flex h-full min-w-0 animate-pulse flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Product image */}
      <div className="relative mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100 p-3">
        <SkeletonBox className="h-20 w-3/5 rounded-md bg-gray-300" />

        {/* Discount badge */}
        <SkeletonBox className="absolute right-2.5 top-2.5 h-5 w-14 rounded-md bg-rose-100" />

        {/* Saving badge */}
        <SkeletonBox className="absolute left-2.5 top-2.5 h-5 w-16 rounded-md bg-emerald-100" />
      </div>

      {/* Category */}
      <div className="mb-2">
        <SkeletonBox className="h-4 w-16 rounded" />
      </div>

      {/* Product name */}
      <SkeletonBox className="mb-2 h-4 w-full" />
      <SkeletonBox className="mb-3 h-3 w-3/5" />

      {/* Price */}
      <div className="mb-3 flex items-baseline gap-2.5">
        <SkeletonBox className="h-6 w-24" />
        <SkeletonBox className="h-3 w-14" />
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <SkeletonBox className="h-3 w-16" />
        <SkeletonBox className="h-3 w-20" />
      </div>
    </div>
  );
};
