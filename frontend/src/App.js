import "./App.css";
import Header from "./components/Head/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:title" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
