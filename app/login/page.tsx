"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Zalogowano!");
      // tutaj możesz zrobić np. router.push("/notes");
    } else {
      setMessage(data.error || "Błąd logowania");
    }
  }

  return (
    <>
      <div className="flex text-white min-h-screen items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-800 p-6 rounded-xl shadow-md w-80"
        >
          <h1 className="text-xl font-semibold mb-4 text-center">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 p-2 rounded bg-neutral-700"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded bg-neutral-700"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
            Log in
          </button>
          {message && <p className="text-center  text-sm mt-3">{message}</p>}{" "}
          <a href="/register">
            {" "}
            <h2 className="p-4 text-sm hover:underline">
              Don’t have an account? Sign up here.
            </h2>
          </a>
        </form>{" "}

        <div></div>
      </div>
    </>
  );
}
