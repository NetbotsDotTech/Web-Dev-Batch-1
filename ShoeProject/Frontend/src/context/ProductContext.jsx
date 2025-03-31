import { create } from 'zustand';
import axios from 'axios';

export const useProductStore = create((set, get) => ({
  products: [],
  
  // Action to fetch products from backend with optional size (number) and color (string) query parameters
  fetchData: async (size = null, color = '') => {

    try {
      // console.log("color is",color,"size is",size)
      // Construct query parameters based on size and color
      const query = new URLSearchParams();
      if (size !== null) query.append('size', size.toString()); // Ensure size is a string for the query
      if (color) query.append('color', color);

      const response = await axios.get(`http://localhost:8000/api/product/get?${query.toString()}`);
      set({ products: response.data });
      // console.log("Fetched products:", response.data.result);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },

  // Other actions if needed
  setProducts: (newProducts) => set({ products: newProducts }),
}));
