import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbars';
import Footer from './components/footer';
import Products from './components/product';
import Home from './components/homes';
import CarDetail from "./components/carDetail/CarDetail";
import CarEdit from './components/carEdit/CarEdit';
import CreateCarPage from './components/CreateCarPage';
// import { ImagePreloadeder } from './components/ImagePreloader';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <ImagePreloadeder /> */}
      <div className="wrapper">
      <Routes> 
            <Route path="/"  element={<Home />} />
            <Route path="/products" element={<Products />}/>
            <Route path="/create" element={<CreateCarPage />} />
            <Route path="/products/:id" element={<CarDetail />} />
            <Route path="/products/edit/:id" element={<CarEdit />} />


      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;