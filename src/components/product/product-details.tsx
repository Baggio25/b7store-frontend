"use client";

import { ProductComplete } from "@/types/product";

type Props = {
  product: ProductComplete;
};

export function ProductDetails({ product }: Props) {
  return (
    <div>
      <div>Product details</div>
    </div>
  );
}
