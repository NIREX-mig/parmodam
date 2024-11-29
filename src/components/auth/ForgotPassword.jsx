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



const ForgotPassword = ({ forgotPasswordform, onForgotPasswordSubmit,isSubmiting }) => {

  return (
    <section className="bg-white w-full h-screen text-black flex justify-center items-center pattern ">
      <div className="bg-white rounded-lg md:w-[35rem] w-auto mx-auto p-10 flex flex-col justify-center items-center border shadow-2xl shadow-black ">
        <h2 className="text-black text-center font-semibold md:text-3xl text-2xl  ">
          Forgot Password?
        </h2>
        <p className="mt-5 md:text-lg text-base text-gray-700 ">Enter new password for forgot.</p>
        <div className="md:w-[24rem] w-full mt-10">
          <Form {...forgotPasswordform}>
            <form onSubmit={forgotPasswordform.handleSubmit(onForgotPasswordSubmit)} className="space-y-5 w-full  ">
              <FormField
                control={forgotPasswordform.control}
                name="newpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input placeholder="New Password" autoComplete="off" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forgotPasswordform.control}
                name="cpassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm password" autoComplete="off" {...field} />
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
      </div>
    </section>
  );
};

export default ForgotPassword;
