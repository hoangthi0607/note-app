// app/notes/page.tsx
"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách ghi chú</h1>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="p-3 border rounded shadow">
            <h2 className="font-semibold">{note.title}</h2>
            <p>{note.content}</p>
            <p className="text-sm text-gray-500">{new Date(note.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
