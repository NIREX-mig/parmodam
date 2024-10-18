"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import profile from "@/public/profile.jpg"

const DashboardHeader = () => {

  const { menuOpen, setMenuOpen } = useGlobalContext();
  const pathname = usePathname();

  const [pageName, setPageName] = useState("");


  useEffect(() => {
    if (pathname === "/dashboard") {
      setPageName("Blogs Dashboard")
    }

    if (pathname === "/dashboard/blogs") {
      setPageName("All Published Blogs")
    }

    if (pathname === "/dashboard/addblog") {
      setPageName("Add Blog")
    }

    if (pathname === "/dashboard/pending") {
      setPageName("Draft Blogs")
    }

    if (pathname === "/dashboard/editblog") {
      setPageName("Edit Blog")
    }

    if (pathname === "/dashboard/setting") {
      setPageName("Setting")
    }

    // get logged in user image

  }, [pathname]);

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

        <div>
          <Image
            src={profile}
            alt="Profile"
            width={50}
            height={50}
            className="border-gray-500 border rounded-full"
          />
        </div>
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
