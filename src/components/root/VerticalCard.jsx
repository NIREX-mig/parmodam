"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VerticalCard = ({ blog }) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`/blogs/${blog.slug}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-dmode dark:border-gray-600"
    >
      <Link href={`/blogs/${blog?.slug}`}>
        <Image
          className="rounded-t-lg "
          src={blog?.thumbnailUrl || ""}
          alt="img"
          width={500}
          height={100}
          priority={true}
        />
      </Link>
      <div className="p-5">
        <Link href={`/blogs/${blog?.slug}`}>
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
            {blog?.title}
          </h2>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog?.summary}</p>
        {/* <hr /> */}
        {/* <div className="mt-2 flex gap-3 items-center">
          <div>
            <p className="font-semibold">Nirex mig</p>
            <p className="">Sep 13, 2024. 2 min ago </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VerticalCard;
