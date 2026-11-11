
import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const books = [
    { id: 1, title: "Гаррі Поттер", author: "Дж. Роулінг", genre: "Фантастика" },
    { id: 2, title: "Володар перснів", author: "Дж. Толкін", genre: "Фантастика" },
    { id: 3, title: "Кобзар", author: "Тарас Шевченко", genre: "Поезія" },
    { id: 4, title: "Дюна", author: "Френк Герберт", genre: "Фантастика" },
    { id: 5, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", genre: "Казка" },
    { id: 6, title: "Тигролови", author: "Іван Багряний", genre: "Пригоди" },
  ];

  return (
    <main>
      <h1>Електронна бібліотека</h1>
      <p>Загальна кількість книг: {books.length}</p>

      <InteractiveList books={books} />
    </main>
  );
}
