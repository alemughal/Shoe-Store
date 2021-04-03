import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import ProductItem from './Components/ProductItem/ProductItem';
import Error from './Components/Error/Error';
import NavBar from './Components/NavBar/NavBar';


function RouteConfig() {
  return(
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouteConfig;