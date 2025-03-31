import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, IconButton, Chip, Modal, Box, Button, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useAuthStore } from '../context/AuthContext';
import { MaterialReactTable } from 'material-react-table';

const OrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { userId } = useAuthStore();

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/api/purchase/get/${userId}`);
      if (response.data && response.data.detail) {
        setOrders(response.data.detail);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  const renderStatusChip = (status) => {
    if (status === 'Delivered') {
      return <Chip label="Delivered" color="success" icon={<CheckCircleIcon />} />;
    } else if (status === 'In Transit') {
      return <Chip label="In Transit" color="warning" icon={<LocalShippingIcon />} />;
    }
    return <Chip label={status} color="default" />;
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleHideDetails = () => {
    setOpenModal(false);
  };

  const columns = [
    {
      accessorKey: 'viewDetails',
      header: 'Actions',
      Cell: ({ row }) => (
        <Button
          variant="contained"
          color="primary"
          size="smaller"
          onClick={() => handleViewDetails(row.original)}
          sx={{ borderRadius: 10 }}
        >
          View
        </Button>
      ),
      size: 120,
    },
    { accessorKey: 'orderId', header: 'Order ID', size: 80 },
    { accessorKey: 'productName', header: 'Product Name', size: 100 },
    {
      accessorKey: 'orderDate',
      header: 'Order Date',
      Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
      size: 80,
    },
    {
      accessorKey: 'deliveryStatus',
      header: 'Status',
      Cell: ({ cell }) => renderStatusChip(cell.getValue()),
      size: 80,
    },
    { accessorKey: 'price', header: 'Price', size: 80 },
  ];

  const data = orders.flatMap(order => {
    const productsGrouped = order.productDetail.reduce((acc, product) => {
      acc[product._id] = acc[product._id] || { ...product, orderDate: order.others?.orderDate, deliveryStatus: order.others?.deliveryStatus, shippingAddress: `${order.shippingDetail?.address}, ${order.shippingDetail?.city}, ${order.shippingDetail?.state}, ${order.shippingDetail?.country}`, paymentMethod: order.paymentDetail?.method };
      return acc;
    }, {});
    return Object.values(productsGrouped).map(product => ({
      id: product._id,
      orderId: product.orderId,
      productName: product.productname,
      orderDate: product.orderDate,
      deliveryStatus: product.deliveryStatus,
      price: product.price,
      shippingAddress: product.shippingAddress, // Retained for modal view
      quantity: product.quantity,
      paymentMethod: product.paymentMethod, // Payment Method added for modal view
    }));
  });

  return (
    <>
      <Typography variant="h4" sx={{ mb: 4, pt: 3, fontWeight: 'bold', textAlign: 'center' }}>
        Order History
      </Typography>

      {loading ? (
        <Typography variant="h6" color="textSecondary" sx={{ textAlign: 'center' }}>
          Loading orders...
        </Typography>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <MaterialReactTable
            columns={columns}
            data={data}
            enableSorting
            enablePagination
            initialState={{ pagination: { pageIndex: 0, pageSize: 5 } }}
            renderTopToolbarCustomActions={() => (
              <IconButton color="primary" onClick={fetchOrders} aria-label="refresh orders" sx={{ mb: 2 }}>
                <RefreshIcon />
              </IconButton>
            )}
            enableColumnResizing={true}
            enableColumnReordering={true}
            muiTableContainerProps={{
              sx: { maxHeight: '400px' },
            }}
            muiTableBodyCellProps={{
              sx: { py: 1, px: 1.5, fontSize: '0.9rem' },
            }}
          />
        </div>
      )}

      {/* Modal for viewing all products with the same ID */}
      <Modal
        open={openModal}
        onClose={handleHideDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle }}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
            Product Details
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {selectedProduct && (
            <Box sx={{ pl: 2, pr: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Product Name:</strong> {selectedProduct.productName}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Order ID:</strong> {selectedProduct.orderId}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Quantity:</strong> {selectedProduct.quantity}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Price:</strong> {selectedProduct.price} PKR</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Status:</strong> {selectedProduct.deliveryStatus}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Shipping Address:</strong> {selectedProduct.shippingAddress}</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}><strong>Payment Method:</strong> {selectedProduct.paymentMethod}</Typography>
            </Box>
          )}
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Button onClick={handleHideDetails} color="primary" variant="contained" sx={{ width: '100%', mt: 2, fontWeight: 'bold' }}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  width: '90%',
  maxWidth: 500,
  textAlign: 'left'
};

export default OrdersSection;
