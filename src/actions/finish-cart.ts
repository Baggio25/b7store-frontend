"use server";

import { CartItem } from "@/types/cart-item";

export async function finishCart(
  token: string,
  addresId: number,
  cart: CartItem[]
) {
  return "https://google.com";
}
