"use client";

import CreateBlog from "@/components/dashboard/CreateBlog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AddBlog() {

  const { setMenuOpen } = useGlobalContext();
  const [isSubmiting, setIsSubmitting] = useState(false);

  const { toast } = useToast();


  async function onSubmit(values) {

    const formData = new FormData();
    values.title && formData.append("title", values.title);
    values.slug && formData.append("slug", values.slug);
    values.summary && formData.append("summary", values.summary);
    values.category && formData.append("category", values.category);
    values.thumbnail && formData.append("thumbnail", values.thumbnail);
    values.blogContent && formData.append("blogContent", values.blogContent);
    values.tagData && formData.append("tagData", JSON.stringify(values.tagData));
    values.status && formData.append("status", values.status);

    setIsSubmitting(true);

    try {
      const res = await axios.post("/api/dashboard/addBlog", formData);
      const { data } = res;

      if (data.success) {
        toast({
          variant: "default",
          title: "Success",
          description: `${data.message}`,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Failed!",
        description: `${error?.response?.data?.message || "Somethig went wrong"} `,
      });
    }
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [])

  return (
    <ScrollArea className="w-full bg-white rounded-lg mt-2 h-[calc(100vh-100px)] p-5 dark:bg-dmode dark:text-gray-300">
      <h1 className="text-xl font-bold text-gray-800">Create New Blog</h1>
      <CreateBlog
        buttonTitle="Add Blog"
        isSubmiting={isSubmiting}
        onSubmit={onSubmit}
      />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
