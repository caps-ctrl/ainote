"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black/40">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        AI Notes
      </Link>

      {/* Linki */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Link href="/features" className="text-gray-200 hover:text-gray-400">
          Features
        </Link>
        <Link href="/about" className="text-gray-200 hover:text-gray-400">
          About Project
        </Link>

        <div className="ml-auto">
          {isLoggedIn ? (
            <Button
              variant={"nav"}
              onClick={() => {
                logout();
                setTimeout(() => router.push("/"), 800);
              }}
            >
              Logout
            </Button>
          ) : (
            <Button variant={"nav"} asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
