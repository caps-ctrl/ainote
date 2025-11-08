"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 ">
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        AI Notes
      </Link>

      <div className="flex items-center  gap-4">
        <Link href="/features" className="text-gray-200 hover:text-gray-400">
          Features
        </Link>
        <Link href="/about" className="text-gray-200 hover:text-gray-400">
          About Project
        </Link>
        <Button variant={"nav"} asChild>
          <Link href="/notes">Start now</Link>
        </Button>
      </div>
    </nav>
  );
}
