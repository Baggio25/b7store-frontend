import { Banners } from "@/components/home/banners";
import { InfoArea } from "@/components/home/info-area";
import { data } from "@/data";

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <InfoArea />
    </div>
  );
}
