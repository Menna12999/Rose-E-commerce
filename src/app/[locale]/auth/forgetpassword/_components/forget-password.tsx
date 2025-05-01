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
import useForgetPassword from "../_hooks/use-forget-password";
import { AuthModalProps } from "@/lib/types/authmodal";
import {ForgetPasswordProps} from '@/lib/types/authmodal'



  export default function Forgetpassword({ setShowModal, setCurrentForm }: ForgetPasswordProps) {
    //use forgetPassword
    const {isPending, error, forgetPassword} = useForgetPassword({ setShowModal, setCurrentForm });
  

  //Translations
  const t = useTranslations();
   //use login
  //navigation


  //form&validation
  const Schema = z.object({
    email: z
      .string({ required_error: t("email-required") })
      .min(1, t("email-required")),
   
  });
   type Inputs = z.infer<typeof Schema>;
  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(Schema),
  });

  //Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log("values", values);
    forgetPassword({...values})
  }
  return (
    <>
      <h2 className='text-3xl font-normal mb-10 text-black'>{t('forget-your-password')}</h2>
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

