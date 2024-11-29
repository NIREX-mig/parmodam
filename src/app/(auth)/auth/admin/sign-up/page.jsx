"use client";

import animation from "@/public/assets/login.png"
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signupSchema } from "@/lib/validator";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";


export default function Signup() {
    const { toast } = useToast();
    const router = useRouter();
    const [isSubmiting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            cpassword: "",
        },
    });

    async function onSubmit(values) {
        setIsSubmitting(true);
        try {
            const res = await axios.post("/api/auth/sign-up", values)
            const { data } = res;

            if (data.success) {
                toast({
                    variant: "default",
                    title: "Sign Up",
                    description: `Signup Successfully.`,
                });
                setIsSubmitting(false);
                router.replace("/auth/sign-in");
            }


        } catch (error) {
            setIsSubmitting(false);
            toast({
                variant: "destructive",
                title: "SignUp Failed!",
                description: `${error?.response?.data?.message || "Somethig went wrong"} `,
            });
        }
    }

    return (
        <section className="bg-white w-full h-screen text-black flex justify-center items-center pattern " >
            <div className="flex lg:w-[70rem] w-auto bg-white shadow-2xl shadow-black mx-auto rounded-lg border ">
                <div className="lg:flex lg:items-center hidden">
                    <Image src={animation} alt="animation" width={500} height={100} />
                </div>

                <div className="lg:w-[35rem] w-auto mx-auto p-10 flex flex-col justify-center items-center ">
                    <h2 className="text-black text-center font-semibold lg:text-3xl text-2xl ">Sign Up</h2>
                    <p className="mt-5 lg:text-lg text-sm text-gray-700 ">Enter your email and password to register.</p>
                    <div className="md:w-[25rem] w-full mt-5">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Username" autoComplete="off" required {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@example.com" autoComplete="off" {...field} />
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
                                                <Input placeholder="Password" autoComplete="off" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cpassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Confirm Password" autoComplete="off" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full disabled:bg-black/45 disabled:cursor-not-allowed " disabled={isSubmiting} >
                                    {isSubmiting ? <Loader2 className="animate-spin " /> : "Sign Up"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
