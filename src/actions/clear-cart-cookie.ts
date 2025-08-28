"use server";

import { clearServerCart } from "@/libs/server-cookies";

export async function clearCartCookie() {
  await clearServerCart();
}
