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
            <div className="theme_slider_1">
                <div className="slider_inner_content">
                    <div className="slider_text">
                        <div className="slider_posts">
                            <div className="">
                                <div>
                                    <article className="blog_post">
                                        <div className="post_img">
                                            <div className="calendar">
                                                <a href="#"><span className="date">30</span><br />May</a>
                                            </div>
                                        </div>
                                        <div className="post_content">
                                            <div className="post_header">
                                                <h2 className="post_title" data-swiper="overlay-left">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[75%]'>
                <Image src={img} alt='img' width={100} height={100} className='w-full justify-center' quality={100} />
            </div>
        </section>
    )
}

export default Hello