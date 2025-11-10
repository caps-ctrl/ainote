import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Brain, Sparkles, FileText, LayoutGrid, Tag } from "lucide-react";
import { ThemeToggle } from "@/components/theme-togle";
import CardSwap, { Card } from "@/components/CardSwap";
import CountUp from "@/components/CountUp";
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="flex  justify-between   border-b border-white shadow-[0_30px_40px_-40px_rgba(255,255,255,0.7)] pt-10  overflow-hidden ">
        <div className="max-w-[60%] text-center">
          <div className="p-10">
            <h1 className="font-bold text-gray-200 p-4 text-4xl">
              Perfect <span className="text-indigo-700">Design.</span>{" "}
              Effortless Thinking.
            </h1>

            <ul>
              <p className="font-semibold text-ml text-gray-200/60">
                At AiNote, we believe design should feel as natural as thought
                itself. Our clean, modern interface helps ideas flow —
                beautifully, intuitively, and without distractions. We recommend
                our platform for anyone who values simplicity, clarity, and a
                touch of creative magic. Because great ideas deserve a great
                design.
              </p>
              <span></span>
            </ul>
          </div>
        </div>
        <div className="-top-10">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {/* --- Karta 1: Edytor z pomocą AI (Dark Mode) --- */}
            <Card>
              <div className="flex h-full flex-col p-6 bg-stone-900 rounded-2xl border border-neutral-700">
                <input
                  type="text"
                  placeholder="Tytuł notatki..."
                  defaultValue="Spotkanie marketingowe Q4"
                  className="text-lg font-semibold bg-transparent border-b border-neutral-600 pb-2 mb-4 text-white placeholder-neutral-500 focus:outline-none"
                />
                <textarea
                  placeholder="Zacznij pisać..."
                  className="flex-1 bg-transparent text-neutral-300 text-sm resize-none focus:outline-none"
                  defaultValue="Omówiliśmy strategię na nowy kwartał. Główne punkty to: zwiększenie budżetu na social media, nowa kampania wideo oraz analiza działań konkurencji. Należy przygotować raport SEO."
                />
                <div className="mt-4 p-3 bg-indigo-900/30 rounded-lg border border-indigo-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-sm font-semibold text-indigo-300">
                      Podsumowanie AI
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Kluczowe tematy: wzrost budżetu social media, nowa kampania
                    wideo i analiza konkurencji. Zadanie: raport SEO.
                  </p>
                </div>
              </div>
            </Card>

            {/* --- Karta 2: Widok organizacji / tagów --- */}
            <Card>
              <div className="flex h-full flex-col p-6 bg-neutral-800 rounded-2xl border border-neutral-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-white">
                    Wszystkie Notatki
                  </h2>
                  <LayoutGrid className="w-5 h-5 text-neutral-400" />
                </div>
                <div className="space-y-3">
                  {/* Notatka 1 */}
                  <div className="p-3 bg-neutral-700/60 rounded-lg">
                    <h3 className="font-medium text-white">Pomysły na apkę</h3>
                    <p className="text-xs text-neutral-400 truncate">
                      Integracja z kalendarzem, powiadomienia...
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-blue-600/50 text-blue-200 px-2 py-0.5 rounded-full">
                        #Projekt
                      </span>
                    </div>
                  </div>
                  {/* Notatka 2 */}
                  <div className="p-3 bg-neutral-700/60 rounded-lg">
                    <h3 className="font-medium text-white">Ważne linki</h3>
                    <p className="text-xs text-neutral-400 truncate">
                      Dokumentacja API, design system...
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-green-600/50 text-green-200 px-2 py-0.5 rounded-full">
                        #Praca
                      </span>
                    </div>
                  </div>
                  {/* Notatka 3 */}
                  <div className="p-3 bg-neutral-700/60 rounded-lg">
                    <h3 className="font-medium text-white">
                      Przepis na ciasto
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                      Mąka, cukier, jajka, proszek do pieczenia...
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-yellow-600/50 text-yellow-200 px-2 py-0.5 rounded-full">
                        #Prywatne
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* --- Karta 3: Twoja istniejąca karta (UI Aplikacji) --- */}
            <Card>
              <div className="flex h-full ">
                {/* Sidebar */}
                <aside className="w-43 bg-neutral-800 border-r rounded-l-2xl p-4 flex flex-col">
                  <h2 className="text-lg text-white font-semibold mb-4">
                    Your notes
                  </h2>
                  <div className="flex-1 overflow-y-auto space-y-2">
                    <div>
                      <p className="font-medium">First ai notes</p>
                      <p className="font-medium rounded bg-indigo-700 text-white">
                        To do List
                      </p>
                      <p className="font-medium">Shoping list</p>
                    </div>
                  </div>
                </aside>

                {/* Main editor */}
                <main className="flex-1 p-6  border-l text-white bg-stone-900">
                  Read one chapter of a good book . Go for a 30-minute walk .
                  Clean your desk . Message an old friend just to say hi. Drink
                  enough water. learning something new. Stretch or do light
                  exercise . Review your weekly goals . Go to bed early .
                </main>
              </div>
            </Card>
          </CardSwap>
        </div>
      </section>

      <section id="features" className="py-20   px-6 ">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          What can AI Notes help you with?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            id={1}
            icon={<Brain />}
            title="AI Assistance"
            desc="Your notes are analyzed and summarized by artificial intelligence."
          />
          <FeatureCard
            id={2}
            icon={<FileText />}
            title="Content Organization"
            desc="Manage your notes, tags, and folders intuitively."
          />
          <FeatureCard
            id={3}
            icon={<Sparkles />}
            title="Ideas and Inspiration"
            desc="AI helps you expand your notes by adding ideas and context."
          />
        </div>
      </section>

      <section id="testimonials" className="py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Loved by <span className="text-indigo-700">Students</span> and
            Creators
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            From university projects to creative studios — AiNote helps
            thousands of learners and thinkers organize their ideas
            effortlessly.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-800/80 border border-neutral-700/50 rounded-2xl px-8 py-6 flex flex-col items-center justify-center shadow-lg hover:shadow-indigo-700/60 transition">
              <h2 className="text-xl text-gray-300 font-semibold mb-2">
                Satisfied Students
              </h2>
              <div className="flex items-end gap-1">
                <CountUp
                  from={0}
                  to={89}
                  duration={2}
                  className="text-5xl font-bold text-indigo-500 drop-shadow-sm"
                />
                <span className="text-3xl font-semibold text-indigo-500 mb-1">
                  %
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-800/80 border border-neutral-700/50 rounded-2xl px-8 py-6 flex flex-col items-center justify-center shadow-lg hover:shadow-indigo-700/60 transition">
              <h2 className="text-xl text-gray-300 font-semibold mb-2">
                Accuracy Rate
              </h2>
              <div className="flex items-end gap-1">
                <CountUp
                  from={0}
                  to={99}
                  duration={3}
                  className="text-5xl font-bold text-indigo-500 drop-shadow-sm"
                />
                <span className="text-3xl font-semibold text-indigo-500 mb-1">
                  %
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-800/80 border border-neutral-700/50 rounded-2xl px-8 py-6 flex flex-col items-center justify-center shadow-lg hover:shadow-indigo-700/60 transition">
              <h2 className="text-xl text-gray-300 font-semibold mb-2">
                Processing Time
              </h2>
              <div className="flex items-end gap-1">
                <CountUp
                  from={0}
                  to={30}
                  duration={2}
                  className="text-5xl font-bold text-indigo-500 drop-shadow-sm"
                />
                <span className="text-3xl font-semibold text-indigo-500 mb-1">
                  s
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
