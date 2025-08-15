"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { formatter } from "@/libs/number-formatter";
import { Product } from "@/types/product";

type Props = {
  data: Product;
};

export function ProductItem({ data }: Props) {
  const [liked, setLiked] = useState(false);

  const link = `/product/${data.id}`;

  function toggleLiked() {
    setLiked(!liked);
  }
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6">
      <div className="flex justify-end mb-4">
        <div
          onClick={toggleLiked}
          className="cursor-pointer size-12 border border-gray-200 rounded-sm flex justify-center items-center"
        >
          {liked && (
            <Image
              src={"/assets/ui/heart-3-fill.png"}
              alt=""
              width={24}
              height={24}
            />
          )}
          {!liked && (
            <Image
              src={"/assets/ui/heart-3-line.png"}
              alt=""
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="max-w-full h-48"
          />
        </Link>
      </div>
      <div className="mt-9 text-lg font-bold">
        <Link href={link}>{data.label}</Link>
      </div>
      <div className="mt-3 text-2xl font-bold text-blue-600">
        <Link href={link}>{formatter.format(data.price)}</Link>
      </div>
      <div className="mt-5 text-gray-400">Em até 12x no cartão</div>
    </div>
  );
}
