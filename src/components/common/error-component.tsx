'use client';

import React from "react";
import { useTranslations } from "next-intl";

type ErrorComponentsProps = {
  children?: React.ReactNode;
};
export default function ErrorComponent({ children }: ErrorComponentsProps) {
  //translation
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-6 text-center items-center">
      <span className="text-9xl text-red-500 font-bold">
{t('error')}      </span>
      <p className="px-3 py-2 rounded-full bg-red-50 text-red-400 border  border-red-400">{ children || t("fallback-error-message")}</p>
    </div>
  );
}
