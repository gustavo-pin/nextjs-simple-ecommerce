import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Hydrate from "./components/Hydrate";

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
    <ClerkProvider>
      <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Hydrate>
          <Navbar />
          <main className="h-screen p-16">
            {children}
          </main>
        </Hydrate>
      </body>
    </html>
    </ClerkProvider>
  );
}
