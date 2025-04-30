import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className={styles.nav}>
    <Link to="/home">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/add-product">Add Product</Link>
    <Link to="/orders">Orders</Link>
  </nav>
);

export default Navbar;
