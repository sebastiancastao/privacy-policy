import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Render Size Checker",
  description: "Chrome extension for technical SEO — detect pages exceeding Google's 2 MB rendering limit.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-75 transition-opacity">
              Render Size Checker
            </Link>
            <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                Home
              </Link>
              <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Render Size Checker. All rights reserved.</span>
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
