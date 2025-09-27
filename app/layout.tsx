import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono, Nunito, Nunito_Sans, Inter  } from "next/font/google";
import "./globals.css";
import Navs from "@/components/navs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700','800'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Recipe Finder",
  description: "Recipe Finder ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${nunitoSans.variable} ${inter.variable} antialiased`}
      >
        <Navs />
        {children}
        <footer className="flex justify-between items-center w-[90%] mx-auto pb-5 max-sm:flex-col-reverse max-sm:justify-center max-sm:gap-5 ">
          <p className="text-[#163A34] font-[500] text-[16px] ">Made with ❤️ and 🥑</p>
          
          <div className="flex justify-end items-center gap-3">
            <Image src='/icon-instagram.svg' width={22} height={22} alt="instagram" />
            <Image src='/icon-bluesky.svg' width={22} height={22} alt="instagram" />
            <Image src='/icon-tiktok.svg' width={22} height={22} alt="tik-tok" />     
          </div>
        </footer>
      </body>
    </html>
  );
}
