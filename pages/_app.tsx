import '../styles/global.css';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
