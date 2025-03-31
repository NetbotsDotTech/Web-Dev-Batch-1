import {create} from 'zustand';

export const useCartStore = create((set) => ({
  cart: [], // Initialize cart as empty
  userId: null, // Initialize userId as null

  // Add item to the cart
  addItem: (product, quantity,userId) => set((state) => {
    console.log("userId from ",userId)
    const existingItem = state.cart.find((item) => item._id === product._id); // Change 'id' to the correct property
    set({userId: userId}) 
  
    if (existingItem) {
      // If item exists, update the quantity
      return {
        cart: state.cart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
        ),
      };
    } else {
      // If it doesn't exist, add the new item with the quantity
      return {
        cart: [...state.cart, { ...product, quantity }], // Ensure that 'product' contains all necessary fields
      };
    }
  }),
  

  // Edit an item in the cart by ID
  editItem: (updatedItem) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    ),
  })),

  // Delete an item from the cart by ID
  deleteItem: (id) => set((state) => ({
    cart: state.cart.filter((item) => item._id !== id),
  })),

  // Clear the cart
  clearCart: () => set({ cart: [] }),
}));


