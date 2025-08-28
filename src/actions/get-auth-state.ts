"use server";

import { getServerAuthToken } from "@/libs/server-cookies";

export async function getAuthState() {
  const token = await getServerAuthToken();
  return {
    token,
  };
}
