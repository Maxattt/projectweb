import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../../components/productform/ProductForm';
import styles from './style.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const EditProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    const found = products.find((p) => p.id === Number(id));
    if (found) setProduct(found);
  }, [id]);

  const handleUpdate = (updated: { name: string; price: number; image: string }) => {
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = products.map((p) =>
      p.id === Number(id) ? { ...p, ...updated } : p
    );
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/products');
  };

  return (
    <div className={styles.editProductPage}>
      <h1>Edit Product</h1>
      {product && <ProductForm initialData={product} onSubmit={handleUpdate} />}
    </div>
  );
};

export default EditProduct;
