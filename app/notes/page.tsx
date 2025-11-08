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
    <div className="justify-center text-white flex p-4 items-center">
      <div className="flex w-[80%] min-h-[80vh] ">
        {/* Sidebar */}
        <aside className="w-64 bg-black/80 rounded-l-2xl  p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Your notes</h2>
          <div className="flex-1 overflow-y-auto space-y-2">
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => setActiveNote(note.id)}
                className={`p-3 rounded-lg  cursor-pointer  ${
                  note.id === activeNote
                    ? "text-white bg-indigo-700"
                    : "hover:bg-gray-800"
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
                title: "New note",
                content: "",
              };
              setNotes([newNote, ...notes]);
              setActiveNote(newNote.id);
            }}
          >
            + New note
          </Button>
        </aside>

        {/* Main editor */}
        <main className="flex-1 p-6 rounded-r-2xl  border-l border-indigo-600 bg-black/80">
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
    </div>
  );
}
