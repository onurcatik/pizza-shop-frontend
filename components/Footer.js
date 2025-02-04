const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>Telefon</h3>
          <p>+90 555 123 4567</p>
          <p>+90 216 987 6543</p>
        </div>
        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Adres</h3>
          <p>Atatürk Caddesi, No: 45, Kadıköy, İstanbul, Türkiye</p>
        </div>
        <div className="box">
          <i className="fas fa-clock"></i>
          <h3>Çalışma Saatleri</h3>
          <p>09:00 - 22:00</p>
        </div>
        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>E-posta</h3>
          <p>info@pizzashop.com</p>
          <p>destek@pizzashop.com</p>
        </div>
      </div>
      <div className="credit">
        &copy; 2025 Tüm Hakları Saklıdır | <span>Onur Çatık </span>
      </div>
    </section>
  );
};

export default Footer;
