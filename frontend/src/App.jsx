import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Orders from "./pages/Orders.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Searchbar from "./components/Searchbar.jsx";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/Verify.jsx";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/profile" element={<div>My Profile</div>} />
        <Route path="/privacy-policy" element={<div>Privacy Policy</div>} />
        <Route
          path="/terms-and-conditions"
          element={<div>Terms and Conditions</div>}
        />
        <Route
          path="/cancellation-and-refund"
          element={<div>Cancellation and Refund</div>}
        />
        <Route
          path="/shipping-and-delivery"
          element={<div>Shipping and Delivery</div>}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
