// components/Order.js
const Order = () => {
  return (
    <section className="order" id="order">
      <h1 className="heading">Sipariş Ver</h1>
      <form action="" method="post">
        <div className="display-orders">
          <p>Margherita Pizza <span>( 3₺ x 2 )</span></p>
          <p>Sucuklu Pizza <span>( 2₺ x 1 )</span></p>
          <p>Karışık Pizza <span>( 4₺ x 4 )</span></p>
          <p>Sebzeli Pizza <span>( 2₺ x 1 )</span></p>
        </div>
        <div className="flex">
          <div className="inputBox">
            <span>Adınız :</span>
            <input type="text" name="name" className="box" required placeholder="Adınızı girin" maxLength="20" />
          </div>
          <div className="inputBox">
            <span>Telefon :</span>
            <input type="number" name="number" className="box" required placeholder="Telefon numaranızı girin" min="0" />
          </div>
          <div className="inputBox">
            <span>Ödeme Yöntemi</span>
            <select name="method" className="box">
              <option value="cash on delivery">Kapıda Ödeme</option>
              <option value="credit card">Kredi Kartı</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div className="inputBox">
            <span>Adres 1 :</span>
            <input type="text" name="flat" className="box" required placeholder="Örn. Daire No." maxLength="50" />
          </div>
          <div className="inputBox">
            <span>Adres 2 :</span>
            <input type="text" name="street" className="box" required placeholder="Örn. Sokak Adı" maxLength="50" />
          </div>
          <div className="inputBox">
            <span>Posta Kodu :</span>
            <input type="number" name="pin_code" className="box" required placeholder="Örn. 123456" min="0" />
          </div>
        </div>
        <input type="submit" value="Sipariş Ver" className="btn" name="order" />
      </form>
    </section>
  );
};

export default Order;
