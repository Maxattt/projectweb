import React, { useState } from 'react';
import styles from './style.module.css';

interface ProductFormProps {
  onSubmit: (product: { name: string; price: number; image: string }) => void;
  initialData?: { name: string; price: number; image: string };
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [price, setPrice] = useState(initialData?.price || 0);
  const [image, setImage] = useState(initialData?.image || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, price, image });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        required
      />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <button type="submit">{initialData ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
