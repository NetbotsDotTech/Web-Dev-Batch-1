import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box, Button, TextField, Container, Typography } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const validationSchema = ()=>{ Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  username: Yup.string().required("Username is required"),
});
}
const data = [
  { firstName: "John", lastName: "Doe", username: "john_doe" },
  { firstName: "Jane", lastName: "Smith", username: "jane_smith" },
];

const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
];

const TablePage = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        User Table
      </Typography>

      <Formik
        initialValues={{ firstName: "", lastName: "", username: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display="flex" gap={2} mb={2}>
              <Field
                as={TextField}
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <Field
                as={TextField}
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <Field
                as={TextField}
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection
        enableColumnOrdering
        enablePagination
        muiTableContainerProps={{ sx: { maxHeight: "500px" } }}
      />
    </Container>
  );
};
