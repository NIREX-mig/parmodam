"use client";

import Image from "next/image";
import img from "@/public/assets/author.jpg"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Link from "next/link";
import { fbHref, instaHref, linkedinHref, threadHref } from "@/constant";

export default function About() {
	return (
		<section className="">
			<div className="page-header">
				<div className="page-header-content">
					<div className="container mx-auto">
						<h2 className="heading font-bold">About Author</h2>
					</div>
				</div>
			</div>

			<div className="main-wrapper m_tp_0">
				<div className="container mx-auto">
					<div className="author_wrapper">
						<div className="bg-gladeGreen-500 flex lg:flex-row flex-col w-[90%] mx-auto">
							<div className="">
								<div className="lg:-translate-x-28 lg:-translate-y-20 -translate-y-20">
									<Image src={img} alt="img" width={100} height={100} className="w-[150rem]" priority unoptimized={true}/>
								</div>
							</div>
							<div className="md:pr-16 md:pt-28 pt-10">
								<div className="author_info text-white lg:text-justify">
									<h3 className="text-3xl font-bold mb-10 md:text-start text-center">Namaskaram, I am Pramod Kumar Pandit</h3>
									<p className="mb-10 md:text-start text-center">
									An Isha Yoga meditator, and a seeker on a journey of self-discovery. Through the transformative power of Shambhavi Mahamudra Kriya, taught by Sadhguru, I have experienced the profound reality of oneness, where the distinction between &apos;I&apos; and &apos;not I&apos; dissolves.

									</p>
									<p className="md:text-start text-center">
									As I witness the suffering around me, I realize it is often a result of our own making. This understanding drives my desire to share the transformative power of yoga and meditation with others. My dream is to empower people to break free from compulsiveness and embrace conscious living.
									</p>
									<br/>
									<p className="md:text-start text-center">
									Through my journey of spiritual exploration and travel, I aim to contribute to my Guru&apos;s vision of a harmonious, compassionate planet, where people live in consensus.


									</p>
									<div className="author_bottom">
										<div className="social mt-5 pb-5">
											<ul className="flex gap-2 justify-center md:justify-start">
												<li><Link href={fbHref} target="_blanck"><FaFacebook size={20} /></Link></li>
												<li><Link href={instaHref} target="_blanck"><FaInstagram size={20} /></Link></li>
												<li><Link href={threadHref} target="_blanck"> <FaThreads size={20} /></Link></li>
												<li><Link href={linkedinHref} target="_blanck"><FaLinkedin size={20} /></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}