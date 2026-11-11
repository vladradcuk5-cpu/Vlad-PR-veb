
export default function LaptopsPage() {
  return (
    <div>
      <h2 className="section-title">Ноутбуки</h2>

      <div className="products">
        <div className="product-card">
          <h3>ASUS VivoBook 15</h3>
          <p>Зручний ноутбук для навчання та повсякденної роботи.</p>
          <p className="price">22 999 грн</p>
        </div>

        <div className="product-card">
          <h3>Lenovo IdeaPad 5</h3>
          <p>Продуктивний ноутбук із сучасним дизайном.</p>
          <p className="price">27 999 грн</p>
        </div>

        <div className="product-card">
          <h3>Apple MacBook Air</h3>
          <p>Легкий ноутбук із високою продуктивністю.</p>
          <p className="price">45 999 грн</p>
        </div>
      </div>
    </div>
  );
}
