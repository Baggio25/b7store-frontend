"use client";

import { formatter } from "@/libs/number-formatter";
import { ProductComplete } from "@/types/product";
import Image from "next/image";

type Props = {
  product: ProductComplete;
};

export function ProductDetails({ product }: Props) {
  async function addToCart() {
    console.log("Item adicionado");
  }

  return (
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-8">CÓD.: {product.id}</div>
      <div className="font-bold text-3xl mb-6">{product.label}</div>
      <div className="font-bold text-3xl text-blue-600 mb-2">
        {formatter.format(product.price)}
      </div>
      <div className="text-sm text-gray-500 mb-6">Em até 12x no cartão</div>
      <div className="flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 max-w-xs py-4 px-8 bg-blue-600 rounded-sm hover:opacity-90 cursor-pointer text-white border-0"
        >
          Adicionar ao carrinho
        </button>
        <div className="border border-gray-200 flex justify-center items-center rounded-sm size-14 cursor-pointer">
          <Image
            src={"/assets/ui/heart-3-line.png"}
            alt=""
            width={24}
            height={24}
          />
        </div>
        <div className="border border-gray-200 flex justify-center items-center rounded-sm size-14 cursor-pointer">
          <Image
            src={"/assets/ui/share-line.png"}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
