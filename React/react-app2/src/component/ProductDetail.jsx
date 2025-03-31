import { useAppContext } from './ReactContext';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
  const { products, addToCart } = useAppContext();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <select onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">Select Size</option>
        <option value="M">M</option>
        <option value="L">L</option>
        {/* Add more sizes */}
      </select>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
