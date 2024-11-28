"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";

const MobileNav = ({ handleLogOut, handleSignin }) => {

  const { mobileNavIsOpen } = useGlobalContext();
  const { data } = useSession();

  const pathname = usePathname();

  return (
    <section className={` ${mobileNavIsOpen ? "absolute translate-y-0 duration-300" : "absolute -translate-y-96 duration-300"} rounded-lg bg-indigo-50 w-full p-4 dark:bg-dmode dark:text-white`}>
      <div className=" flex-col gap-10 w-full dark:bg-dmode dark:text-white">
        <ul className="flex flex-col items-center mb-3 rtl:space-x-reverse font-semibold">
          <li>
            <Link href="/" className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === '/' ? "text-gladeGreen-500" : "text-gray-900"}`}>Home</Link>
          </li>
          <li>
            <Link href="/blogs" className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === '/blogs' ? "text-gladeGreen-500" : "text-gray-900"}`}>Posts</Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === '/about' ? "text-gladeGreen-500" : 'text-gray-900'}`}>About Author</Link>
          </li>
          <li>
            <Link href="/contact" className={`block py-2 px-3 rounded hover:text-gladeGreen-800 ${pathname === '/contact' ? "text-gladeGreen-500" : 'text-gray-900'}`}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MobileNav;
