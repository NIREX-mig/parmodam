"use client";

import Image from "next/image";
import Link from "next/link";
import { LuPencilLine } from "react-icons/lu";

const VerticalCard = ({ blog }) => {
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden mx-auto">
        {/* <!-- Image Section --> */}
        <div className="relative group">
          <Link href={`/blogs/${blog?.slug}`} >
            <Image src={blog?.thumbnailUrl || ""} alt="Thumbnail" height={100} width={300} className="w-[350px] h-[350px] object-cover transform transition-transform duration-300 group-hover:scale-110 hover:cursor-pointer" />
            <div className="absolute top-4 left-4 bg-gladeGreen-500 text-white px-3 py-2 rounded-lg text-sm">
              <span className="block font-semibold">22</span>
              <span className="block text-xs">May</span>
            </div>
          </Link>
        </div>
        {/* <!-- Content Section --> */}
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-2 font-bold flex gap-2 items-center">
            <LuPencilLine size={20} />
            By Patricia Doe
          </p>
          <Link href={`/blogs/${blog?.slug}`}>
            <h3
              className="text-lg font-semibold text-gray-800 hover:text-gladeGreen-600 hover:cursor-pointer">
              A journey is best measured in friends, rather than miles
            </h3>
          </Link>
        </div>
      </div>
    </div>


    // <div
    //   onClick={handleOnClick}
    //   className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-dmode dark:border-gray-600"
    // >
    //   <Link href={`/blogs/${blog?.slug}`}>
    //     <Image
    //       className="rounded-t-lg "
    //       src={blog?.thumbnailUrl || ""}
    //       alt="img"
    //       width={500}
    //       height={100}
    //       priority={true}
    //     />
    //   </Link>
    //   <div className="p-5">
    //     <Link href={`/blogs/${blog?.slug}`}>
    //       <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
    //         {blog?.title}
    //       </h2>
    //     </Link>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog?.summary}</p>
    //     {/* <hr /> */}
    //     {/* <div className="mt-2 flex gap-3 items-center">
    //       <div>
    //         <p className="font-semibold">Nirex mig</p>
    //         <p className="">Sep 13, 2024. 2 min ago </p>
    //       </div>
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default VerticalCard;
