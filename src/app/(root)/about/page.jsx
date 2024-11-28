"use client";

import Image from "next/image";
import img from "@/public/assets/2.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Link from "next/link";
import { fbHref, instaHref, linkedinHref, threadHref } from "@/constant";

export default function About() {
	return (
		<section>
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
						<div className="bg-gladeGreen-500 flex w-[90%] mx-auto">
							<div className="">
								<div className="-translate-x-28 -translate-y-20">
									<Image src={img} alt="img" width={100} height={100} className="w-[150rem]" />
								</div>
							</div>
							<div className="pr-16 pt-28">
								<div className="author_info text-white text-justify">
									<h3 className="text-3xl font-bold mb-10">Hi, I am Patricia Doe</h3>
									<p className="mb-10">
										Smilique sunt in culpiqui officia deserunt mollitia animiide labor um et dolor um fuga. Et harumqu id em rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est eligendioptio cumque nihil impedit quo minus quod maxime placeat facere possimu.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur. Ut enim ad mini ma veniam, quis nostrum exercitationem mosequatu aut em vel eum iure veniam quis notias excepturi.
									</p>
									<div className="author_bottom">
										<div className="social mt-5 pb-5">
											<ul className="flex gap-2">
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