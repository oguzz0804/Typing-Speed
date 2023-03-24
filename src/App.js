import React from "react";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
