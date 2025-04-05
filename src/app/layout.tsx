import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

const primaryFont = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Aria's Home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return(
        <html lang="en" className="dark">
            <body className={`${primaryFont.className} bg-baselight dark:bg-base`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}