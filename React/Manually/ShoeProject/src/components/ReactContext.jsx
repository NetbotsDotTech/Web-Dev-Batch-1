import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const addToCart = (product) => {
    console.log('I am coming ',product)
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,selectedProduct, setSelectedProduct}}>
      {children}
    </CartContext.Provider>
  );
};
