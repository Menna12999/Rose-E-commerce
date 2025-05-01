"use client"

import { useLocale,useTranslations } from 'next-intl'
import React,{useState} from 'react'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { ControllerFieldState, ControllerRenderProps, FieldValues, SubmitHandler, useForm, UseFormStateReturn} from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import FeedbackMessage from '@/components/common/feedback-message'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Header from '@/components/layout/header/Header'
import { signIn } from 'next-auth/react'
import {usePathname,useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import  Link  from 'next/link'
import signupAction from '@/lib/actions/auth.action'
import { Locale } from "@/i18n/routing";
 

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from '@/hooks/use-toast'
import { AuthModalProps } from "@/lib/types/authmodal";



export default function SignupForm({ setShowModal, setCurrentForm }: AuthModalProps) {
    //Translations
    const t = useTranslations();
    const locale = useLocale() as Locale;


      //navigation
      const router = useRouter();
        const pathname = usePathname();
        const searchParams = useSearchParams()

        //varriables
        const genders: string[] = ["male", "female"] as const;

    
    //state
    const[error,setError] = useState<string|null>(null)
    const[loading,setLoading]= useState<boolean>(false)


    //form&validation
    const RegisterSchema = z.object({
      /**first name**/
        firstName: z
        .string({ required_error: t("first-name-required") })
        .min(1, t("first-name-min-length"))
        .max(30,t('firstname-max-length')),
      /**last name**/
        lastName: z
        .string({ required_error: t("last-name-required") })
        .min(1, t("last-name-min-length"))
        .max(30,t('lastname-max-length')),
      /**email**/
      email: z
        .string({ required_error: t("email-required") })
        .email(t("email-valid"))
        .min(1, t("email-required")),
      /**password**/
      password: z
      .string({ required_error: t("password-required") })
      .min(1, t("password-required"))
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        t("password-invalid"),
      ), 
    
       /***repassword**/
       rePassword: z
       .string({ required_error: t("rePassword-required") }),
       


       /***phone***/
       phone: z
         .string({ required_error: t("phone-required") })
         .min(1, t("phone-required"))
         .regex(/^(?:(?:\+|00)[1-9]\d{0,2}[\s.-]?)?(?:\(?\d{1,4}\)?[\s.-]?)?\d{1,4}(?:[\s.-]?\d{2,4}){1,4}$/
         , t("phone-invalid")),

         /**gender**/
         gender: z.enum(["male", "female"], {
          required_error: t("gender-required"),
        }),
    
    
    }).refine((data) => data.password === data.rePassword, {
      message: t("rePassword-invalid"),
      path: ["rePassword"],
    })
     
    type Inputs = z.infer<typeof RegisterSchema>;
    const form = useForm<Inputs>({
      defaultValues: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        rePassword: "",
        gender:undefined,
      },
      resolver:zodResolver(RegisterSchema),
    })

    //Functions 
    const onSubmit:SubmitHandler<Inputs> =  async (values)=>{
      setError(null)
      setLoading(true)
     
      const response = await signupAction(values)

      setLoading(false)

      if('message' in response && response.message === 'success'){

        router.push('/auth/signin')
        toast({
          title: t('signup-success-title'),
          description: t('signup-success'),
        })
        return;
      }

       if ("error" in response) {
        setError(response?.error || t("signup-failed"));
      }
     
    };
  return (
 <>
   <h2 className='text-3xl font-normal mb-5 text-black'>{t('create-account')}</h2>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {/*******first name******** */}
      <FormField
       name='firstName'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('first-name')}</Label>
        {/**input */}
        <Input {...field} placeholder={t('first-name')} className='input-custom shadow-custom-shadow-input'/> 
        {/**error */}
        <FormMessage/>
       </FormItem>}
       />
        {/*******first name******** */}
      <FormField
       name='lastName'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('last-name')}</Label>
        {/**input */}
        <Input {...field} placeholder={t('last-name')} className='input-custom shadow-custom-shadow-input'/> 
        {/**error */}
        <FormMessage/>
       </FormItem>}
       />
       {/*******email****************/}
       <FormField
       name='email'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('email')}</Label>
        {/**input */}
        <Input {...field} placeholder={t('email-placeholder')} className='input-custom shadow-custom-shadow-input'/> 
        {/**error */}
        <FormMessage/>
       </FormItem>}
       />
       <FormField
       name='password'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('password')}</Label>
        {/**input */}
        <Input {...field}  type="password" placeholder={t('password-placeholder')} className='input-custom shadow-custom-shadow-input'/> 
        {/** Feedback Message */}
        <FormMessage/>
       </FormItem>}
       />
        {/*******repassword******* */}
      <FormField
       name='rePassword'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('rePassword')}</Label>
        {/**input */}
        <Input {...field}  type="password" placeholder={t('rePassword')} className='input-custom shadow-custom-shadow-input'/> 
        {/**error */}
        <FormMessage/>
       </FormItem>}
       />
          <FormField
       name='phone'
       control={form.control}
       render={({field})=><FormItem>
        {/**label */}
        <Label className='sr-only'>{t('phone_number')}</Label>
        {/**input */}
        <Input {...field} placeholder={t('phone_number')} className='input-custom shadow-custom-shadow-input'/> 
        {/**error */}
        <FormMessage/>
       </FormItem>}
       />
        <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <Label className="sr-only">{t("gender")}</Label>
                <Select
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onValueChange={field.onChange}
                  value={field.value}
                 
                  
                >
                  <SelectTrigger className="p-4 md:w-1/4 w-1/3 md:h-[50px] h-[30px] rounded-full shadow-custom-shadow-input focus:ring-rose-900 focus:ring-1 focus:ring-offset-0">
                    {/* Select header */}
                    <SelectValue placeholder={t("gender")} />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Select item */}
                    {genders.map((gender) => (
                      <SelectItem className="" key={gender} value={gender}>
                      {t(`gender-${gender}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        {/** Feedback message*/}
       <div className="">
        <FeedbackMessage>{error}</FeedbackMessage>
       </div>


     
     

              {/* Create Account */}
           <div className="flex justify-center">
            
            <span className="text-sm font-normal">
             {t.rich('signup-already-have-account',{
             a:(v)=><Link onClick={() => {setShowModal(true);setCurrentForm('signin')}} className="text-rose-900 text-sm font-semibold border-b-2 border-rose-900 ms-1"  
             href=''>{v}</Link>
             })}
             
            </span>
       
       
           </div>
 
        <Button
            type="submit"
            className="submit-btn flex items-center justify-center w-full text-base h-[50px] font-medium"
            disabled={loading||(form.formState.isSubmitted && !form.formState.isValid) }
          >
            {t('create-account')}
          </Button>
      </form>
    </Form>
 </>
  )
}
