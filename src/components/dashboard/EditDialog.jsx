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
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useRouter } from "next/navigation";

const EditDialog = () => {
    const { editDialogRef, setEditId } = useGlobalContext();

    const router = useRouter();

    const handleEdit = async () => {
        router.replace("/dashboard/editblog")
    }

    const handleCancle = async () => {
        setEditId("");
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild className="hidden">
                <Button variant="outline" ref={editDialogRef}>Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription className="text-base">
                        You want to Edit the Blog.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleCancle}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleEdit}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default EditDialog;