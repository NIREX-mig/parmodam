"use client";

import React from 'react'
import { Skeleton } from './ui/skeleton';

const BlogDetailSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 mb-10">
            <Skeleton className="w-full lg:h-[20rem] mb-6 rounded-md" />
            {/* Skeleton for the blog title */}
            <Skeleton className="h-8 w-2/3 mb-6 rounded-md" />

            {/* Skeleton for the blog image */}
            <Skeleton className="w-full h-64 rounded-md mb-6" />

            {/* Skeleton for the author details */}
            <div className="flex items-center gap-4 mb-6">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div>
                    <Skeleton className="h-4 w-32 mb-2 rounded-md" />
                    <Skeleton className="h-3 w-24 rounded-md" />
                </div>
            </div>

            {/* Skeleton for blog content */}
            <div className="space-y-4">
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-4/6 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-4/6 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-4/6 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
            </div>
            {/* Skeleton for comments section */}
            <div className="mt-10">
                <Skeleton className="h-6 w-1/4 mb-4 rounded-md" />
                <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div>
                            <Skeleton className="h-4 w-32 mb-2 rounded-md" />
                            <Skeleton className="h-3 w-48 rounded-md" />
                        </div>
                    </div>
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-5/6 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default BlogDetailSkeleton