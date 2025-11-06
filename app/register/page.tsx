"use client";
import { useState } from "react";
import { z } from "zod";
import CardSwap, { Card } from "@/components/CardSwap";
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
      // Pobieramy komunikaty błędów w formie stringa
      setErrors(
        validationResult.error.issues.map((err) => err.message).join(", ")
      );
      return; // Jeśli są błędy, nie wysyłamy formularza
    }

    // Jeśli walidacja przejdzie, wyślij dane do API
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
    <div className="flex justify-between p-4">
      <div className="flex min-h-screen items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md w-80"
        >
          <h1 className="text-xl font-semibold mb-4 text-center">
            Rejestracja
          </h1>
          <input
            type="text"
            placeholder="Imię"
            className="w-full mb-2 p-2 rounded bg-neutral-200 dark:bg-neutral-700"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 rounded bg-neutral-200 dark:bg-neutral-700"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Hasło"
            className="w-full mb-4 p-2 rounded bg-neutral-200 dark:bg-neutral-700"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* Wyświetlanie ogólnych błędów w jednym komunikacie */}
          {errors && <p className="text-red-500 text-sm">{errors}</p>}

          <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
            Zarejestruj się
          </button>

          {message && <p className="text-center text-sm mt-3">{message}</p>}
        </form>
      </div>

      <div style={{ height: "600px", position: "relative" }}></div>
    </div>
  );
}
