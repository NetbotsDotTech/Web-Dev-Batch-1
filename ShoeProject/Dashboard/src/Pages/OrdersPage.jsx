// src/pages/OrdersPage.js
import React from 'react';
import DataTable from '../components/DataTable';

const OrdersPage = () => {
  const columns = [
    { field: 'id', headerName: 'Order ID', width: 150 },
    { field: 'customer', headerName: 'Customer', width: 200 },
    { field: 'total', headerName: 'Total Amount', width: 150 },
    { field: 'status', headerName: 'Status', width: 130 },
  ];

  const rows = [
    { id: 1, customer: 'Alice', total: '$100', status: 'Shipped' },
    { id: 2, customer: 'Bob', total: '$200', status: 'Pending' },
    // Additional rows
  ];

  return (
    <div>
      <h1>Orders</h1>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
};

export default OrdersPage;
