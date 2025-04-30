import React from 'react';
import styles from './style.module.css';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
