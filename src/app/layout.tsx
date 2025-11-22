import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavya Jain",
  description: "I am Kavya Jain, a Fullstack AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="icon.ico" type="image/x-icon" />
      <body className={inter.className}>
        <div className="w-[100%] overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
