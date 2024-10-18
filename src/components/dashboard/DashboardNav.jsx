"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoMdSettings, IoMdAddCircle } from "react-icons/io";
import Logo from "@/public/assets/logo.webp"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const DashboardNav = () => {

  const { menuOpen } = useGlobalContext();
  const pathname = usePathname();

  return (
    <section className={`lg:flex z-10 lg:z-0 bg-gray-100 text-gray-900 ${menuOpen ? "absolute" : "hidden"} dark:bg-dmode dark:text-gray-300`}>
      <aside className="flex h-screen w-16 flex-col items-center border-r border-gray-200 bg-white dark:bg-dmode dark:border-gray-600">
        <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-1 dark:border-gray-600">
          <Link href="/blogs">
            <Image src={Logo || ""} alt="logo" width={50} height={50} priority />
          </Link>
        </div>
        <TooltipProvider>
          <div className="flex flex-1 flex-col gap-y-3 pt-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className={`group relative rounded-xl p-4 ${pathname === "/dashboard" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
                >
                  <FaHome size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dashboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/blogs"
                  className={`group relative rounded-xl p-4 ${pathname === "/dashboard/blogs" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
                >
                  <FaBloggerB size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Blogs</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/addblog"
                  className={`group relative rounded-xl p-4 ${pathname === "/dashboard/addblog" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
                >
                  <IoMdAddCircle size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Blog</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/pending"
                  className={`group relative rounded-xl p-4 ${pathname === "/dashboard/pending" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
                >
                  <MdOutlinePendingActions size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pending</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/setting"
                  className={`group relative rounded-xl p-4 ${pathname === "/dashboard/setting" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
                >
                  <IoMdSettings size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Setting</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <nav className="flex flex-1 flex-col gap-y-3 pt-5">
        </nav>
      </aside>
    </section>
  );
};

export default DashboardNav;
