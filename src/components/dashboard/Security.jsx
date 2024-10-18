"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input';

const Security = ({ onSubmit }) => {
    const form = useForm({
        // resolver: zodResolver(),
        defaultValues: {
            username: "",
        },
        mode: "onChange",
    })
    return (
        <ScrollArea className="py-5 border border-black p-3 rounded-lg w-full ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name. It can be your real name or a
                                    pseudonym. You can only change this once every 30 days.
                                </FormDescription>
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

export default Security