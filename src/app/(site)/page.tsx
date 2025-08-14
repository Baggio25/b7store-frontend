import { Banners } from "@/components/home/banners";
import { InfoArea } from "@/components/home/info-area";
import { MostViewedProductsList } from "@/components/home/most-viewed-products-list";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="pb-96">
      <Banners list={data.banners} />
      <InfoArea />

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProductsList />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}></Suspense>
    </div>
  );
}
