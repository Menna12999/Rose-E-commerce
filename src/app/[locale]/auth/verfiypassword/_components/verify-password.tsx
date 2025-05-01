"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {

  SubmitHandler,
  useForm,

} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FeedbackMessage from "@/components/common/feedback-message";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useVerifyCode from "../_hooks/use-verify-password"
import { ForgetPasswordProps } from "@/lib/types/authmodal";



  export default function VerifyPassword({ setShowModal, setCurrentForm }:ForgetPasswordProps) {
    //use verify code
    const {isPending, error,verifyCode} = useVerifyCode({ setShowModal, setCurrentForm });
  

  //Translations
  const t = useTranslations();
 
 


  //form&validation
  const Schema = z.object({
    resetCode: z
    .string()
    .min(6, t("invalid-code"))
    .regex(/^\d{6}$/, t("invalid-code")),
   
  });
   type Inputs = z.infer<typeof Schema>;
  const form = useForm<Inputs>({
    defaultValues: {
        resetCode: "",
    },
    resolver: zodResolver(Schema),
  });

  //Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log("values", values);
    verifyCode({...values})
  }
  return (
    <>
      <h2 className='text-3xl font-normal mb-10 text-black'>{t('verify-code')}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
          <FormField
            name="resetCode"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/**label */}
                <Label className="sr-only">{t("enter_code")}</Label>
                {/**input */}
                <Input
                  {...field}
                  placeholder={t("enter_code")}
                  className="input-custom shadow-custom-shadow-input"
                />
                {/**error */}
                <FormMessage />
              </FormItem>
            )}
          />
       
          {/** Feedback message*/}
          <div className="">
           {error&& <FeedbackMessage>{error.message}</FeedbackMessage>}
          </div>

    

         
          <Button
            type="submit"
            className="submit-btn flex items-center justify-center w-full text-base h-[50px] font-medium"
            disabled={
              isPending || (form.formState.isSubmitted && !form.formState.isValid)
            }
          >
           {t('recover-password')}
          </Button>
        </form>
      </Form>
     
    </>
  );
}

