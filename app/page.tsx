
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Ласкаво просимо до TECHSTORE!</h1>

        <p>
          Відкрийте для себе світ сучасних технологій.
          Найкраща техніка за вигідними цінами!
        </p>

        <Link href="/catalog" className="primary-button">
          Перейти до каталогу
        </Link>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2 className="section-title">
          Чому обирають нас?
        </h2>

        <div className="products">
          <div className="product-card">
            <h3>Якісна техніка</h3>
            <p>
              Пропонуємо сучасні пристрої від відомих виробників.
            </p>
          </div>

          <div className="product-card">
            <h3>Вигідні ціни</h3>
            <p>
              Доступні ціни та регулярні спеціальні пропозиції.
            </p>
          </div>

          <div className="product-card">
            <h3>Швидка доставка</h3>
            <p>
              Доставляємо замовлення по всій Україні.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
