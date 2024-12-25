"use client";

import { fbHref, instaHref, linkedinHref } from '@/constant'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import img from "@/public/assets/gg.jpg"
import Image from 'next/image';

const Hello = () => {
    return (
        <section className='flex md:flex-row flex-col-reverse '>
            <div className="p-10 md:mt-20 mt-6">
                <ul className='flex md:flex-col flex-row gap-10 justify-center md:gap-10'>
                    <li><Link href={fbHref}> <FaFacebook size={25} className='text-gray-400 hover:text-gladeGreen-400 ' /></Link></li>
                    <li><Link href={instaHref}> <FaInstagram size={25} className='text-gray-400 hover:text-gladeGreen-400 ' /> </Link></li>
                    <li><Link href={linkedinHref}> <FaLinkedin size={25} className='text-gray-400 hover:text-gladeGreen-400 ' /> </Link></li>
                </ul>
            </div>


            <div className="slider_text">
                <article className="blog_post lg:px-[150px] px-6 lg:py-[120px] py-10 ">
                    <div className="relative mb-8 bg-gladeGreen-500 px-4 py-1 inline-block text-white text-center">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg font-sans">30</span><span className='text-sm mb-1'>May</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="post_header">
                            <h2 className="post_title" >
                                <a href="#">Explore the World, One Journey at a Time</a>
                            </h2>
                        </div>
                        <div className="post_intro">
                            <p>Discover breathtaking destinations, hidden gems, and unforgettable journeys. Let our travel stories inspire your next adventure, whether you seek tranquil escapes or thrilling experiences. Explore the world through our eyes and start planning your dream getaway today!</p>
                        </div>
                        <div className="post_footer">
                            <div className="read_more">
                                <Link href="/blogs">See More Posts</Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className='lg:w-[75%] w-full '>
                <Image src={img} alt='img' width={100} height={100} className='w-full justify-center' priority unoptimized />
            </div>
        </section>
    )
}

export default Hello