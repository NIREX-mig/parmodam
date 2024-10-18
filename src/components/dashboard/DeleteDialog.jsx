"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import axios from "axios";

const DeleteDialog = () => {

    const { deleteDialogRef, deleteId, setDeleteId, tableData, setTableData } = useGlobalContext();

    const { toast } = useToast();

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`/api/dashboard/delete-blog/${deleteId}`);
            const { data } = res;

            const newTableData = tableData.filter((data) => {
                return data._id !== deleteId;
            })
            setTableData(newTableData);

            if (data.success) {
                setDeleteId("");
                toast({
                    variant: "default",
                    title: "Success",
                    description: `${data.message} `,
                });
            }

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Failed!",
                description: `${error?.response?.data?.message || "Somethig went wrong"} `,
            });

        }
    }

    const handleCancle = async () => {
        console.log(deleteId)
        setDeleteId("");
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="hidden">
                <Button variant="outline" ref={deleteDialogRef}>Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-red-600">
                        This action cannot be undone. This will permanently delete the blog from servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancle}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteDialog;