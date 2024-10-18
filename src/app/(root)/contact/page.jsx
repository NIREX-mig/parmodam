"use client";

import Image from "next/image";
import Insta from "@/public/assets/instagram.png";
import Facebook from "@/public/assets/facebook.png";
import Threads from "@/public/assets/threads.png";
import Linkedin from "@/public/assets/linkedin.png";
import Logo from "@/public/assets/logo.webp";
import Link from "next/link";
import { instaHref, fbHref, threadHref, linkedinHref } from "@/constant/index";
import { useEffect } from "react";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export default function Contact() {
  // const { setMobileNavIsOpen } = useGlobalContext();

  // useEffect(() => {
  // setMobileNavIsOpen(false);
  // }, []);

  return (
    <section className="w-full bg-primary-50 h-[calc(100vh-75px)] text-black px-12 py-5 dark:bg-dmode dark:text-white">
      <div className="flex lg:gap-20 justify-center">
        <div className="md:mr-[10rem] md:mt-[4rem]">
          <div className="md:w-80">
            <h1 className="md:text-7xl text-5xl font-bold">contact.</h1>
            <p className="md:text-xl text-lg text-gray-600 dark:text-gray-500 mt-5">
              Get in touch with me via social media and email.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-4 mt-16">
            <Link
              href={threadHref}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Image
                src={Threads}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />

              <h2 className="font-semibold text-xl text-black">Threads</h2>
            </Link>

            <Link
              href={fbHref}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Image
                src={Facebook}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />

              <h2 className="font-semibold text-xl text-blue-600">Facebook</h2>
            </Link>
            <Link
              href={linkedinHref}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Image
                src={Linkedin}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />

              <h2 className="font-semibold text-xl text-blue-600">Linked In</h2>
            </Link>
            <Link
              href={instaHref}
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Image
                src={Insta}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />

              <h2 className="font-semibold text-xl text-pink-600">Instagram</h2>
            </Link>
          </div>
        </div>

        <Image
          src={Logo}
          alt="LOGO"
          width={500}
          height={500}
          className="hidden lg:inline-block"
        />
      </div>
    </section>
  );
}
