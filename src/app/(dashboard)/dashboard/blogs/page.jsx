"use client";

import DataTable from "@/components/dashboard/DataTable";
import { useEffect } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import DeleteDialog from "@/components/dashboard/DeleteDialog";
import EditDialog from "@/components/dashboard/EditDialog";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { columns } from "./columns";


export default function Blogs() {

  const { nextId, setNextId, tableData, setTableData } = useGlobalContext();

  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`/api/dashboard/blog-by-status/publish?limit=20&lastId=${nextId}`);
        const { data } = res;
        if (data.success) {
          setNextId(data.data.nextId);
          setTableData(data.data.blogs)
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: `${error?.response?.data?.message || "Somethig went wrong"} `,
        });
      }
    }
    fetchData();
  }, [])

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
