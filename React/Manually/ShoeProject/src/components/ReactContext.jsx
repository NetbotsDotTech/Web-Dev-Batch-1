import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setSelectedProduct(product); // Set the selected product
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, selectedProduct,cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};
