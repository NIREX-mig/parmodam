"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'

const Profile = ({ onSubmit }) => {
    const form = useForm({
        // resolver: zodResolver(),
        defaultValues: {
            username: "",
        },
        mode: "onChange",
    })
    return (
        <ScrollArea className="py-5 p-3 rounded-lg w-full ">
            <h3 className='text-2xl  dark:text-gray-300 text-black'>Profile</h3>
            <p className='text-lg dark:text-gray-500 text-gray-700 mb-5'>This is how others will see you on the site.</p>
            <hr className='mb-5' />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-1">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
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
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Update profile</Button>
                </form>
            </Form>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}

export default Profile