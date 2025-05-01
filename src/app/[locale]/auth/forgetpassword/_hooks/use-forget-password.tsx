"use client";
import ForgetPasswordAction from "@/lib/actions/forget-password.action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from '@/hooks/use-toast';

import {ForgetPasswordProps} from '@/lib/types/authmodal'

export default function useForgetPassword({ setShowModal, setCurrentForm }:ForgetPasswordProps) {
    // Translations
    const t = useTranslations();

    // Mutations
    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: ForgetPasswordField) => {
            const payload = await ForgetPasswordAction(fields)
            if ("error" in payload) throw new Error(payload.error);
            return payload
        },
        onSuccess: () => {
            toast({
                description:(t('forgetpassword-info'))
            })
            setTimeout(() => {
                setCurrentForm("verify-password")
                setShowModal(true)
            }, 1000);
        }
    })

    return { isPending, error, forgetPassword: mutate }
}