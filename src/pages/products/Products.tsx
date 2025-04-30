import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/productcard/ProductCard';
import styles from './style.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(savedProducts);
  }, []);

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className={styles.productsPage}>
      <h1>Products</h1>
      <button className={styles.addProductButton} onClick={() => navigate('/add-product')}>
        Add New Product
      </button>

      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onEdit={() => handleEdit(product.id)}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;