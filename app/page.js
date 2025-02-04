// app/page.js
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
