"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormStateReturn,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FeedbackMessage from "@/components/common/feedback-message";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/layout/header/Header";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import useLogin from "../_hooks/use-login";
import AuthModal from "@/components/features/AuthModal"; 
import { AuthModalProps } from "@/lib/types/authmodal";




  export default function SigninForm({ setShowModal, setCurrentForm }: AuthModalProps) {
  //state
  

  //Translations
  const t = useTranslations();
   //use login
   const {isPending, error, login} = useLogin();
  //navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //form&validation
  const Schema = z.object({
    email: z
      .string({ required_error: t("email-required") })
      .email(t("email-valid"))
      .min(1, t("email-required")),
    password: z
      .string({ required_error: t("password-required") })
      .min(1, t("password-required")),
  });
   type Inputs = z.infer<typeof Schema>;
  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(Schema),
  });

  //Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log("values", values);
    login({...values})
  }
  return (
    <>
      <h2 className='text-3xl font-normal mb-10 text-black'>{t('login-to-your-account')}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/**label */}
                <Label className="sr-only">{t("email")}</Label>
                {/**input */}
                <Input
                  {...field}
                  placeholder={t("email-placeholder")}
                  className="input-custom shadow-custom-shadow-input"
                />
                {/**error */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/**label */}
                <Label className="sr-only">{t("password")}</Label>
                {/**input */}
                <Input  type="password"
                  {...field}
                  placeholder={t("password-placeholder")}
                  className="input-custom shadow-custom-shadow-input"
                />
                {/** Feedback Message */}
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Feedback message*/}
          <div className="">
           {error&& <FeedbackMessage>{error.message}</FeedbackMessage>}
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              {/**input */}
              <input type="checkbox" />
              {/**label */}
              <label className="">{t("remeber-me")}</label>
            </div>

            {/* Forgot Password Button */}
            <button
              type="button"
              onClick={() => {setShowModal(true);setCurrentForm('forgot-password')}} 
              className="text-rose-900 text-sm font-semibold border-b-2 border-rose-900 ms-1"
            >
              {t("forget-password")}
            </button>
          </div>

          {/* Create Account */}
          <div className="flex justify-center">
            <p className="text-sm font-normal">{t('signin-signup')} <Link onClick={() => {setShowModal(true);setCurrentForm('signup')}}  className ="text-rose-900 text-sm font-semibold border-b-2 border-rose-900 ms-1"href="">{t('sign-up-link')}</Link></p>

          </div>
          <Button
            type="submit"
            className="submit-btn flex items-center justify-center w-full text-base h-[50px] font-medium"
            disabled={
              isPending || (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
            {t("login")}
          </Button>
        </form>
      </Form>
     
    </>
  );
}

