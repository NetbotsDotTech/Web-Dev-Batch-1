import React, { useEffect, useMemo, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import { MaterialReactTable } from 'material-react-table'; 

export const AdvancedTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data from the Dummy API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Define Columns
  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
      size: 50,
      enableSorting: true,
      enableColumnResizing: true,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      size: 150,
      enableSorting: true,
      enableColumnResizing: true,
    },
    {
      accessorKey: 'username',
      header: 'Username',
      size: 150,
      enableSorting: true,
      enableColumnResizing: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      size: 200,
      enableSorting: true,
      enableColumnResizing: true,
      enableEditing: true,
    },
    {
      accessorKey: 'phone',
      header: 'Phone',
      size: 150,
      enableSorting: true,
      enableColumnResizing: true,
      enableEditing: true,
    },
    {
      accessorKey: 'website',
      header: 'Website',
      size: 150,
      enableSorting: true,
      enableColumnResizing: true,
      enableEditing: true,
    },
    {
      accessorKey: 'company.name',
      header: 'Company',
      size: 200,
      enableSorting: true,
      enableColumnResizing: true,
    },
  ], []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
        Advanced Data Table
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableSorting={true}
        enableFilters={true}
        enablePagination={true}
        enableRowSelection={true}
        enableRowExpansion={true}
        enableColumnResizing={true}
        enableGlobalFilter={true}
        enableStickyHeader={true}
        enableEditing={true}
        enableGrouping={true}
        enableRowVirtualization={true}
        renderDetailPanel={({ row }) => (
          <Box>
            <Typography variant="body2">
              <strong>Address:</strong> {`${row.original.address.street}, ${row.original.address.city}`}
            </Typography>
            <Typography variant="body2">
              <strong>Company:</strong> {row.original.company.name}
            </Typography>
          </Box>
        )}
        muiTableContainerProps={{
          sx: { maxHeight: '600px' },
        }}
        muiTableBodyCellProps={{
          sx: {
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            color: '#000',
          },
        }}
        initialState={{
          sorting: [{ id: 'name', desc: false }],
          pagination: { pageSize: 5, pageIndex: 0 },
          columnVisibility: { id: false },
        }}
      />
    </Box>
  );
};


