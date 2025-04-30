import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Products, AddProduct, Orders, EditProduct } from './pages';

const App: React.FC = () => (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );

export default App;
