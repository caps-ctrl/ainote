"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
export default function HeroSection() {
  const { isLoggedIn } = useAuth();
  return (
    <section className="flex flex-col items-center justify-center text-center  py-24 px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-300">
        Smart Notes with <span className="text-indigo-600">AI</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-300 mb-8">
        AI Notes is an application that helps you capture, organize, and
        summarize your notes — powered by artificial intelligence.
      </p>

      <div className="flex gap-4">
        {isLoggedIn ? (
          <Button asChild size="lg">
            <Link href="/notes">Check your notes</Link>
          </Button>
        ) : (
          <Button asChild size="lg">
            <Link href="/login">Start for Free</Link>
          </Button>
        )}
        <Button asChild variant="outline" size="lg">
          <Link href="features">See features</Link>
        </Button>
      </div>
    </section>
  );
}
