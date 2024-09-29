import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Menu from './components/menus/menu';
import Reservations from './components/pages/Reservations';
import Header from './components/Header'; 
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="*" element={<Home />} /> {/* Fallback to Home */}
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;

