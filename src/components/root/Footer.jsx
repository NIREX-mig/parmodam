"use client";

import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-amber-300 rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex gap-2 md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            Pramodam
          </Link>
          . All Rights Reserved.
        </span>

        <span className="">Devloped By Nirex</span>

        <div className="flex mt-4 justify-center sm:mt-0 gap-3">
          <Link href="#">
            <FiFacebook
              size={20}
              className="text-gray-600 hover:text-indigo-700"
            />
          </Link>
          <Link href="#">
            <IoLogoTwitter
              size={20}
              className="text-gray-600 hover:text-sky-500"
            />
          </Link>
          <Link href="#">
            <FiInstagram
              size={20}
              className="text-gray-600 hover:text-pink-700"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
