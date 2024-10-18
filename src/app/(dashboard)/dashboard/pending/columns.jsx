/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button";
import { globalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export const columns = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "createdAt",
        header: "Data",
    },
    {

        header: "Action",
        id: "actions",
        cell: ({ row }) => {
            const blog = row.original;
            const { deleteDialogRef, editDialogRef, setDeleteId, setEditId } = useContext(globalContext)
            return (
                <div className="text-right flex lg:flex-row flex-col gap-5 justify-center items-center">
                    <Button onClick={() => {
                        editDialogRef.current.click()
                        setEditId(blog._id)
                    }}
                    >Edit</Button>

                    <Button onClick={() => {
                        deleteDialogRef.current?.click()
                        setDeleteId(blog._id)
                    }}>Delete</Button>
                </div>
            )
        }
    },
]
