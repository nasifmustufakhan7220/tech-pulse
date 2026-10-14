import CategoryProducts from "@/components/CategoryProducts";
import ProductGridSkeleton from "@/components/Home/ProductGridSkeleton";
import { Suspense } from "react";


const CategoryProductsPage = ({params}:{params:Promise<{categorySlug:string}>}) => {
    return (
        <div>
            <Suspense fallback={<ProductGridSkeleton count={8} />}>
                <CategoryProducts params={params}/>
            </Suspense>
        </div>
    );
};

export default CategoryProductsPage;