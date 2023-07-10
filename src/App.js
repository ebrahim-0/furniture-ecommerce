import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import ProductDetails from "./Component/ProductDetails";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
