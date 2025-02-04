// components/MyOrders.js
const MyOrders = () => {
  return (
    <div className="my-orders">
      <section>
        <div id="close-orders"><span>Kapat</span></div>
        <h3 className="title">Siparişlerim</h3>
        <div className="box">
          <p>Sipariş Tarihi : <span>06/04/2025</span></p>
          <p>Ad : <span>Ali Yılmaz</span></p>
          <p>Telefon : <span>+90 555 123 4567</span></p>
          <p>Adres : <span>Atatürk Mahallesi, 123. Sokak, No: 12, Kadıköy, İstanbul, Türkiye</span></p>
          <p>Ödeme Yöntemi : <span>Nakit Ödeme</span></p>
          <p>Siparişler : <span>Margherita Pizza 3₺ x 2, Sucuklu Pizza 2₺ x 1, Karışık Pizza 4₺ x 4, Sebzeli Pizza 2₺ x 1</span></p>
          <p>Toplam Fiyat : <span>11₺</span></p>
          <p>Ödeme Durumu : <span style={{ color: 'var(--red)' }}>Beklemede</span></p>
        </div>
        <div className="box">
          <p>Sipariş Tarihi : <span>06/04/2025</span></p>
          <p>Ad : <span>Ali Yılmaz</span></p>
          <p>Telefon : <span>+90 555 123 4567</span></p>
          <p>Adres : <span>Atatürk Mahallesi, 123. Sokak, No: 12, Kadıköy, İstanbul, Türkiye</span></p>
          <p>Ödeme Yöntemi : <span>Nakit Ödeme</span></p>
          <p>Siparişler : <span>Margherita Pizza 3₺ x 2, Sucuklu Pizza 2₺ x 1, Karışık Pizza 4₺ x 4, Sebzeli Pizza 2₺ x 1</span></p>
          <p>Toplam Fiyat : <span>11₺</span></p>
          <p>Ödeme Durumu : <span style={{ color: 'var(--red)' }}>Beklemede</span></p>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
