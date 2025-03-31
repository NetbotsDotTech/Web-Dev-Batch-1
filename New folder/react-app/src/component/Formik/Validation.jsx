// src/validation.js
import * as Yup from 'yup';

export const validationSchema = [
  Yup.object({
    productName: Yup.string().required('Product Name is required').typeError('Product Name must be a string'),
    productDescription: Yup.string().required('Product Description is required').typeError('Product Description must be a string'),
    productPrice: Yup.number().required('Product Price is required').typeError('Product Price must be a number').positive('Price must be positive'),
  }),
  Yup.object({
    customerName: Yup.string().required('Customer Name is required'),
    customerEmail: Yup.string().email('Invalid email format').required('Email is required'),
    customerPhone: Yup.string().required('Phone number is required'),
  }),
  Yup.object({
    accountNumber: Yup.string().required('Account Number is required').matches(/^[0-9]{12}$/, 'Account Number must be 12 digits').typeError('Account Number must be a string'),
    accountHolderName: Yup.string().required('Account Holder Name is required').typeError('Account Holder Name must be a string'),
    accountIFSC: Yup.string().required('IFSC Code is required').length(11, 'IFSC Code must be 11 characters long').typeError('IFSC Code must be a string'),
  }),
];