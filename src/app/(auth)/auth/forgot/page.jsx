"use client";

import ForgotPassword from "@/components/auth/ForgotPassword";
import ForgotSendEmail from "@/components/auth/ForgotSendEmail";
import OtpVarification from "@/components/auth/OtpVarification";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { forgotSendEmailSchema, forgotPasswordSchema, otpVarificationSchema } from "@/lib/validator";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Forgot() {

  const { toast } = useToast();
  const router = useRouter();

  const [sendEmail, setSendEmail] = useState(true);
  const [otpVar, setOtpVar] = useState(false);
  const [resetpass, setResetpass] = useState(false);
  const [isSubmiting, setIsSubmitting] = useState(false);

  const forgotSendEmailform = useForm({
    resolver: zodResolver(forgotSendEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onForgotSendEmailSubmit(values) {
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/forgot-sendemail", values)
      const { data } = res;

      if (data.success) {
        toast({
          variant: "default",
          title: "Success",
          description: `${data.message}`,
        });

        setIsSubmitting(false);

        // set tempToken in localstorage
        localStorage.setItem("tempToken", data.data);

        // update component 
        setSendEmail(false);
        setOtpVar(true);
        setResetpass(false);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: `${error?.response?.data?.message || "Somethig went wrong"} `,
      });
      setIsSubmitting(false);
    }
  }


  const otpform = useForm({
    resolver: zodResolver(otpVarificationSchema),
    defaultValues: {
      otp: "",
    },
  });

  async function onOtpSubmit(values) {
    setIsSubmitting(true);
    const token = localStorage.getItem("tempToken");
    try {
      const res = await axios.post("/api/validateotp", {
        otp: values.otp,
        token: token
      })
      const { data } = res;

      if (data.success) {
        toast({
          variant: "default",
          title: "Success",
          description: `${data.message}`,
        });

        setIsSubmitting(false);

        // update component 
        setSendEmail(false);
        setOtpVar(false);
        setResetpass(true);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: `${error?.response?.data?.message || "Somethig went wrong"} `,
      });
      setIsSubmitting(false);
    }
  }

  const forgotPasswordform = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      newpassword: "",
      cpassword: "",
    },
  });

  async function onForgotPasswordSubmit(values) {
    setIsSubmitting(true);
    const token = localStorage.getItem("tempToken");
    try {
      const res = await axios.post("/api/forgot-password", {
        newpassword: values.cpassword,
        token: token
      })
      const { data } = res;

      if (data.success) {
        toast({
          variant: "default",
          title: "Success",
          description: `${data.message}`,
        });

        setIsSubmitting(false);

        // remove tempToken from localstorage
        localStorage.removeItem("tempToken");

        // update component 
        setSendEmail(true);
        setOtpVar(false);
        setResetpass(false);

        router.replace("/auth/sign-in");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed!",
        description: `${error?.response?.data?.message || "Somethig went wrong"} `,
      });
      setIsSubmitting(false);
    }
  }


  return (
    <section className="bg-white w-full h-screen text-black flex justify-center items-center pattern">
      {sendEmail && <ForgotSendEmail
        isSubmiting={isSubmiting}
        forgotSendEmailform={forgotSendEmailform}
        onForgotSendEmailSubmit={onForgotSendEmailSubmit}
      />}
      {otpVar && <OtpVarification
        isSubmiting={isSubmiting}
        otpform={otpform}
        onOtpSubmit={onOtpSubmit}
      />}
      {resetpass && <ForgotPassword
        isSubmiting={isSubmiting}
        forgotPasswordform={forgotPasswordform}
        onForgotPasswordSubmit={onForgotPasswordSubmit}
      />}
    </section>
  );
}
