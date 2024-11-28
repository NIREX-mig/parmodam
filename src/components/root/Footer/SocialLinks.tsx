"use client";

import { fbHref, instaHref, threadHref } from "@/constant";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: `${fbHref}`, label: "Facebook" },
  { icon: Instagram, href: `${instaHref}`, label: "Instagram" },
  { icon: Twitter, href: `${threadHref}`, label: "Twitter" },
];

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          className="text-white/80 hover:text-gladeGreen-400 transition-colors duration-200"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}
