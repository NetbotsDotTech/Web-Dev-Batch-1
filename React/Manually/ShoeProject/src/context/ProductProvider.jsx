import React, { createContext, useState } from 'react';

// Create a context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Initial product data
  const initialProducts = [
    {
      id: 1,
      title: 'Running Shoes',
      price: '5000 PKR',
      images: ['card11', 'card12', 'card13', 'card14'],
      availableSizes: ['5', '6', '7', '8', '9', '10'],
      color: 'Red',
      category: 'Young',
    },
    // Add more products as needed
  ];

  const [products] = useState(initialProducts); // Products to display
  const [cartItems, setCartItems] = useState([]); // Cart items
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for details
  const [selectedSize, setSelectedSize] = useState(null); // Selected size for the product

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        // If product is already in the cart, increase the quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If not in cart, add to cart with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to select a product
  const selectProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null); // Reset selected size when a new product is selected
  };

  // Function to set the selected size
  const selectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        selectedProduct,
        selectProduct,
        selectSize,
        selectedSize,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
