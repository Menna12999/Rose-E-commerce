"use client";
import SetPasswordAction from "@/lib/actions/set-password.action";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from '@/hooks/use-toast'
import { ForgetPasswordProps } from "@/lib/types/authmodal";

export default function useSetPassword({ setShowModal, setCurrentForm }:ForgetPasswordProps) {
    // Translations
    const t = useTranslations();

    // Mutations
    const { isPending, error, mutate } = useMutation({
        mutationFn: async (fields: SetPasswordFeilds) => {
            const payload = await SetPasswordAction(fields)
            if ("error" in payload) throw new Error(payload.error);
            return payload
        },
        onSuccess: () => {
          toast({
                          description:(t('setPassword_message'))
                      })
                      setTimeout(() => {
                        setCurrentForm("signin")
                        setShowModal(true)
                    }, 1000);
           
        }
    })

    return { isPending, error, setPassword: mutate }
}