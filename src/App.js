import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import LookBook from "./pages/LookBook/LookBook";
import Features from "./pages/features/Features";
import { useSelector } from 'react-redux'
import Modal from './components/modal/Modal';
import Cart from "./components/cart/Cart";

function App() {
  const modalVisibility = useSelector(state => state.ui.modelIsVisible)

  return (
    <>
      <Cart visibility={modalVisibility}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
