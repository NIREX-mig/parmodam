"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Share = ({ url, title }) => {

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="lg:mt-10 hidden lg:block">
      <h4 className="text-sm">SHARE</h4>
      <div className="mt-3 flex gap-3 items-center">
        <Link
          href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={25} className="text-indigo-700 hover:text-indigo-800" />
        </Link>

        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={25} className="text-indigo-700 hover:text-indigo-800" />
        </Link>

        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} className="text-indigo-700 hover:text-indigo-800" />

        </Link>
      </div>
    </div>
  );
};

export default Share;
