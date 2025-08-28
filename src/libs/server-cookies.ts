import { cookies } from "next/headers";

import { CartItem } from "@/types/cart-item";

//SERVER COOKIE
export async function getServerAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value || null;
}

export async function setServerAuthToken(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, { httpOnly: true });
}

export async function clearServerAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
}

// CART COOKIE
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
