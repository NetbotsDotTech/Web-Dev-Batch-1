import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Divider, FormControl, Select, MenuItem, InputLabel, RadioGroup, Radio, FormControlLabel, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard'; // A component to display individual products
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    brand: ''
  });
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let url = 'https://fakestoreapi.com/products';

      // Modify URL based on selected filters
      if (filters.category) {
        url = `https://fakestoreapi.com/products/category/${filters.category}`;
      } else if (filters.priceRange) {
        url = `https://fakestoreapi.com/products?priceRange=${filters.priceRange}`;
      } else if (filters.brand) {
        // Assuming there's an endpoint or logic for filtering by brand
        url = `https://fakestoreapi.com/products/brand/${filters.brand}`;
      }

      const response = await axios.get(url);
      // Extract only the necessary fields: name, price, and image
      const filteredData = response.data.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      }));
      setProducts(filteredData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    let updatedProducts = [...products];

    // Apply sorting
    if (sortOption === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(updatedProducts);
  }, [sortOption, products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleFilterChange = (event) => {
    setFilters(prevFilters => ({ ...prevFilters, [event.target.name]: event.target.value }));
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  return (
    <Box sx={{ p: 4 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Explore Our Products
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Discover the latest in our collection and find something you'll love.
        </Typography>
      </Box>

      {/* Filters and Sorting */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
            <Typography variant="h6">Filters</Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                defaultValue=""
                onChange={handleFilterChange}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="home">Home Goods</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Price Range</InputLabel>
              <Select
                name="priceRange"
                defaultValue=""
                onChange={handleFilterChange}
              >
                <MenuItem value="">All Prices</MenuItem>
                <MenuItem value="0-50">0-100</MenuItem>
                <MenuItem value="51-100">101 - 500</MenuItem>
                <MenuItem value="101-200">501 - 1000</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h6" sx={{ mt: 3 }}>Brand</Typography>
            <RadioGroup
              name="brand"
              aria-label="brand"
              onChange={handleFilterChange}
            >
              <FormControlLabel value="brandA" control={<Radio />} label="Brand A" />
              <FormControlLabel value="brandB" control={<Radio />} label="Brand B" />
              <FormControlLabel value="brandC" control={<Radio />} label="Brand C" />
            </RadioGroup>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          {/* Sorting Options */}
          <Box sx={{ mb: 4 }}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                defaultValue=""
                onChange={handleSortChange}
              >
                <MenuItem value="">Relevance</MenuItem>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 4 }} />
          {/* Pagination or Load More */}
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary">
              Load More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopPage;
