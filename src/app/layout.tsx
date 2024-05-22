import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "The best e-commerce ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-slate-700 h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
