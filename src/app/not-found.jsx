"use client";

import Image from 'next/image';
import Link from 'next/link'
import notFound from "@/public/not_found.svg"

export default function NotFound() {
    return (
        <section className=' w-full h-screen overflow-hidden'>
            <section className='w-full bg-white flex flex-col gap-10 justify-center items-center text-black dark:bg-black/90 dark:text-white pt-20'>
                <Image src={notFound} alt='Not Found' width={100} height={100} className='lg:w-[30rem] w-[calc(100vw-100px)] h-auto' />
                <div className='flex flex-col gap-3 p-10 items-center w-full rounded-full h-[100rem] bg-purple-300 text-black'>
                    <h2 className='lg:text-3xl text-xl font-semibold'>We are Sorry...</h2>
                    <p className='lg:text-lg text-sm text-gray-600 '>The page you&apos;re trying to access has not found</p>
                    <Link href="/" className='bg-purple-700 py-2 px-3 rounded-full font-semibold text-white'>Return Home</Link>
                </div>
            </section>
        </section>
    )
}