
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2>Вітаємо в електронній бібліотеці!</h2>
      <p>
        Тут ви можете переглядати книги, знаходити потрібні видання
        та залишати заявки.
      </p>
      <Link href="/catalog">Переглянути каталог книг</Link>
    </section>
  );
}
