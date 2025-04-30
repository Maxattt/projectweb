import React from 'react';
import ProductCard from '../productcard/ProductCard';

interface ProductListProps {
  products: { id: string, name: string, price: number, image: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onEdit={() => onEdit(product.id)}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
