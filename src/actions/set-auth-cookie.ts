"use server";

import { setServerAuthToken } from "@/libs/server-cookies";

export async function setAuthCookie(token: string) {
  await setServerAuthToken(token);
}
