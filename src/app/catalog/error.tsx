
"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити каталог книг.</p>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </div>
  );
}
