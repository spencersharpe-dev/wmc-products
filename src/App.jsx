import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import Partner from './Partner';
import About from './About';
import Products from './Products';
import Vendors from './Vendors';
import Locations from './Locations';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}
