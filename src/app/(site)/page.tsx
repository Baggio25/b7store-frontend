import { Banners } from "@/components/home/banners";
import { InfoArea } from "@/components/home/info-area";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";

export default function Page() {
  return (
    <div className="pb-96">
      <Banners list={data.banners} />
      <InfoArea />
      <ProductListSkeleton />
      <ProductListSkeleton />
    </div>
  );
}
