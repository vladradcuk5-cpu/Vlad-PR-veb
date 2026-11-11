
export default function SmartphonesPage() {
  return (
    <div>
      <h2 className="section-title">Смартфони</h2>

      <div className="products">
        <div className="product-card">
          <h3>Samsung Galaxy S25</h3>
          <p>Якісний дисплей, потужний процесор та чудова камера.</p>
          <p className="price">34 999 грн</p>
        </div>

        <div className="product-card">
          <h3>iPhone 16</h3>
          <p>Сучасний смартфон Apple з потужною камерою.</p>
          <p className="price">39 999 грн</p>
        </div>

        <div className="product-card">
          <h3>Xiaomi Redmi Note 14</h3>
          <p>Доступний смартфон із великим екраном.</p>
          <p className="price">8 999 грн</p>
        </div>
      </div>
    </div>
  );
}
