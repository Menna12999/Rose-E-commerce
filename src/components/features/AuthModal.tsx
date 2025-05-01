import React from "react";
import SigninForm from "@/app/[locale]/auth/signin/_components/signin-form"; 
import SignupForm from "@/app/[locale]/auth/signup/_components/signup-form"; 
import Forgetpassword from "@/app/[locale]/auth/forgetpassword/_components/forget-password";
import { AuthModalProps } from "@/lib/types/authmodal";
import VerifyPassword from "@/app/[locale]/auth/verfiypassword/_components/verify-password";
import SetPassword from "@/app/[locale]/auth/setpassword/_components/set-password";


export default function AuthModal({ showModal, setShowModal, currentForm, setCurrentForm }: AuthModalProps) {
  if (!showModal) return null;

  const closeModal = () => setShowModal(false);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center min-h-screen bg-black bg-opacity-80 z-40 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        className="flex flex-col p-10 bg-white border rounded-[20px] shadow-custom-box md:min-w-[608px] my-20"
        onClick={(e) => e.stopPropagation()}
      >
        {currentForm === "signin" && <SigninForm setShowModal={setShowModal} setCurrentForm={setCurrentForm} showModal={false} currentForm={"signin"}/>}
        {currentForm === "forgot-password" && <Forgetpassword setShowModal={setShowModal} setCurrentForm={setCurrentForm}/>}
        {currentForm === "verify-password" && <VerifyPassword setShowModal={setShowModal} setCurrentForm={setCurrentForm}/>}
        {currentForm === "set-password" && <SetPassword  setShowModal={setShowModal} setCurrentForm={setCurrentForm}/>}
        {currentForm === "signup" && <SignupForm setShowModal={setShowModal} setCurrentForm={setCurrentForm} showModal={false} currentForm={"signup"}/>}
      </div>
    </div>
  );
}