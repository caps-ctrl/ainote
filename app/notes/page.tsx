"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NoteEditor from "@/components/NoteEditor";

export default function NotesPage() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "My first to do App",
      content: "wstaw tu link do pierwszego to do app",
    },
    {
      id: 2,
      title: "To do list",
      content: "tu napisz co ,asz zrobic",
    },
  ]);

  const [activeNote, setActiveNote] = useState<number>(1);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-neutral-800 border-r p-4 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Your notes</h2>
        <div className="flex-1 overflow-y-auto space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveNote(note.id)}
              className={`p-3 rounded-lg  cursor-pointer  ${
                note.id === activeNote
                  ? "bg-indigo-100 dark:text-indigo-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <p className="font-medium">{note.title}</p>
            </div>
          ))}
        </div>

        <Button
          className="mt-4"
          onClick={() => {
            const newNote = {
              id: Date.now(),
              title: "Nowa notatka",
              content: "",
            };
            setNotes([newNote, ...notes]);
            setActiveNote(newNote.id);
          }}
        >
          + Nowa notatka
        </Button>
      </aside>

      {/* Main editor */}
      <main className="flex-1 p-6 bg-neutral-50 dark:border-l dark:border-indigo-600 dark:bg-stone-800">
        <NoteEditor
          note={notes.find((n) => n.id === activeNote)!}
          onChange={(updatedNote) => {
            setNotes((prev) =>
              prev.map((n) => (n.id === activeNote ? updatedNote : n))
            );
          }}
        />
      </main>
    </div>
  );
}
