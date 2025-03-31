// src/components/DataTable.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ columns, rows }) => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
);

export default DataTable;
