"use client";
import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Definicja schematu walidacji za pomocą Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Imię jest wymagane" }),
  email: z.string().email({ message: "Nieprawidłowy adres email" }),
  password: z
    .string()
    .min(6, { message: "Hasło musi mieć co najmniej 6 znaków" }),
});

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Walidacja formularza za pomocą Zod
    const validationResult = formSchema.safeParse(form);
    if (!validationResult.success) {
      setErrors(
        validationResult.error.issues.map((err) => err.message).join(", ")
      );
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) setMessage("Konto utworzone! Możesz się zalogować.");
    else setMessage(data.error || "Błąd rejestracji");
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row  justify-evenly text-white min-h-screen bg-black/60  rounded-2xl">
        {/* Lewa kolumna - formularz */}
        <div className="flex w-full md:w-1/2  items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-80 border border-neutral-800"
          >
            <h1 className="text-2xl font-semibold mb-6 text-center text-indigo-400">
              Rejestracja
            </h1>

            <input
              type="text"
              placeholder="Imię"
              className="w-full mb-3 p-2 rounded bg-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 rounded bg-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Hasło"
              className="w-full mb-4 p-2 rounded bg-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            {errors && <p className="text-red-500 text-sm mb-2">{errors}</p>}

            <button className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition">
              Zarejestruj się
            </button>

            {message && <p className="text-center text-sm mt-3">{message}</p>}
          </form>
        </div>

        {/* Prawa kolumna – efekt WOW */}
        <motion.div
          className=" md:flex justify-center p-5 items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Tło gradientowe */}
          <div />

          {/* Treść */}
          <div className=" bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Dołącz do społeczności przyszłości
            </h2>
            <p className="text-gray-200 mb-8">
              Zmieniaj sposób nauki i pracy — razem z AI. Już tysiące
              użytkowników korzystają z naszej platformy.
            </p>

            <div className="flex  justify-around mt-6">
              <div>
                <CountUp
                  start={0}
                  end={12000}
                  duration={3}
                  separator=","
                  className="text-4xl font-bold text-indigo-300"
                />
                <p className="text-sm text-gray-300 mt-1">Użytkowników</p>
              </div>
              <div>
                <CountUp
                  start={0}
                  end={98}
                  duration={3}
                  className="text-4xl font-bold text-indigo-300"
                />
                <span className="text-2xl">%</span>
                <p className="text-sm text-gray-300 mt-1">Satysfakcji</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
