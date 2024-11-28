"use client";

import StaticChart from "@/components/dashboard/StaticChart";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { Data } from "@/lib/data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaBloggerB, FaTag } from "react-icons/fa";
import { MdDrafts, MdTopic } from "react-icons/md";
import axios from "axios";
import Stats from "@/components/dashboard/stats";


export default function Dashboard() {

    const { toast } = useToast();
    const { setMenuOpen } = useGlobalContext();
    const router = useRouter();

    const [cardData, setCardData] = useState({
        totalBlogs: "0",
        publishBlogs: "0",
        totalTags: "0",
        draftBlogs: "0",
    });

    // const [chartData, setChartData] = useState({
    //     labels: Data.map((data) => data.Month),
    //     datasets: [
    //         {
    //             label: "Published Blogs",
    //             data: Data.map((data) => data.publishBlogCount),
    //             backgroundColor: [
    //                 "#84cc16",
    //                 "#22c55e",
    //                 "#10b981",
    //                 "#4338ca",
    //                 "#9333ea"
    //             ],
    //             borderColor: "black",
    //             borderWidth: 1
    //         }
    //     ]
    // });

    useEffect(() => {
        const fetchStatics = async () => {
            try {
                const res = await axios.get(`/api/dashboard/getstatics`);
                const { data } = res;

                if (data.success) {
                    console.log(data.data)
                    setCardData(data.data);
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Failed!",
                    description: `${error?.response?.data?.message || "Somethig went wrong"} `,
                });
            }
        };

        const fetchChartData = async () => {
            try {

            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Failed!",
                    description: `${error?.response?.data?.message || "Somethig went wrong"} `,
                });
            }
        };

        fetchStatics();
        fetchChartData();
    }, [])


    return (
        <ScrollArea className="w-full rounded-xl mt-2 bg-white text- p-5 h-[calc(100vh-100px)] dark:bg-dmode dark:text-gray-300">
            <Stats />
            {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                <Card className="flex justify-between items-center dark:">
                    <CardHeader className="grid h-12 w-12 m-4 place-items-center text-white bg-black/90 rounded-lg ">
                        <FaBloggerB size={30} />
                    </CardHeader>
                    <CardContent className="p-4 text-right =">
                        <CardTitle className="font-normal text-gray-600 dark:text-gray-400">Total Blogs</CardTitle>
                        <CardDescription className="text-gray-800 text-2xl font-extrabold dark:text-gray-300">{cardData.totalBlogs || "0"}</CardDescription>
                    </CardContent>
                </Card>

                <Card className="flex justify-between items-center">
                    <CardHeader className="grid h-12 w-12 m-4 place-items-center text-white bg-black/90 rounded-lg ">
                        <MdTopic size={30} />
                    </CardHeader>
                    <CardContent className="p-4 text-right">
                        <CardTitle className="font-normal text-gray-600 dark:text-gray-400">Published Blogs</CardTitle>
                        <CardDescription className="text-gray-800 text-2xl font-extrabold dark:text-gray-300">{cardData.publishBlogs || "0"}</CardDescription>
                    </CardContent>
                </Card>

                <Card className="flex justify-between items-center">
                    <CardHeader className="grid h-12 w-12 m-4 place-items-center text-white bg-black/90 rounded-lg ">
                        <FaTag size={30} />
                    </CardHeader>
                    <CardContent className="p-4 text-right =">
                        <CardTitle className="font-normal text-gray-600 dark:text-gray-400">Total Tags</CardTitle>
                        <CardDescription className="text-gray-800 text-2xl font-extrabold dark:text-gray-300">{cardData.totalTags || "0"}</CardDescription>
                    </CardContent>
                </Card>

                <Card className="flex justify-between items-center">
                    <CardHeader className="grid h-12 w-12 m-4 place-items-center text-white bg-black/90 rounded-lg ">
                        <MdDrafts size={30} />
                    </CardHeader>
                    <CardContent className="p-4 text-right =">
                        <CardTitle className="font-normal text-gray-600 dark:text-gray-400">Draft Blogs</CardTitle>
                        <CardDescription className="text-gray-800 text-2xl font-extrabold dark:text-gray-300">{cardData.totalBlogs || "0"}</CardDescription>
                    </CardContent>
                </Card>

            </div> */}

            {/* <div className="flex-row lg:flex gap-7">
                <div className="w-full overflow-auto">
                    <StaticChart chartData={chartData} />
                </div>
            </div> */}
            <ScrollBar orientation="vertical" />
        </ScrollArea >
    );
}
