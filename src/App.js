import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import "./css/main.css";

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/mentions-legales" element={<Mentions/>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}
export default App;
