import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Product from "./Product";
import Nav from "./Nav";

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

const RouterDemo = () => {
  return (
    <div>
      <h2>React Router Demo</h2>

      <BrowserRouter>
        <Nav />
      
        <Routes>
          <Route path="*" element={<h2>Four oh Four!</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<h2>This is a hidden page</h2>} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default RouterDemo;
