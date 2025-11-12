// app/layout.js

import AuthProvider from "@/Components/context/AuthProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/Components/Providers/QueryProvider";
import Navbar from "@/Components/Shared/Navbar";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finote",
  description: "Finote a expense tracker app",
  icons: {
    icon: "/finote_favicon_32x32.png",
  },
};



export default function RootLayout({ children }) {
  // console.log(AuthProvider);
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        
               
        <QueryProvider>
          <AuthProvider>
            <Navbar></Navbar> 
            {children}
          </AuthProvider>
        </QueryProvider>

        {/* {children} */}
          
        
      </body>
    </html>
  );
}