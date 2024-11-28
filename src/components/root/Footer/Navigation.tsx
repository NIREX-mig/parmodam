"use client";

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Author", href: "/about" },
  { label: "Posts", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export function Navigation() {
  return (
    <nav className="grid grid-cols-2 gap-x-12 gap-y-6 font-bold">
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="text-white/80 hover:text-gladeGreen-500 transition-colors duration-200"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
