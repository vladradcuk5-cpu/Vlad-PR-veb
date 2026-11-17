
import Filter from "@/components/Filter";

async function getBooks() {
  const response = await fetch(
    "https://openlibrary.org/search.json?q=javascript&limit=10"
  );

  if (!response.ok) {
    throw new Error("Не вдалося отримати книги");
  }

  const data = await response.json();

  return data.docs;
}

export default async function CatalogPage() {
  const books = await getBooks();

  return (
    <section>
      <h2>Каталог книг</h2>
      <p>Список книг з Open Library</p>
      <Filter books={books} />
    </section>
  );
}
