// src/validationSchema.js
import * as Yup from "yup";

// Initial values for all the steps
export const initialValues = {
  productName: "",
  productPrice: "",
  accountEmail: "",
  accountPassword: "",
  customerName: "",
  customerPhone: "",
};

// Validation schema for each step
export const validationSchema = [
  Yup.object({
    productName: Yup.string().required("Product name is required"),
    productPrice: Yup.number()
      .typeError("Must be a number")
      .required("Product price is required"),
  }),
  Yup.object({
    accountEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    accountPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  }),
  Yup.object({
    customerName: Yup.string().required("Customer name is required"),
    customerPhone: Yup.string().required("Phone number is required"),
  }),
];
