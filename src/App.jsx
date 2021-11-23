import './App.css';
import Navbar from './components/navbars';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Products from './components/product';
import Home from './components/homes';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
            <Route path="/"  element={<Home />} />
            <Route path="/products" element={<Products />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;