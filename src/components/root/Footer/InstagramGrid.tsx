"use client";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/assets/insta/1.jpg";
import img2 from "@/public/assets/insta/2.jpg";
import img3 from "@/public/assets/insta/3.jpg";
import img4 from "@/public/assets/insta/4.jpg";
import img5 from "@/public/assets/insta/5.jpg";
import img6 from "@/public/assets/insta/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export function InstagramGrid() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <Link
          key={index}
          href="#"
          className="relative block overflow-hidden group aspect-square"
        >
          <Image
            src={image}
            alt={`Instagram post ${index + 1}`}
            width={100}
            height={100}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      ))}
    </div>
  );
}
