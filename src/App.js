import { BrowserRouter } from 'react-router-dom';
import 'swiper/swiper.min.css';
import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routers from './config/Routers';


function App() {
  document.title = 'tMovie';
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
