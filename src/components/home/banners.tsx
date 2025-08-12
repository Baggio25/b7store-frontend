import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";

type Props = {
  list: Banner[];
};

export function Banners({ list }: Props) {
  return (
    <div>
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            className="absolute inset-0 transition-all"
          >
            <Image
              src={banner.img}
              alt="Banner"
              width={1200}
              height={400}
              className="rounded-sm"
            />
          </Link>
        ))}
      </div>
      <div className="">...</div>
    </div>
  );
}
