"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import DeleteDialog from "@/components/dashboard/DeleteDialog";
import EditDialog from "@/components/dashboard/EditDialog";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { columns } from "./columns";
import Spinner from "@/components/Spinner";


export default function Blogs() {

  const { tableData, setTableData, currentPage, setCurrentPage } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post(`/api/dashboard/blog-by-status/publish?limit=20&page=${currentPage}`);
        const { data } = res;

        if (data.success) {
          setCurrentPage(data.data.currentPage);
          setTableData(data.data.blogs);
          setIsLoading(false)
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: `${error?.response?.data?.message || "Somethig went wrong"} `,
        });
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  if (isLoading) {
    return <div className="w-full bg-white rounded-xl mt-2 h-[calc(100vh-100px)] p-4 dark:bg-dmode dark:text-gray-300 flex justify-center items-center">
      <Spinner />
    </div>

  }

  return (
    <ScrollArea className="w-full bg-white rounded-xl mt-2 h-[calc(100vh-100px)] p-4 dark:bg-dmode dark:text-gray-300">
      <DeleteDialog />
      <EditDialog />
      <div className="flex justify-center items-center mt-5">
        <div className="w-full">
          <DataTable
            data={tableData}
            columns={columns}
          />
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
