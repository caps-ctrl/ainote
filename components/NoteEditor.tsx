"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteEditorProps {
  note: Note;
  onChange: (updated: Note) => void;
}

export default function NoteEditor({ note, onChange }: NoteEditorProps) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          onChange({ ...note, title: e.target.value });
        }}
        className="text-2xl font-semibold mb-4 border-b focus:outline-none bg-transparent"
      />

      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          onChange({ ...note, content: e.target.value });
        }}
        className="flex-1 p-4 border rounded-lg resize-none focus:outline-none"
        placeholder="Zacznij pisać swoją notatkę..."
      />

      <div className="flex justify-end mt-4 text-black gap-2">
        <Button
          variant="outline"
          onClick={() => alert("Funkcja AI wkrótce 😉")}
        >
          ✨ Generuj z AI
        </Button>
        <Button onClick={() => alert("Notatka zapisana (mock)")}>
          💾 Zapisz
        </Button>
      </div>
    </div>
  );
}
