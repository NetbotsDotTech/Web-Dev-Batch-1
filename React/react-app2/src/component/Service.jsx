import { useState,useContext } from 'react';
import { ProductContext } from './CartContext';

const Service = () => {
  const {cart}=useContext(ProductContext)
  // const { products } = ProductContext();
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // Filtering Logic
  // const filterProducts = (size) => {
  //   setFilteredProducts(products.filter(product => product.size === size));
  // };

  return (
    // <div className="service-page">
    //   <div className="filters">
    //     <h3>Filter by Size</h3>
    //     <button onClick={() => filterProducts('M')}>M</button>
    //     {/* Add more filter buttons */}
    //   </div>

    //   <div className="product-grid">
    //     {filteredProducts.map(product => (
    //       <Cart key={product.id} {...product} />
    //     ))}
    //   </div>
    // </div>
    <div>
      <h1>user:{cart}</h1>
    </div>
  );
};

export default Service;
