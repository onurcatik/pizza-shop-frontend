// components/UserAccount.js
const UserAccount = () => {
    return (
      <div className="user-account">
        <section>
          <div id="close-account"><span>Kapat</span></div>
          <div className="user">
            <p>
              <span>Şu anda giriş yapmadınız!</span>
            </p>
          </div>
          <div className="display-orders">
            <p>Margherita <span>( 3₺ x 2 )</span></p>
            <p>Mantarlı Pizza <span>( 2₺ x 1 )</span></p>
            <p>Caprese Pizza <span>( 4₺ x 4 )</span></p>
            <p>Sebzeli Pizza <span>( 2₺ x 1 )</span></p>
          </div>
          <div className="flex">
            <form action="" method="post">
              <h3>Şimdi Giriş Yap</h3>
              <input type="email" name="email" required className="box" placeholder="E-posta adresinizi girin" maxLength="50" />
              <input type="password" name="pass" required className="box" placeholder="Şifrenizi girin" maxLength="20" />
              <input type="submit" value="Giriş Yap" name="login" className="btn" />
            </form>
            <form action="" method="post">
              <h3>Kayıt Ol</h3>
              <input type="text" name="name" required className="box" placeholder="Adınızı girin" maxLength="20" />
              <input type="email" name="email" required className="box" placeholder="E-posta adresinizi girin" maxLength="50" />
              <input type="password" name="pass" required className="box" placeholder="Şifrenizi girin" maxLength="20" />
              <input type="password" name="cpass" required className="box" placeholder="Şifrenizi onaylayın" maxLength="20" />
              <input type="submit" value="Kayıt Ol" name="register" className="btn" />
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default UserAccount;
  