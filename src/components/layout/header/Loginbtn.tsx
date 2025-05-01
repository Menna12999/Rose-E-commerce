"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import AuthModal from "@/components/features/AuthModal";
import SigninForm from "@/app/[locale]/auth/signin/_components/signin-form";

export default function Loginbtn() {
  const [showModal, setShowModal] = useState(false);
  const [currentForm, setCurrentForm] = useState<
    "signin" | "signup" | "forgot-password"
  >("signin");

  const t = useTranslations();

  return (
    <>
      <button
        onClick={() => {
          setCurrentForm("signin");
          setShowModal(true);
        }}
        className="bg-rose-900 min-w-[80px] h-[45px] py-3 px-5 rounded-[30px] u text-white"
      >
        {t("login")}
      </button>
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        currentForm={currentForm}
        setCurrentForm={setCurrentForm}
      />
    </>
  );
}
