// src/components/ContentManagement.js
import React, { useState } from 'react';
import {
  TextField,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, align: 'center' },
  { field: 'name', headerName: 'Shoe Name', width: 200, align: 'center' },
  { field: 'price', headerName: 'Price (PKR)', width: 120, align: 'center', type: 'number' },
  { field: 'category', headerName: 'Category', width: 150, align: 'center' },
  { field: 'actions', headerName: 'Actions', width: 100, align: 'center' },
];

const initialRows = [
  { id: 1, name: 'Running Shoe', price: 120, category: 'Sports' },
  { id: 2, name: 'Casual Shoe', price: 80, category: 'Casual' },
  { id: 3, name: 'Formal Shoe', price: 150, category: 'Formal' },
  { id: 4, name: 'Hiking Boot', price: 200, category: 'Outdoor' },
];

const ContentManagement = () => {
  const [rows, setRows] = useState(initialRows);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [editRow, setEditRow] = useState(null);
  const [newShoe, setNewShoe] = useState({ name: '', price: '', category: '' });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const filteredRows = rows.filter((row) => {
    const query = searchQuery.toLowerCase();
    return (
      row.name.toLowerCase().includes(query) ||
      row.price.toString().includes(query) ||
      row.category.toLowerCase().includes(query)
    );
  });

  const sortedRows = [...filteredRows].sort((a, b) => {
    if (b[orderBy] < a[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (b[orderBy] > a[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditRow = (row) => {
    setEditRow(row);
    setNewShoe(row); // Pre-fill form for editing
  };

  const handleDeleteClick = (row) => {
    setRowToDelete(row);
    setOpenDeleteDialog(true);
  };

  const confirmDelete = () => {
    setRows(rows.filter((row) => row.id !== rowToDelete.id));
    setOpenDeleteDialog(false);
    setRowToDelete(null);
    setSnackbarMessage('Shoe deleted successfully!');
    setOpenSnackbar(true);
  };

  const cancelDelete = () => {
    setOpenDeleteDialog(false);
    setRowToDelete(null);
  };

  const handleAddNewShoe = () => {
    if (!newShoe.name || !newShoe.price || !newShoe.category) {
      setSnackbarMessage('All fields are required!');
      setOpenSnackbar(true);
      return;
    }
    const newId = rows.length ? Math.max(rows.map(row => row.id)) + 1 : 1;
    setRows([...rows, { id: newId, ...newShoe }]);
    setNewShoe({ name: '', price: '', category: '' });
    setSnackbarMessage('Shoe added successfully!');
    setOpenSnackbar(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShoe({ ...newShoe, [name]: value });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f4f6f8',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '100%',
        marginTop: '20px',
        marginLeft:"100px"
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontFamily: 'Poppins, sans-serif',
          color: '#333',
          textAlign: 'center',
          mb: 3,
        }}
      >
        Content Management
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <TextField
          label="Search Shoes"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton color="primary" onClick={handleAddNewShoe}>
          <AddIcon />
        </IconButton>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} align={column.align}>
                  {column.headerName === 'Actions' ? (
                    column.headerName
                  ) : (
                    <TableSortLabel
                      active={orderBy === column.field}
                      direction={orderBy === column.field ? order : 'asc'}
                      onClick={() => handleRequestSort(column.field)}
                    >
                      {column.headerName}
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.field} align={column.align}>
                      {column.field === 'actions' ? (
                        <Box>
                          <IconButton color="primary" onClick={() => handleEditRow(row)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="secondary" onClick={() => handleDeleteClick(row)}>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      ) : (
                        row[column.field]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={cancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the shoe "{rowToDelete?.name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for feedback */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Add New Shoe Form */}
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Add New Shoe
        </Typography>
        <TextField
          label="Shoe Name"
          variant="outlined"
          name="name"
          value={newShoe.name}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px', width: 'calc(50% - 10px)' }}
        />
        <TextField
          label="Price (PKR)"
          variant="outlined"
          type="number"
          name="price"
          value={newShoe.price}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px', width: 'calc(50% - 10px)' }}
        />
        <TextField
          label="Category"
          variant="outlined"
          name="category"
          value={newShoe.category}
          onChange={handleInputChange}
          sx={{ marginBottom: '10px', width: 'calc(50% - 10px)' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNewShoe}
          sx={{ marginTop: '10px' }}
        >
          Add Shoe
        </Button>
      </Box>
    </Box>
  );
};

export default ContentManagement;
