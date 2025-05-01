"use client";
import VerifyCodeAction from "@/lib/actions/verify-code.action"
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from '@/hooks/use-toast'
import {ForgetPasswordProps} from '@/lib/types/authmodal'


export default function useVerifyCode({ setShowModal, setCurrentForm }:ForgetPasswordProps) {
    // Translations
    const t = useTranslations();

    // Mutations
    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: VerifyOTPFiled) => {
            const payload = await VerifyCodeAction(fields)
            if ("error" in payload) throw new Error(payload.error);
            return payload
        },
        onSuccess: () => {
            toast({
                description:(t('code-verified'))
            })
            setTimeout(() => {
                setCurrentForm("set-password")
                setShowModal(true)
            }, 2000);
        }
    })

    return { isPending, error, verifyCode: mutate }
}