"use server";

import { data } from "@/data";

export async function getProductsFromList(ids: (string | number)[]) {
  return data.products;
}
