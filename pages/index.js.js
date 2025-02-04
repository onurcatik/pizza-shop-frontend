
// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import UserAccount from '../components/UserAccount';
import MyOrders from '../components/MyOrders';
import ShoppingCart from '../components/ShoppingCart';
import HomeSlider from '../components/HomeSlider';
import About from '../components/About';
import Menu from '../components/Menu';
import Order from '../components/Order';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Complete Responsive Pizza Shop Website Design</title>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      
      <Header />

      <UserAccount />

      <MyOrders />

      <ShoppingCart />

      <main>
        <div className="home-bg">
          <HomeSlider />
        </div>
        <About />
        <Menu />
        <Order />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
