import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardNav from "@/components/dashboard/DashboardNav";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Dashboard",
    description: "Pramodam Blog app dashboard",
};

export default function DashboardLayout({ children }) {
    return (
        <main className="flex bg-white text-black  ">
            <Toaster />
            <DashboardNav />
            <section className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 w-full px-3 py-2 h-screen dark:bg-black/95`}>
                <DashboardHeader />
                {children}
            </section>
        </main>
    );
}
