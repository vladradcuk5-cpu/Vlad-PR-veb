
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h2 style={{ color: "#dc2626", marginBottom: "15px" }}>
        Сталася помилка!
      </h2>

      <p style={{ marginBottom: "20px" }}>
        Не вдалося завантажити товари.
      </p>

      <button
        onClick={() => reset()}
        className="primary-button"
        style={{ border: "none", cursor: "pointer" }}
      >
        Спробувати ще раз
      </button>
    </div>
  );
}
