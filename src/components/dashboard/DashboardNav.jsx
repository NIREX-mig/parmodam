"use client";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import logo from "@/public/assets/parmodam_transperent.png"


const DashboardNav = () => {

  const { menuOpen } = useGlobalContext();
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Add Blog", path: "/dashboard/addblog", icon: IoMdAddCircle },
    { name: "Blogs", path: "/dashboard/blogs", icon: FaBloggerB },
    { name: "Pending Blogs", path: "/dashboard/pending", icon: MdOutlinePendingActions },

  ];


  return (


    // <div className="w-64 bg-white text-black lg:flex flex-col p-4 shadow-lg">
    <div className={`z-[100] fixed top-0 left-0 h-screen bg-white text-black shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 lg:static lg:flex lg:flex-col lg:w-64 p-4`}>
      <div className="mb-3">
      <Link href="/blogs">
        <Image src={logo} alt="logo" width={100} height={100} className="w-[10rem] cursor-pointer" priority />
      </Link>
      </div>
      <div className={`flex flex-col`}>
        <ul className="space-y-2 mt-3">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="flex items-center space-x-3 p-2 rounded-md group text-black cursor-pointer hover:bg-gray-200"
            >
              <li
                className="flex items-center space-x-3 p-2 rounded-md group text-black cursor-pointer "
              >
                <item.icon className="h-6 w-6 text-black group-hover:text-gladeGreen-500" />
                <p className="text-black font-medium group-hover:text-gladeGreen-500">
                  {item.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>

    // <section className={`lg:flex z-10 lg:z-0 bg-gray-100 text-gray-900 ${menuOpen ? "absolute" : "hidden"} dark:bg-dmode dark:text-gray-300`}>
    //   <aside className="flex h-screen w-16 flex-col items-center border-r border-gray-200 bg-white dark:bg-dmode dark:border-gray-600">
    //     <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-1 dark:border-gray-600">
    //       <Link href="/blogs">
    //         <Image src={Logo || ""} alt="logo" width={50} height={50} priority />
    //       </Link>
    //     </div>
    //     <TooltipProvider>
    //       <div className="flex flex-1 flex-col gap-y-3 pt-5">
    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href="/dashboard"
    //               className={`group relative rounded-xl p-4 ${pathname === "/dashboard" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
    //             >
    //               <FaHome size={20} />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>Dashboard</p>
    //           </TooltipContent>
    //         </Tooltip>

    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href="/dashboard/blogs"
    //               className={`group relative rounded-xl p-4 ${pathname === "/dashboard/blogs" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
    //             >
    //               <FaBloggerB size={20} />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>Blogs</p>
    //           </TooltipContent>
    //         </Tooltip>

    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href="/dashboard/addblog"
    //               className={`group relative rounded-xl p-4 ${pathname === "/dashboard/addblog" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
    //             >
    //               <IoMdAddCircle size={20} />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>Add Blog</p>
    //           </TooltipContent>
    //         </Tooltip>

    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href="/dashboard/pending"
    //               className={`group relative rounded-xl p-4 ${pathname === "/dashboard/pending" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
    //             >
    //               <MdOutlinePendingActions size={20} />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>Pending</p>
    //           </TooltipContent>
    //         </Tooltip>

    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href="/dashboard/setting"
    //               className={`group relative rounded-xl p-4 ${pathname === "/dashboard/setting" ? "text-white bg-black/95 hover:shadow-lg" : "hover:bg-gray-200 dark:hover:bg-gray-400 dark:hover:text-black"}`}
    //             >
    //               <IoMdSettings size={20} />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>Setting</p>
    //           </TooltipContent>
    //         </Tooltip>
    //       </div>
    //     </TooltipProvider>
    //     <nav className="flex flex-1 flex-col gap-y-3 pt-5">
    //     </nav>
    //   </aside>
    // </section>
  );
};

export default DashboardNav;
