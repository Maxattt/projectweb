// src/pages/AddProduct/AddProduct.tsx
import React, { useState } from 'react';
import ProductForm from '../../components/productform/ProductForm';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const AddProduct: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProduct = (product: { name: string; price: number; image: string }) => {
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...existingProducts, newProduct];

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/products');
  };

  return (
    <div className={styles.addProductPage}>
      <h1>Add New Product</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProduct;
