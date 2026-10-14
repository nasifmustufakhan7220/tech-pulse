
import { ProductCardSkeleton } from './ProductsSkeleton';

const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => {
    return (
        <div className='max-w-6xl mx-auto px-6 pb-12 mt-10 '>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: count }, (_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
        </div>
    );
};

export default ProductGridSkeleton;