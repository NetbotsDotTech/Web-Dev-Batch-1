// src/store/productStore.js
import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product._id === id ? { ...product, ...updatedProduct } : product
      ),
    })),
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product._id !== id), // Use _id instead of id
  })),
}));

export default useProductStore;
