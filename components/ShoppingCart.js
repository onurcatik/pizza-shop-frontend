// components/ShoppingCart.js
const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <section>
        <div id="close-cart"><span>Kapat</span></div>
        <div className="box">
          <a href="#" className="fas fa-times"></a>
          <img src="/images/pizza-1.jpg" alt="Margherita Pizza" />
          <div className="content">
            <p>Margherita Pizza <span>( 3₺ x 2 )</span></p>
            <form action="" method="post">
              <input type="number" className="qty" name="qty" min="1" defaultValue="2" max="100" />
              <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </form>
          </div>
        </div>

        <div className="box">
          <a href="#" className="fas fa-times"></a>
          <img src="/images/pizza-3.jpg" alt="Sucuklu Pizza" />
          <div className="content">
            <p>Sucuklu Pizza <span>( 2₺ x 1 )</span></p>
            <form action="" method="post">
              <input type="number" className="qty" name="qty" min="1" defaultValue="1" max="100" />
              <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </form>
          </div>
        </div>

        <div className="box">
          <a href="#" className="fas fa-times"></a>
          <img src="/images/pizza-6.jpg" alt="Karışık Pizza" />
          <div className="content">
            <p>Karışık Pizza <span>( 4₺ x 2 )</span></p>
            <form action="" method="post">
              <input type="number" className="qty" name="qty" min="1" defaultValue="2" max="100" />
              <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </form>
          </div>
        </div>

        <div className="box">
          <a href="#" className="fas fa-times"></a>
          <img src="/images/pizza-7.jpg" alt="Sebzeli Pizza" />
          <div className="content">
            <p>Sebzeli Pizza <span>( 2₺ x 1 )</span></p>
            <form action="" method="post">
              <input type="number" className="qty" name="qty" min="1" defaultValue="1" max="100" />
              <button type="submit" className="fas fa-edit" name="update_qty"></button>
            </form>
          </div>
        </div>

        <a href="#order" className="btn">Şimdi Sipariş Ver</a>
      </section>
    </div>
  );
};

export default ShoppingCart;
