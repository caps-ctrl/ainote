"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NoteEditor from "@/components/NoteEditor";

export default function NotesPage() {
  const [notes, setNotes] = useState<any[]>([]);
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Pobranie notatek przy wejściu na stronę
  const fetchNotes = async () => {
    setLoading(true);
    const res = await fetch("/api/notes");
    if (res.ok) {
      const data = await res.json();
      setNotes(data);
      if (data.length > 0) setActiveNote(data[0].id);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New note", content: "" }),
    });
    if (res.ok) {
      const newNote = await res.json();
      setNotes([newNote, ...notes]);
      setActiveNote(newNote.id);
    }
  };

  const updateNote = async (updatedNote: any) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === updatedNote.id ? updatedNote : n))
    );
    await fetch(`/api/notes/${updatedNote.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedNote.title,
        content: updatedNote.content,
      }),
    });
  };

  if (loading) return <div className="text-white p-4">Loading notes...</div>;

  return (
    <div className="justify-center text-white flex p-4 items-center">
      <div className="flex w-[80%] min-h-[80vh] ">
        {/* Sidebar */}
        <aside className="w-64 bg-black/80 rounded-l-2xl p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Your notes</h2>
          <div className="flex-1 overflow-y-auto space-y-2">
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => setActiveNote(note.id)}
                className={`p-3 rounded-lg cursor-pointer ${
                  note.id === activeNote
                    ? "text-white bg-indigo-700"
                    : "hover:bg-gray-800"
                }`}
              >
                <p className="font-medium">{note.title}</p>
              </div>
            ))}
          </div>

          <Button className="mt-4" onClick={addNote}>
            + New note
          </Button>
        </aside>

        {/* Main editor */}
        <main className="flex-1 p-6 rounded-r-2xl border-l border-indigo-600 bg-black/80">
          {activeNote && (
            <NoteEditor
              note={notes.find((n) => n.id === activeNote)!}
              onChange={updateNote}
            />
          )}
        </main>
      </div>
    </div>
  );
}
