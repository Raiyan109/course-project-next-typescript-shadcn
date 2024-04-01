import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "NextJS and TypeScript App",
  description: "Online course app with NextJS, TypeScript, and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans flex flex-col flex-auto flex-shrink-0 antialiased ",
        fontSans.variable
      )}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
