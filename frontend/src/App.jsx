import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import Red from "./pages/Wines/Red";
import White from "./pages/Wines/White";
import Sparkling from "./pages/Wines/Sparkling";
import Rose from "./pages/Wines/Rose";
import Port from "./pages/Wines/Port";
import Dessert from "./pages/Wines/Dessert";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/wines/red' element={<Red />} />
        <Route path='/wines/white' element={<White />} />
        <Route path='/wines/sparkling' element={<Sparkling />} />
        <Route path='/wines/rose' element={<Rose />} />
        <Route path='/wines/port' element={<Port />} />
        <Route path='/wines/dessert' element={<Dessert />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
