import { createContext, useState } from 'react';

// Create a Context
const ProductContext = createContext();

// Create a Provider component
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState(['basit']);

  const addToCart = (newproduct) => {
    setCart([newproduct]);
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for accessing context
export {ProductContext}