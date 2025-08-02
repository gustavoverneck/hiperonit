import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIPERON.",
  description: "Tech Solutions",
  icons: {
    icon: [
      {
        url: "/hiperonit_logo_black.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/hiperonit_logo_black.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/hiperonit_logo_black.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 min-h-screen`}
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-15 pointer-events-none select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#ff881b_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#1f2937_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
