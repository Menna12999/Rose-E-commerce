'use server'

import { JSON_HEADER } from "@/lib/constants/api.constant"

export default async function VerifyCodeAction(fields: VerifyOTPFiled) {
    const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
        method: "POST",
        headers: { ...JSON_HEADER },
        body: JSON.stringify(fields),
    })

    const payload: VerifyOTPResponse = await response.json()

    return payload
}