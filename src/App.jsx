import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Partner from './Partner';
import About from './About';
import Products from './Products';
import Vendors from './Vendors';
import Locations from './Locations';

export default function App() {
  return (
    <BrowserRouter>
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
