// components/About.js
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">Hakkımızda</h1>
      <div className="box-container">
        <div className="box">
          <img src="/images/about-1.svg" alt="Sevgi ile yapılmış" />
          <h3>Sevgi ile Yapılmış</h3>
          <p>
            Yaptığımız her işte kaliteye ve özen göstermeye önem veriyoruz. Müşterilerimize en iyi deneyimi sunmak için sevgiyle çalışıyoruz.
          </p>
          <a href="#menu" className="btn">Menümüzü İnceleyin</a>
        </div>
        <div className="box">
          <img src="/images/about-2.svg" alt="30 Dakikada Teslim" />
          <h3>30 Dakikada Teslim</h3>
          <p>
            Siparişlerinizi olabildiğince hızlı ve taze bir şekilde teslim ediyoruz. Zamanında hizmet bizim önceliğimizdir.
          </p>
          <a href="#menu" className="btn">Menümüzü İnceleyin</a>
        </div>
        <div className="box">
          <img src="/images/about-3.svg" alt="Arkadaşlarınla Paylaş" />
          <h3>Arkadaşlarınla Paylaş</h3>
          <p>
            Lezzetlerimizi sevdiklerinizle paylaşarak unutulmaz anılar biriktirin. Her bir ürünümüz sizin için özenle hazırlandı.
          </p>
          <a href="#menu" className="btn">Menümüzü İnceleyin</a>
        </div>
      </div>
    </section>
  );
};

export default About;
