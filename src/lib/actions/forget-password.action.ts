'use server'

import { JSON_HEADER } from "@/lib/constants/api.constant"

export default async function ForgetPasswordAction(fields: ForgetPasswordField) {
    const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
        method: "POST",
        headers: { ...JSON_HEADER },
        body: JSON.stringify(fields),
    })

    const payload: ForgetPasswordResponse = await response.json()

    return payload
}