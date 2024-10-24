"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Logo from "@/public/assets/logo.webp";
import { Button } from "../ui/button";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { ModeToggle } from "../DarkMode";
import MobileNav from "./MobileNav";
import { signOut, useSession } from "next-auth/react";

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
      className={`border-b border-black/40 ${pathname === "/" ? "bg-amber-500" : "bg-white dark:bg-dmode"} sticky top-0`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={Logo || ""}
            width={40}
            height={40}
            className=""
            alt="Logo"
          />
          <span className="font-semibold text-xl text-black dark:text-white"> Pramodam</span>
        </Link>

        <div className="flex gap-3 items-center">
          <span className="lg:hidden">
            <ModeToggle />
          </span>
          <Button type="default" size="sm" onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 bg-white focus:ring-gray-200 dark:text-white dark:bg-dmode">
            <span className="sr-only">Open main menu</span>
            {!mobileNavIsOpen ? <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
              : <IoClose size={50} />}
          </Button>
        </div>


        <div className="hidden md:block">
          <div className=" flex gap-5 w-full md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white font-semibold dark:bg-dmode">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === "/" ? "text-indigo-800 dark:text-indigo-400" : "text-gray-900 dark:text-white "} dark:hover:text-indigo-200`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === "/blogs" ? "text-indigo-800 dark:text-indigo-400" : "text-gray-900 dark:text-white"} dark:hover:text-indigo-200`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === "/contact" ? "text-indigo-800 dark:text-indigo-400" : "text-gray-900 dark:text-white"} dark:hover:text-indigo-200`}
                >
                  Contact
                </Link>
              </li>
              {data?.user.isAdmin &&
                <li>
                  <Link href="/dashboard" className={`block py-2 px-3 text-gray-900 rounded hover:text-indigo-800 dark:text-white dark:hover:text-indigo-200`}>Dashboard</Link>
                </li>
              }
            </ul>
            {
              !data ?
                <Button
                  onClick={handleSignin}
                  className="bg-indigo-700 rounded-md px-7 py-5 text-white hover:bg-indigo-800 active:bg-indigo-900 active:text-white "
                >
                  Sign in
                </Button>
                :
                <Button
                  onClick={handleLogOut}
                  className="bg-indigo-700 rounded-md px-7 py-5 text-white hover:bg-indigo-800 active:bg-indigo-900 active:text-white "
                >
                  Log out
                </Button>
            }
            <ModeToggle />
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
