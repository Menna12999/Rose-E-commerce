import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { toast } from '@/hooks/use-toast'


export default function useLogin() {
    const t = useTranslations();

  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.error) {
        throw new Error(response?.error || t("fallback-error-message"));
      }

      return response;
    },
    onSuccess: (data) => {
       toast({
             
                 description: t('signin-success'),
               })
        setTimeout(() => {
          window.location.href = data?.url || "/";
        }, 1000);
      },
    
  });
  return { isPending, error, login: mutate };

}
