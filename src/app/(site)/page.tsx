import { Suspense } from "react";
import { Banners } from "@/components/home/banners";
import { InfoArea } from "@/components/home/info-area";
import { MostSoldProductsList } from "@/components/home/most-sold-products-list";
import { MostViewedProductsList } from "@/components/home/most-viewed-products-list";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";

export default function Page() {
  return (
    <div className="pb-96">
      <Banners list={data.banners} />
      <InfoArea />

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProductsList />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProductsList />
      </Suspense>
    </div>
  );
}
