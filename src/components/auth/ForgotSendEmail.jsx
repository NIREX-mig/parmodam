"use client";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react";
import Link from "next/link";



const ForgotSendEmail = ({ forgotSendEmailform, onForgotSendEmailSubmit, isSubmiting }) => {
  return (
    <div className="bg-white rounded-lg md:w-[35rem] w-auto mx-auto p-10 flex flex-col justify-center items-center border shadow-2xl shadow-black dark:bg-dmode dark:text-gray-300">
      <h2 className="text-black text-center font-semibold md:text-3xl text-2xl dark:text-gray-300">
        Forgot Password?
      </h2>
      <p className="mt-5 md:text-lg text-base text-gray-700 dark:text-gray-400">Enter your email to send forget email.</p>
      <div className="md:w-[24rem] w-full mt-10">
        <Form {...forgotSendEmailform}>
          <form onSubmit={forgotSendEmailform.handleSubmit(onForgotSendEmailSubmit)} className="space-y-8 w-full">
            <FormField
              control={forgotSendEmailform.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel >Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full disabled:bg-black/85 disabled:cursor-not-allowed" disabled={isSubmiting}>
            {isSubmiting ? <Loader2 className="animate-spin" /> : "Reset Password"}
            </Button>
          </form>
        </Form>
      </div>

      <div className="w-full flex gap-2 justify-center mt-5">
        <p>Remember password?</p>
        <Link href="/auth/sign-in" className="text-indigo-700 font-semibold hover:underline" > Sign In </Link>
      </div>
    </div>
  );
};

export default ForgotSendEmail;
