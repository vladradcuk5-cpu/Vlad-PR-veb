
"use client";

import { useState } from "react";

type Book = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
};

export default function Filter({ books }: { books: Book[] }) {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук книги..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBooks.map((book) => (
        <div key={book.key}>
          <h3>{book.title}</h3>
          <p>Автор: {book.author_name?.join(", ") || "Невідомий"}</p>
          <p>Рік: {book.first_publish_year || "Невідомий"}</p>
        </div>
      ))}

      {filteredBooks.length === 0 && <p>Книг не знайдено</p>}
    </div>
  );
}
