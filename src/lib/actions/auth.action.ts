"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

const BASE_URL = process.env.API+'/auth'

export default async function signupAction(fields: RegisterFields) {
  const response = await fetch(BASE_URL + '/signup', {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify(fields),
  });

  const payload:APIResponse<LoginResponse> = await response.json();

  return payload;
}