
// pages/_app.js
import '../public/css/style.css'; // Import your custom CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
