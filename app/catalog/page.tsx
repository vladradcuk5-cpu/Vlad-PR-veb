
export default async function CatalogPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h2 className="section-title">Наші товари</h2>

      <div className="products">
        <div className="product-card">
          <h3>Смартфони</h3>
          <p>Сучасні смартфони для роботи та розваг.</p>
          <p className="price">Від 5 999 грн</p>
        </div>

        <div className="product-card">
          <h3>Ноутбуки</h3>
          <p>Потужні ноутбуки для навчання та роботи.</p>
          <p className="price">Від 15 999 грн</p>
        </div>
      </div>
    </div>
  );
}
