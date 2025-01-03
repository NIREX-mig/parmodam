import { Footer } from "@/components/root/Footer/Footer";
import Navbar from "@/components/root/Navbar";
import localFont from "next/font/local";

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

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
