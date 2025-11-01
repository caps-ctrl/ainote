import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Sparkles, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-togle";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section
        id="features"
        className="py-20 dark:bg-neutral-900 dark:border-t dark:border-indigo-600  px-6 bg-slate-100"
      >
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white text-gray-900">
          What can AI Notes help you with?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Brain />}
            title="AI Assistance"
            desc="Your notes are analyzed and summarized by artificial intelligence."
          />
          <FeatureCard
            icon={<FileText />}
            title="Content Organization"
            desc="Manage your notes, tags, and folders intuitively."
          />
          <FeatureCard
            icon={<Sparkles />}
            title="Ideas and Inspiration"
            desc="AI helps you expand your notes by adding ideas and context."
          />

          <ThemeToggle />
        </div>
      </section>
    </>
  );
}
