"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import profile from "@/public/profile.jpg"
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";



const DashboardHeader = () => {

  const { menuOpen, setMenuOpen } = useGlobalContext();
  const pathname = usePathname();

  // Extract the page name from the pathname
  const pageName = pathname === "/dashboard" ? "Dashboard" : pathname.split("/").slice(-1)[0];


  return (
    <>
      <div className="h-[5rem] w-full bg-white rounded-xl p-4 border-gray-100 border shadow-md lg:flex justify-between items-center hidden dark:bg-dmode dark:text-gray-300 dark:border-gray-600">
        <div>
          <h3 >{pathname}</h3>
          <h3 className="font-bold">{pageName}</h3>
        </div>

        <div>
          <h3 className="text-xl font-semibold ">ADMIN PANEL</h3>
        </div>

        <div className="flex items-center space-x-6">
          {/* Profile Dropdown */}
          <div className="relative group">
            <Image
              src={profile}
              alt="Profile"
              width={50}
              height={50}
              className="border-gray-500 border rounded-full"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          <Image
            src={profile}
            alt="Profile"
            width={50}
            height={50}
            className="border-gray-500 border rounded-full"
          />
        </div> */}
      </div>

      <div className="w-full h-[4rem] sticky top-0 z-[0] bg-white rounded-xl p-4 border-gray-100 border shadow-md mb-4 lg:hidden flex justify-between items-center dark:bg-dmode dark:text-gray-300 dark:border-gray-600">
        <div>
          <h3 className="text-xs font-semibold ">ADMIN PANEL</h3>
          <h3 className="font-bold text-xs mt-2">{pageName}</h3>
        </div>
        <div>
          {!menuOpen ? <GiHamburgerMenu onClick={() => setMenuOpen(true)} size={25} className="hover:cursor-pointer" /> :
            <IoCloseSharp size={30} onClick={() => setMenuOpen(false)} className="hover:cursor-pointer" />
          }
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
