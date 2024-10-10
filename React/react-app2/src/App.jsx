import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Service from './component/Service';
import About from './About';
import Contact from './Contact';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import Checkout from './Checkout';
import { ProductProvider } from './context/Cartcontext';


function App() {
  return (
   <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      </ProductProvider>
    
  );
}

export default App;
