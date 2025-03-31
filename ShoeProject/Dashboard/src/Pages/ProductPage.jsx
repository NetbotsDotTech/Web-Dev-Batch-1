import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { MaterialReactTable } from 'material-react-table'; // Import MRT
import AddProductComponent from '../components/newProductpageComp/AddProductComponent';
import ViewProductById from '../components/newProductpageComp/ViewProductById';
import UpdateProductById from '../components/newProductpageComp/UpdateProductById';
import useProductStore from '../stores/useProductStore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'; // Import axios

const ProductPage = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { products = [], setProducts } = useProductStore();  // Get products and setProducts from store

  useEffect(() => {
    fetchProducts();
  }, [selectedProduct]);

  // Fetch products using axios
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8000/api/product/get');
      // console.log("Fetched Data:", res.data);
      if (res.data && res.data.result) {
        setProducts(res.data.result); // Set products from the API response
      } else {
        console.error("Unexpected response structure:", res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (productId) => {
    setSelectedProduct(products.find((p) => p._id === productId));  // Changed to _id
    setOpenViewDialog(true);
  };

  const handleEdit = (productId) => {
    setSelectedProduct(products.find((p) => p._id === productId));  // Changed to _id
    setOpenUpdateDialog(true);
  };

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/product/del/${productId}`)
        .then((res) => {
          console.log("Deleted product:", res.data);
          fetchProducts();  // Reload products after successful deletion
        });
      setOpenDeleteDialog(false); // Close the dialog after successful deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const columns = [
    {
      header: 'Action',
      // Custom cell with action buttons (View, Edit, Delete)
      Cell: ({ row }) => (
        <>
          <IconButton onClick={() => handleView(row.original._id)} title="View Product">
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => handleEdit(row.original._id)} title="Edit Product">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(row.original._id)} title="Delete Product">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
    {
      header: 'Product',
      accessorFn: (row) => {
        // Handle missing or empty images array
        const images = row?.images ?? [];
        const imageUrl = images.length > 0 ? images[0] : null; // Get the first image
        const productName = row?.productName ?? 'N/A'; // Get product name
  
        return { imageUrl, productName }; // Return both imageUrl and productName
      },
      Cell: ({ cell }) => {
        const { imageUrl, productName } = cell.getValue(); // Destructure the data
  
        const formattedImageUrl = imageUrl?.replace(/\\/g, '/'); // Correct backslashes for URL format
        const fullImageUrl = formattedImageUrl?.startsWith('media/')
          ? `http://localhost:8000/${formattedImageUrl}`
          : formattedImageUrl;

  
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={fullImageUrl || 'https://via.placeholder.com/50'}
              alt={productName}
              width={50}
              height={50}
              style={{ marginRight: 8 }} // Space between image and name
              onError={(e) => e.target.src = "https://via.placeholder.com/50"} // Fallback in case of broken image
            />
            <span>{productName}</span>
          </div>
        );
      },

    },
    {
      header: 'Category',
      accessorKey: 'category', // Ensure 'category' exists in each row
    },
    
    
    {
      header: 'Stock',
      accessorFn: (row) => row?.productSubcategory?.stock, // Access stock from product.productSubcategory
    },
    {
      header: 'Price',
      accessorFn: (row) => row?.productSubcategory?.price, // Access stock from product.productSubcategory
      
    },

    
   
  ];
  
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '185px',
        marginTop: '100px',
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Button
        onClick={() => setOpenAddDialog(true)}
        variant="contained"
        style={{
          marginBottom: '16px',
          alignSelf: 'flex-start',
        }}
      >
        Add New Product
      </Button>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ flex: 1, overflow: 'auto', marginTop: '16px' }}>
          {products.length > 0 ? (
            <MaterialReactTable
              columns={columns}
              data={products}
              enableColumnOrdering
              enableSorting
              enablePagination
              enableColumnFilters
              enableGlobalFilter
              positionGlobalFilter="top"
              style={{
                width: '100%',
                overflow: 'auto',
              }}
            />
          ) : (
            <p>No products available</p>
          )}
        </div>
      )}

      {/* Dialogs for add, view, update, delete */}
      <AddProductComponent
      
      
        open={openAddDialog}
        onClose={() => {
          fetchProducts();  // Fetch products after closing the dialog
          setOpenAddDialog(false);  // Close the AddProductComponent dialog
        }}
      />
      <ViewProductById open={openViewDialog} onClose={() => setOpenViewDialog(false)} product={selectedProduct} />
      <UpdateProductById open={openUpdateDialog} onClose={() =>{
          fetchProducts();  // Fetch products after closing the dialog
         setOpenUpdateDialog(false)}} product={selectedProduct}
         
         />
      
    </div>
  );
};


export default ProductPage;
