import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { Box, TextField, Button, Grid, Card, CardContent, CardMedia, Typography, Tooltip, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useProductStore } from '../context/ProductContext';

const Search = () => {
  const { products } = useProductStore();
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const searchItem = products.result;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter products based on the query
    const results = searchItem.filter(product =>
      product.category.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(results);
    setSubmitted(true); // Mark form as submitted
  };

  const handleClear = () => {
    // Clear the search query when X icon is clicked
    setQuery('');
  };

  return (
    <Box sx={{ padding: { xs: '40px', sm: '80px' }, maxWidth: '1200px', margin: 'auto', backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      
      {/* Search for Products Title */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', mb: 2, textAlign: 'left' }}>
        Search for Products
      </Typography>

      {/* Search Input */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search product on the basis of category (men, women, kids)"
          sx={{
            width: '70%',
            borderRadius: '50px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              query && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear}>
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              )
            ),
          }}
        />
      </Box>

      {/* Display filtered products as cards in zig-zag form */}
      <Grid container spacing={4}>
        {filteredProducts.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', // Zig-zag effect
            }}
          >
            <Card
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 3,
                boxShadow: 5,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
              }}
            >
              <Tooltip title={product.productName} placement="top" arrow>
                <CardMedia
                  component="img"
                  height="220"
                  image={product.images[0]}
                  alt={product.productName}
                  sx={{ borderRadius: 3 }}
                />
              </Tooltip>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.productDescription}
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
                  Price: {product.Subcategory.price.toLocaleString()} PKR
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* No Results Handling */}
      {filteredProducts.length === 0 && submitted && (
        <Typography variant="h6" color="error" align="center" sx={{ mt: 4 }}>
          No products found for "{query}"
        </Typography>
      )}

      {/* Display item quantity after search */}
      {submitted && filteredProducts.length > 0 && (
        <Typography variant="body2" align="left" sx={{ mt: 2 }}>
          {filteredProducts.length} item(s) available for "{query}"
        </Typography>
      )}
    </Box>
  );
};

export default Search;
