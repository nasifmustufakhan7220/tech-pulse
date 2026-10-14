import ProductDetailsCard from '@/components/ProductDetailsCard';
import ProductDetailsSkeleton from '@/components/ProductDetailsSkeleton';
import React, { Suspense } from 'react';

const ProductDetailsPage = ({params}:{params:Promise<{productSlug: string}>}) => {
    return (
        <div className='max-w-6xl mx-auto px-6 pb-12 mt-10'>
            <Suspense fallback={<ProductDetailsSkeleton/>}>
                <ProductDetailsCard params={params} />
            </Suspense>
        </div>
    );
};

export default ProductDetailsPage;