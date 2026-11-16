
import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main className="container">
      <h1>Запис на консультацію</h1>

      <p className="description">
        Заповніть форму, щоб записатися на консультацію до викладача.
      </p>

      <RequestForm />
    </main>
  );
}
