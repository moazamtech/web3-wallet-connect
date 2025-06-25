import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/components/Web3Provider";
import { headers } from 'next/headers'
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Wallet Connect - Open Source",
  description: "A modern, responsive Web3 wallet connection interface built with Next.js, Reown AppKit, and Tailwind CSS. Connect to multiple wallets with ease.",
  keywords: ["Web3", "Wallet", "Ethereum", "DeFi", "Blockchain", "Next.js"],
  authors: [{ name: "Muhammad Moazam" }],
  openGraph: {
    title: "Web3 Wallet Connect",
    description: "Modern Web3 wallet connection interface",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
        <Web3Provider cookies={cookies}>
          {children}
          <Toaster 
            position="top-right"
            richColors
            expand={true}
            duration={3000}
            theme="light"
          />
        </Web3Provider>
      </body>
    </html>
  )
}