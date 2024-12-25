"use client";

import moment from "moment";
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
              <span className="block font-semibold">{moment(blog?.createdAt).format("DD")}</span>
              <span className="block text-xs uppercase">{moment(blog?.createdAt).format("MMM")}</span>
            </div>
          </Link>
        </div>
        {/* <!-- Content Section --> */}
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-2 font-bold flex gap-2 items-center">
            <LuPencilLine size={20} />
            By Admin
          </p>
          <Link href={`/blogs/${blog?.slug}`}>
            <h3
              className="text-lg font-semibold text-gray-800 hover:text-gladeGreen-600 hover:cursor-pointer">
              {blog?.summary}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
