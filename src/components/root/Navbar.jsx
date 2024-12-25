"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import MobileNav from "./MobileNav";
import { signOut, useSession } from "next-auth/react";
import Logo from "@/public/assets/parmodam_transperent.png"

const Navbar = () => {
  const { mobileNavIsOpen, setMobileNavIsOpen } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useSession();

  const handleLogOut = async () => {
    const result = await signOut();
  }

  const handleSignin = () => {
    router.push("/auth/sign-in")
  }


  return (
    <section
      className={`border-b border-black/40 bg-white  sticky top-0 z-[100]`}
    >
      <div className="lg:px-20 px-5 flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo || ""}
            width={100}
            height={100}
            alt="Logo"
            unoptimized={true}
            className="lg:w-[10rem] w-[8rem]"
          />
        </Link>

        <div className="flex gap-3 items-center">
          <Button type="default" size="sm" onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 bg-white focus:ring-gray-200">
            <span className="sr-only">Open main menu</span>
            {!mobileNavIsOpen ? <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
              : <IoClose size={50} />}
          </Button>
        </div>


        <div className="hidden md:block">
          <div className=" flex gap-5 w-full md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white font-semibold ">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === "/" ? "text-gladeGreen-500" : "text-gray-900"}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === "/blogs" ? "text-gladeGreen-500" : "text-gray-900"}`}
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === "/about" ? "text-gladeGreen-500" : "text-gray-900"}`}
                >
                  About Author
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === "/contact" ? "text-gladeGreen-800" : "text-gray-900"}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MobileNav
        handleLogOut={handleLogOut}
        data={data}
        handleSignin={handleSignin}
      />
    </section >
  );
};

export default Navbar;
