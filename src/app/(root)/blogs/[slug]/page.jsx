"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import Markdown from "react-markdown";
import moment from "moment";
import Share from "@/components/root/Share";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export default function Page({ params }) {
    const { setMobileNavIsOpen } = useGlobalContext();

    const [loading, setLoading] = useState(true);
    const [blogPost, setBlogPost] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const url = "";

    const { toast } = useToast();

    useEffect(() => {
        setMobileNavIsOpen(false);

        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/root/${params.slug}`)
                const { data } = res;

                if (data.success) {
                    setBlogPost(data.data)
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Failed!",
                    description: `${error?.response?.data?.message || "Somethig went wrong"} `,
                });
            }
        };

        const fetchRelatedBlog = async () => {
            try {
                const res = await axios.get(`/api/root/related-blogs/${params.slug}`);
                const { data } = res;

                if (data.success) {
                    setRelatedBlog(data.data);
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Failed!",
                    description: `${error?.response?.data?.message || "Somethig went wrong"} `,
                });
            }
        }

        fetchData();
        fetchRelatedBlog();
    }, []);

    return (
        <section className="lg:w-[85%] w-full mx-auto px-3 pt-10 dark:bg-dmode">
            <Link href="/blogs" className="flex gap-1 items-center text-indigo-600 hover:text-indigo-700 font-semibold" >
                <IoIosArrowRoundBack size={25} className="" />
                <p className="text-sm">BACK TO BLOG HOME</p>
            </Link>

            <section className="flex lg:flex-row flex-col">
                <Markdown
                    // eslint-disable-next-line react/no-children-prop
                    children={blogPost?.blogContent}
                    className=" prose lg:prose-xl lg:w-[70%] md:w-full mt-10 dark:text-gray-300 dark:prose-headings:text-white dark:prose-strong:text-white"
                />

                <div className="lg:ml-10 mt-5 grid grid-cols-3 lg:block items-center">
                    <div>
                        <p className="text-xs">PUBLISHED</p>
                        <p className="mt-2">{moment(blogPost?.createdAt).format('MMM DD, YYYY')}</p>
                    </div>

                    <Share title={blogPost?.title} url={url} />

                    <div className="lg:mt-10">
                        <h4 className="text-sm">TOPIC</h4>
                        <p className="text-indigo-700 mt-1">{blogPost?.category}</p>
                    </div>
                </div>
            </section>
            <div className=" lg:mb-10 w-full flex lg:flex-col flex-row flex-wrap">
                <Share title={blogPost?.title} url={url} />
                <div className="mt-8 flex gap-4">
                    {blogPost?.tags.map((tag, index) => {
                        return <p key={index} className="dark:bg-gray-200 bg-gray-200 inline-flex text-black  text-lg px-5 py-2 rounded-full items-center justify-center ">
                            {tag}
                        </p>
                    })}

                </div>
            </div>

            <section className="mt-5 grid lg:grid-cols-3 grid-cols-1 mx-auto  gap-x-8 gap-y-5 pb-5">
                {relatedBlog?.map((blog, i) => {
                    return <div key={i} className="">
                        <Image src={blog.thumbnailUrl || ""} alt="img" width={230} height={100} priority={true} />
                        <h3 className="text-lg font-bold mt-3">{blog.title}</h3>
                        <button className="mt-3 text-indigo-700 hover:text-indigo-900 font-semibold text-sm">READ MORE</button>
                    </div>
                })}
            </section>
        </section >
    );
};