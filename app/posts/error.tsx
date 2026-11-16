
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ padding: "30px", textAlign: "center" }}>
      <h2>Виникла помилка!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </main>
  );
}
