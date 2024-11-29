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


const OtpVarification = ({ otpform, onOtpSubmit, isSubmiting }) => {

  return (
    <div className="bg-white rounded-lg md:w-[35rem] w-auto { handleOnChange, otp, handleOtpSubmit }mx-auto p-10 flex flex-col justify-center items-center border shadow-2xl shadow-black ">
      <h2 className="text-black text-center font-semibold md:text-3xl text-2xl ">
        Otp Varification?
      </h2>
      <p className="mt-5 md:text-lg text-base text-gray-700 ">Enter your otp for authentication.</p>
      <div className="md:w-[24rem] w-full mt-10">
        <Form {...otpform}>
          <form onSubmit={otpform.handleSubmit(onOtpSubmit)} className="space-y-8">
            <FormField
              control={otpform.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter OTP" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full disabled:bg-black/85 disabled:cursor-not-allowed" disabled={isSubmiting}>
              {isSubmiting ? <Loader2 className="animate-spin" /> : "Submit OTP"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OtpVarification;
