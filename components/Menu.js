const Menu = () => {
    const pizzas = [
      { id: 1, price: 2, image: '/images/pizza-1.jpg', name: 'Margherita' },
      { id: 2, price: 4, image: '/images/pizza-2.jpg', name: 'Mantarlı Pizza' },
      { id: 3, price: 2, image: '/images/pizza-3.jpg', name: 'Caprese Pizza' },
      { id: 4, price: 3, image: '/images/pizza-4.jpg', name: 'Sebzeli Pizza' },
      { id: 5, price: 2, image: '/images/pizza-5.jpg', name: 'Klasik Mantar' },
      { id: 6, price: 4, image: '/images/pizza-6.jpg', name: 'Peynirli Pizza' },
      { id: 7, price: 2, image: '/images/pizza-7.jpg', name: 'Akdeniz Pizza' },
      { id: 8, price: 3, image: '/images/pizza-8.jpg', name: 'Karışık Pizza' },
      { id: 9, price: 4, image: '/images/pizza-9.jpg', name: 'Etli Pizza' }
    ];
  
    return (
      <section id="menu" className="menu">
        <h1 className="heading">Menümüz</h1>
        <div className="box-container">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="box">
              <div className="price">$<span>{pizza.price}</span>/-</div>
              <img src={pizza.image} alt={pizza.name} />
              <div className="name">{pizza.name}</div>
              <form action="" method="post">
                <input type="number" min="1" max="100" defaultValue="1" className="qty" name="qty" />
                <input type="submit" value="Sepete Ekle" name="add_to_cart" className="btn" />
              </form>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
export default Menu;
