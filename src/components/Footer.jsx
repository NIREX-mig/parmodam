"use client";

import Image from 'next/image'
import img1 from "@/public/assets/insta/1.jpg"
import img2 from "@/public/assets/insta/2.jpg"
import img3 from "@/public/assets/insta/3.jpg"
import img4 from "@/public/assets/insta/4.jpg"
import img5 from "@/public/assets/insta/5.jpg"
import img6 from "@/public/assets/insta/6.jpg"
import Logo from "@/public/assets/parmodam_transperent.png"
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { FaThreads } from 'react-icons/fa6'
import { fbHref, instaHref, threadHref } from '@/constant';


const Footer = () => {
    return (
        <footer className="" data-aos="fade-up" data-aos-duration="700">
            <div className="footer-above">
                <div className="footer-logo">
                    <Link href="/">
                        <Image src={Logo} alt="logo" width={200} height={100} className='w-auto h-auto' />
                    </Link>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><Link href={fbHref}> <FaFacebook size={20} /></Link></li>
                        <li><Link href={instaHref}> <FaInstagram size={20} /></Link></li>
                        <li><Link href={threadHref}> <FaThreads size={20} /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-middle">
                <div className="container">
                    <div className="footer_widget_wrapper">
                        <div className="row">
                            <div className="lg:columns-6 md:columns-6">
                                <div className="footer_widget">
                                    <div className="widget-title">
                                        <h4>Instagram</h4>
                                    </div>
                                    <div className="instagram">
                                        <ul>
                                            <li><Image src={img1} alt="insta" width={100} height={100} /></li>
                                            <li><Image src={img2} alt="insta" width={100} height={100} /></li>
                                            <li><Image src={img3} alt="insta" width={100} height={100} /></li>
                                            <li><Image src={img4} alt="insta" width={100} height={100} /></li>
                                            <li><Image src={img5} alt="insta" width={100} height={100} /></li>
                                            <li><Image src={img6} alt="insta" width={100} height={100} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:columns-6 md:columns-6">
                                <div className="footer_widget">
                                    <div className="blend-logo">
                                        <Link href="/">
                                            <Image src={Logo} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer_nav">
                                        <ul>
                                            <li className="menu-item"><Link href="/">Home</Link></li>
                                            <li className="menu-item"><Link href="/about">About Author</Link></li>
                                            <li className="menu-item"><Link href="/blogs">Posts</Link></li>
                                            <li className="menu-item"><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <p> &copy; 2024 - Parmodam Blog. Created by NIreX. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer