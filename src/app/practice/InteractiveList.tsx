
"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

export default function InteractiveList({ books }: { books: Book[] }) {
  const [search, setSearch] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = !onlyFantasy || book.genre === "Фантастика";

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <h2>Список книг</h2>

      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>
        <label>
          <input
            type="checkbox"
            checked={onlyFantasy}
            onChange={(e) => setOnlyFantasy(e.target.checked)}
          />
          Лише фантастика
        </label>
      </p>

      {filteredBooks.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <b>{book.title}</b> — {book.author} ({book.genre})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
