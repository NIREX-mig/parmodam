"use client";

import CategoriesSection from "@/components/root/CategoriesSection";
import VerticalCard from "@/components/root/VerticalCard";
import Spinner from "@/components/Spinner";
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import axios from "axios";
import { useEffect, useState } from "react"

export default function Blogs() {
  const { setMobileNavIsOpen, currentPage, setCurrentPage } = useGlobalContext();

  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();


  const onChange = (e) => {
    setQuery(e.target.value);

    if (e.key === "Enter") {
      console.log(query);
    }
  };

  useEffect(() => {
    setMobileNavIsOpen(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/root?limit=20&page=${currentPage}`);
        const { data } = res;

        if (data.success) {
          setBlogs(data.data.blogs);
          setCurrentPage(data.data.currentPage);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: `${error?.response?.data?.message || "Somethig went wrong"} `,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <section className="w-full border bg-white text-black lg:px-12 px-3 lg:flex gap-6 py-5 overflow-auto">
      <section className=" lg:w-[25rem] lg:p-2 w-full">
        <div className="flex">
          <input
            type="text"
            name="query"
            value={query}
            onChange={onChange}
            placeholder="Search"
            autoComplete="off"
            className="w-full h-10 px-2 indent-3 py-2.5 border border-gray-500 rounded-lg focus:outline-none"
          />
        </div>

        <CategoriesSection />
      </section>
      <section className="w-full p-2 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-5">Featured Posts</h1>
        {loading && <Spinner />}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          {blogs?.map((blog, i) => {
            return <VerticalCard key={i} blog={blog} />;
          })}
        </div>
        {/* <div className="lg:mx-20 w-auto mt-5">
          <Pagination
            length={blogs.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div> */}
      </section>
      
    </section>
  );
}
