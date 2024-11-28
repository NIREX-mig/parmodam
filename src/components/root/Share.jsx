"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Share = ({ url, title }) => {

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="lg:mt-10 items-center inline-flex gap-4">
      <h4 className="font-bold">SHARE: </h4>
      <div className="flex gap-3 items-center">
        <Link
          href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={30} className="text-white p-2 rounded-full bg-gladeGreen-500" />
        </Link>

        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={30} className="text-white p-2 rounded-full bg-gladeGreen-500" />
        </Link>

        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-white p-2 rounded-full bg-gladeGreen-500" />

        </Link>
      </div>
    </div>
  );
};

export default Share;
