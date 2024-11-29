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
    title: "Pramodam",
    description: "Parmodam is a blogs site for make life easier",
};

export default function AuthLayout({ children }) {
    return (
        <main>
            <section
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Toaster />
                {children}
            </section>
        </main>
    );
}
