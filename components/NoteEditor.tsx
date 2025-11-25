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
  const [aiCooldown, setAiCooldown] = useState(false);

  const improveWithAI = async () => {
    if (aiCooldown) return;

    setAiCooldown(true);
    setTimeout(() => setAiCooldown(false), 5000);

    const res = await fetch("/api/ai-notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: note.content }),
    });

    const data = await res.json();

    if (data.notes) {
      onChange({
        ...note,
        content: data.notes,
      });
    }
  };

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

      <div className="flex justify-end mt-4 items-center text-black gap-2">
        {aiCooldown ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <div></div>
        )}
        <Button
          variant="outline"
          className={
            aiCooldown
              ? "cursor-not-allowed hovver:text-black"
              : "text-white cursor-pointer"
          }
          onClick={improveWithAI}
        >
          ✨ Upgrade with AI
        </Button>
      </div>
    </div>
  );
}
