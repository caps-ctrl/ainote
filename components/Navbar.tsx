"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-togle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-neutral-900 dark:border-b dark:border-indigo-600  shadow-sm">
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        AI Notes
      </Link>

      <div className="flex items-center  gap-4">
        <Link
          href="/#features"
          className="text-gray-700 dark:text-gray-200 hover:dark:text-gray-400 hover:text-indigo-600"
        >
          Features
        </Link>
        <Link
          href="/#about"
          className="text-gray-700 dark:text-gray-200 hover:dark:text-gray-400 hover:text-indigo-600"
        >
          About Project
        </Link>
        <Button asChild>
          <Link href="/notes">Start now</Link>
        </Button>
      </div>
    </nav>
  );
}
