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
import TagCloud from "@/components/root/TagCloud";
import CommentSection from "@/components/root/Comments";
import MakeComment from "@/components/root/MakeComment";
import SimilarPosts from "@/components/root/SimilarPost";
import BlogDetailSkeleton from "@/components/BlogDetailSkeleton";

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
                    setLoading(false);
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

    if (loading) {
        return <BlogDetailSkeleton />
    }

    return (
        <section className="lg:w-[95%] w-full mx-auto px-3 pt-10">
            <Link href="/blogs" className="gap-1 items-center text-black hover:text-gladeGreen-700 font-semibold mb-10 inline-flex" >
                <IoIosArrowRoundBack size={25} />
                <p className="text-sm uppercase inline">go back</p>
            </Link>

            <Image src={blogPost?.thumbnailUrl} alt="thumbnails" width={100} height={100} className="w-full lg:w-[90%] h-[25rem] mx-auto object-full" unoptimized />

            <section className="lg:w-[80%] mx-auto">
                <div className="">
                    <Markdown
                        // eslint-disable-next-line react/no-children-prop
                        children={blogPost?.blogContent}
                        className="lg:prose-xl prose-figure:w-full  w-full mx-auto mt-20 "
                    />
                    <div className=" lg:mb-10 w-full flex flex-col lg:flex-row ">
                        <Share title={blogPost?.title} url={url} />
                        <div className="lg:mt-8 mt-3 lg:ml-20 flex gap-2">
                            {blogPost?.tags.map((tag, index) => {
                                return <p key={index} className="inline-flex text-black text-md px-2 items-center justify-center ">
                                    #{tag}
                                </p>
                            })}

                        </div>
                    </div>
                </div>
                <div className="lg:ml-10 mt-20 grid lg:grid-cols-3  lg:block items-center">
                    <div className="bg-gladeGreen-100 p-6 text-black">
                        <div className="flex items-center gap-3 capitalize my-3">
                            <p className="font-bold">PUBLISHED: </p>
                            <p >{moment(blogPost?.createdAt).format('MMM DD, YYYY')}</p>
                        </div>

                        <Share title={blogPost?.title} url={url} />

                        <div className="lg:mt-10 flex items-center gap-3 capitalize my-3">
                            <h4 className="font-bold">Category: </h4>
                            <p className="text-indigo-700 mt-1">{blogPost?.category}</p>
                        </div>
                    </div>
                    <TagCloud tags={blogPost?.tags} />
                </div>

                {/* <section className="mt-5 grid lg:grid-cols-3 grid-cols-1 mx-auto  gap-x-8 gap-y-5 pb-5">
                    {relatedBlog?.map((blog, i) => {
                        return <div key={i} className="">
                            <Image src={blog.thumbnailUrl || ""} alt="img" width={230} height={100} priority={true} />
                            <h3 className="text-lg font-bold mt-3">{blog.title}</h3>
                            <button className="mt-3 text-indigo-700 hover:text-indigo-900 font-semibold text-sm">READ MORE</button>
                        </div>
                    })}
                </section> */}
            </section>
            <SimilarPosts />
            <CommentSection />
            <MakeComment />
        </section >
    );
};