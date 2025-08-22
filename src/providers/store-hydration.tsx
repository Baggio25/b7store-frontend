"use client";

import { useEffect } from "react";

import { getCartState } from "@/actions/get-cart-state";
import { useCartStore } from "@/store/cart";

export function StoreHydration() {
  useEffect(() => {
    getCartState().then(({ cart }) => {
      if (cart.length > 0) {
        useCartStore.setState({ cart });
      }
    });
  }, []);

  return null;
}
