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
            <Link href="/" className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === '/' ? "text-indigo-800 dark:text-indigo-400" : "text-gray-900 dark:text-white"} dark:hover:text-indigo-200`}>Home</Link>
          </li>
          <li>
            <Link href="/blogs" className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === '/blogs' ? "text-indigo-800 dark:text-indigo-400" : "text-gray-900  dark:text-white"} dark:hover:text-indigo-200`}>Blogs</Link>
          </li>
          <li>
            <Link href="/contact" className={`block py-2 px-3 rounded hover:text-indigo-800 ${pathname === '/contact' ? "text-indigo-800 dark:text-indigo-400 " : 'text-gray-900 dark:text-white'} dark:hover:text-indigo-200`}>Contact</Link>
          </li>

          {data?.user.isAdmin &&
            <li>
              <Link href="/dashboard" className={`block py-2 px-3 text-gray-900 rounded hover:text-indigo-800 dark:hover:text-indigo-200 dark:text-white`}>Dashboard</Link>
            </li>
          }
        </ul>
        {
          !data ?
            <Button
              onClick={handleSignin}
              className="bg-indigo-700 rounded-md px-7 py-5 text-white hover:bg-indigo-800 active:bg-indigo-900 active:text-white w-full"
            >
              Sign in
            </Button>
            :
            <Button
              onClick={handleLogOut}
              className="bg-indigo-700 rounded-md px-7 py-5 text-white hover:bg-indigo-800 active:bg-indigo-900 active:text-white w-full "
            >
              Log out
            </Button>
        }
      </div>
    </section>
  );
};

export default MobileNav;
