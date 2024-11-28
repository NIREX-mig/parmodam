"use client";

import BlogPost from "@/components/root/BlogPost";
import CategoryCards from "@/components/root/CategoryCards";
import Hello from "@/components/root/Hello";

export default function Home() {
  return (
    <section className="content">
      <Hello />
      <CategoryCards />
      <BlogPost />
    </section>
  );
}
