"use client";

import Footer from "@/components/root/Footer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <section className="w-full h-[calc(100vh-73px)] bg-amber-500 text-black lg:px-12 py-4 px-3 ">
      <div className="w-full">
        <span className="block text-center lg:text-9xl md:text-7xl text-6xl">
          Be part of a{" "}
        </span>
        <span className="block text-center lg:text-9xl md:text-7xl text-4xl font-bold">
          better internet
        </span>
        <span className="block text-center lg:text-2xl md:text-xl text-lg mt-5">
          Read. Write. Deepen your understanding.
        </span>
        <Button
          variant="default"
          size="lg"
          className="md:w-[15rem] active:bg-black/90 font-semibold h-12 md:text-lg block mx-auto mt-10"
          onClick={() => router.push("/blogs")}
        >
          Get Started
        </Button>
      </div>
      <div className="">
        <Footer />
      </div>
    </section>
  );
}
