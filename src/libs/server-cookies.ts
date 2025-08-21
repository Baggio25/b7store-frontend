import { cookies } from "next/headers";

import { CartItem } from "@/types/cart-item";

export async function getServerCart(): Promise<CartItem[]> {
  const cookieStore = await cookies();
  const value = cookieStore.get("cart")?.value;

  if (!value) {
    return [];
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return [];
  }
}

export async function setServerCart(cart: CartItem[]) {
  const cookieStore = await cookies();
  cookieStore.set("cart", JSON.stringify(cart), { httpOnly: true });
}

export async function clearServerCart() {
  const cookieStore = await cookies();
  cookieStore.delete("cart");
}
