import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Globalstate from "@/context/GlobalContext";
import { ThemeProvider } from "@/components/theme-provider"
import AuthWraper from "@/context/AuthWraper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pramodam",
  description: "Parmodam is a blogs site for make life easier",
};

export default function MainLayout({ children }) {
  return (
    <Globalstate>
      <html lang="en">
        <AuthWraper>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <NextTopLoader
              color="#3f2beb"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={100}
              shadow="0 0 10px #3f2beb,0 0 5px #3f2beb"
              template='<div class="bar" role="bar"><div class="peg"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </AuthWraper>
      </html>
    </Globalstate>
  );
}
