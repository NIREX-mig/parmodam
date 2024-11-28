"use client";

import Image from "next/image";
import logo from "@/public/assets/parmodam_transperent.png";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-4xl font-bold tracking-wider text-white">
        <Image
          src={logo}
          alt="log/o"
          width={100}
          height={100}
          className="invert w-auto cursor-pointer"
        />
      </span>
    </div>
  );
}
