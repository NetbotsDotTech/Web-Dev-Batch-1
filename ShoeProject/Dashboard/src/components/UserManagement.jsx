// src/components/UserManagement.js
import React from 'react';
import DataTable from './DataTable';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'role', headerName: 'Role', width: 100 },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  // Add more rows dynamically
];

const UserManagement = () => (
  <div style={{marginLeft:"10%"}}>
    <h1>User Management</h1>
    <DataTable columns={columns} rows={rows} />
  </div>
);

export default UserManagement;
