"use client";

import { useEffect } from "react";

import { getCartState } from "@/actions/get-cart-state";
import { getAuthState } from "@/actions/get-auth-state";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";

export function StoreHydration() {
  const authStore = useAuthStore((state) => state);

  useEffect(() => {
    getAuthState().then(({ token }) => {
      if (token) authStore.setToken(token);
      authStore.setHydrated(true);
    });

    getCartState().then(({ cart }) => {
      if (cart.length > 0) {
        useCartStore.setState({ cart });
      }
    });
  }, []);

  return null;
}
