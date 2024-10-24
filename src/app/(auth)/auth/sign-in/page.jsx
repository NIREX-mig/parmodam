"use client";

import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { signinSchema } from "@/lib/validator";
import animation from "@/public/assets/login.png"
import { useToast } from "@/hooks/use-toast"
import { signIn, } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";


export default function Signin() {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmiting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    setIsSubmitting(true);
    const result = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password
    })

    if (result?.error) {
      toast({
        variant: "destructive",
        title: "Login Failed!",
        description: `${result?.error?.response?.data?.message || 'Incorrect Email or password'}`,
      });
      setIsSubmitting(false);
    }

    if (result?.ok) {
      setIsSubmitting(false)
      router.replace("/");
    }
  }


  return (
    <section className="bg-indigo-100 w-full h-screen text-black flex justify-center items-center pattern dark:bg-dmode" >
      <div className="flex lg:w-[70rem] w-auto bg-white shadow-2xl shadow-black mx-auto rounded-lg border dark:bg-dmode">
        <div className="lg:flex lg:items-center hidden">
          <Image src={animation} alt="animation" width={500} height={100} />
        </div>
        <div className="lg:w-[30rem] w-auto mx-auto p-10 flex flex-col justify-center items-center">
          <h2 className="text-black text-center font-semibold lg:text-3xl text-2xl dark:text-gray-300">Sign In</h2>
          <p className="mt-5 lg:text-lg text-sm text-gray-700 dark:text-gray-400">Enter your email and password to Sign In.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full mt-10 dark:text-gray-300">
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@gmail.com" autoComplete="off" className="w-full inline-block" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="/auth/forgot">
                <span className="hover:underline cursor-pointer block mt-3">Forgot Password</span>
              </Link>
              <Button type="submit" className="w-full disabled:bg-black/45 disabled:cursor-not-allowed" disabled={isSubmiting} >
                {isSubmiting ? <Loader2 className="animate-spin dark:file:text-white dark:text-white" /> : "Sign In"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
