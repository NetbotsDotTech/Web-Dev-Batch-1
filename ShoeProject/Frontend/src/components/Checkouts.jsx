// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Checkbox,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import {useCartStore} from '../context/CartContext'


// // Steps for checkout
// const steps = ['Shipping Information', 'Payment Information', 'Confirmation'];

// // Initial form values
// const initialValues = {
//   shipping: {
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     phone: '',
//     email: '',
//     shippingMethod: 'standard',
//   },
//   payment: {
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//     cardHolderName: '',
//     billingAddressSame: true,
//     amount: '', // New field for amount
//     paymentMethod: 'credit', // Default value for payment method
//   },

// };

// // Validation schema
// const validationSchema = [
//   Yup.object({
//     shipping: Yup.object().shape({
//       name: Yup.string().required('Name is required').matches(/^[a-zA-Z\s]*$/, 'Name should contain only letters'),
//       address: Yup.string().required('Address is required'),
//       city: Yup.string().required('City is required'),
//       state: Yup.string().required('State is required'),
//       postalCode: Yup.string()
//         .required('Postal Code is required')
//         .matches(/^[0-9]{5}$/, 'Postal Code must be exactly 5 digits'),
//       phone: Yup.string()
//         .required('Phone number is required')
//         .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
//       email: Yup.string().email('Invalid email format').required('Email is required'),
//       shippingMethod: Yup.string().required('Shipping method is required'),
//     }),
//   }),
//   Yup.object({
//     payment: Yup.object().shape({
//     cardNumber: Yup.string()
//       .required('Card number is required')
//       .matches(/^[0-9]{16}$/, 'Card number must be exactly 16 digits'),
//     expiryDate: Yup.string()
//       .required('Expiry date is required')
//       .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiry date must be in MM/YY format'),
//     cvv: Yup.string()
//       .required('CVV is required')
//       .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
//     cardHolderName: Yup.string().required('Cardholder name is required').matches(/^[a-zA-Z\s]*$/, 'Cardholder name should contain only letters'),
//     amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
//     paymentMethod: Yup.string().required('Payment method is required'),
//     }),
//   }),
// ];

// const Checkout = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false);
//   const {clearCart}=useCartStore();
//   const navigate = useNavigate();
//   // console.log("cart in checkout",cart)

//   const handleSubmit = async (values) => {
//     if (activeStep === steps.length - 1) {
//       setLoading(true);
//       setTimeout(() => {
//         console.log('Order submitted:', values);
//         setOpenModal(true);
//         setLoading(false);
//       }, 2000);
//     } else {
//       setActiveStep((prevStep) => prevStep + 1);
//     }
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleContinueShopping = () => {
//     navigate('/service');
//     setOpenModal(false);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema[activeStep]}
//       onSubmit={handleSubmit}
//     >
//       {({ values, setFieldTouched, errors, touched }) => (
//         <Form>
//           <Box sx={{ padding: 3 }}>
//             <Typography variant="h4" gutterBottom>
//               Checkout
//             </Typography>

//             <Stepper activeStep={activeStep} alternativeLabel>
//               {steps.map((label) => (
//                 <Step key={label}>
//                   <StepLabel>{label}</StepLabel>
//                 </Step>
//               ))}
//             </Stepper>

//             <Box sx={{ marginTop: 2 }}>
//               {activeStep === 0 && <ShippingInformation setFieldTouched={setFieldTouched} errors={errors} touched={touched} />}
//               {activeStep === 1 && <PaymentInformation setFieldTouched={setFieldTouched} errors={errors} touched={touched} />}
//               {activeStep === 2 && <Confirmation values={values} />}

//               <Box sx={{ marginTop: 3 }}>
//                 <Button
//                   variant="contained"
//                   onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
//                   disabled={activeStep === 0}
//                   sx={{ marginRight: 2 }}
//                 >
//                   Back to Cart
//                 </Button>
//                 <Button onClick={()=>clearCart()} variant="contained" type="submit" disabled={loading} sx={{ marginLeft: "70%" }}>
//                   {loading ? (
//                     <CircularProgress size={24} />
//                   ) : activeStep < steps.length - 1 ? (
//                     'Continue to Payment'
//                   ) : (
//                     'Place Order'
                    
//                   )}
//                 </Button>
//               </Box>
//             </Box>
//           </Box>

//           {/* Success Modal */}
//           <Dialog open={openModal} onClose={handleCloseModal}>
//             <DialogTitle>Order Successful</DialogTitle>
//             <DialogContent>
//               <Typography variant="body1">
//                 Congratulations! Your order has been placed successfully.
//               </Typography>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleContinueShopping} color="primary">
//                 Continue Shopping
//               </Button>
//               <Button onClick={handleCloseModal} color="primary">
//                 Close
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Shipping Information Component
// // Shipping Information Component
// const ShippingInformation = ({ setFieldTouched, errors, touched }) => (
//   <Box sx={{ width: '90%', textAlign: 'center' }}>
//     <Typography variant="h6" sx={{ textAlign: 'center' }}>Shipping Information</Typography>
//     <Box sx={{ textAlign: 'center', marginLeft: '20%', marginRight: '10%' }}>
//       {Object.keys(initialValues.shipping).map((key) => (
//         <Field
//           key={key}
//           name={`shipping.${key}`}
//           as={TextField}
//           label={key.charAt(0).toUpperCase() + key.slice(1)}
//           fullWidth
//           margin="normal"
//           onBlur={() => setFieldTouched(`shipping.${key}`)}
//           error={touched.shipping?.[key] && Boolean(errors.shipping?.[key])}
//           helperText={touched.shipping?.[key] && <ErrorMessage name={`shipping.${key}`} />}
//           sx={{
//             '& .MuiInputBase-root': {
//               backgroundColor: '#fff',
//             },
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: 'primary.main', // Default border color
//               },
//               '&.Mui-error fieldset': {
//                 borderColor: 'red', // Error border color
//               },
//               '&.Mui-success fieldset': {
//                 borderColor: 'green', // Success border color
//               },
//             },
//             '& .MuiFormHelperText-root': {
//               color: 'red',
//             },
//           }}
//         />
//       ))}
//     </Box>
//     <FormControl component="fieldset">
//       <Field name="shipping.shippingMethod">
//         {({ field }) => (
//           <RadioGroup row {...field}>
//             <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
//             <FormControlLabel value="express" control={<Radio />} label="Express Shipping" />
//           </RadioGroup>
//         )}
//       </Field>
//     </FormControl>
//   </Box>
// );

// // Payment Information Component
// const PaymentInformation = ({ setFieldTouched, errors, touched }) => (
//   <Box sx={{ width: '90%', textAlign: 'center' }}>
//     <Typography variant="h6">Payment Information</Typography>
//     <Box sx={{ textAlign: 'center', marginLeft: '20%', marginRight: '10%' }}>
//       {Object.keys(initialValues.payment).map((key) => {
//         // Render additional fields for amount and payment method
//         if (key === 'amount') {
//           return (
//             <Field
//               key={key}
//               name={`payment.${key}`}
//               as={TextField}
//               label="Amount"
//               type="number" // Set type to number
//               fullWidth
//               margin="normal"
//               onBlur={() => setFieldTouched(`payment.${key}`)}
//               error={Boolean(touched.payment?.[key]) && Boolean(errors.payment?.[key])}
//               helperText={touched.payment?.[key] ? <ErrorMessage name={`payment.${key}`} /> : ''}
//               sx={{
//                 '& .MuiInputBase-root': {
//                   backgroundColor: '#fff',
//                 },
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'primary.main',
//                   },
//                   '&.Mui-error fieldset': {
//                     borderColor: 'red',
//                   },
//                   '&.Mui-success fieldset': {
//                     borderColor: 'green',
//                   },
//                 },
//                 '& .MuiFormHelperText-root': {
//                   color: 'red',
//                 },
//               }}
//             />
//           );
//         }

//         if (key === 'paymentMethod') {
//           return (
//             <FormControl component="fieldset" key={key}>
//               <Field name={`payment.${key}`}>
//                 {({ field }) => (
//                   <RadioGroup row {...field}>
//                     <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
//                     <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
//                     <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
//                   </RadioGroup>
//                 )}
//               </Field>
//               <Typography variant="caption" color="error">
//                 {touched.payment?.[key] && errors.payment?.[key]}
//               </Typography>
//             </FormControl>
//           );
//         }

//         return (
//           <Field
//             key={key}
//             name={`payment.${key}`}
//             as={TextField}
//             label={key.charAt(0).toUpperCase() + key.slice(1)}
//             fullWidth
//             margin="normal"
//             onBlur={() => setFieldTouched(`payment.${key}`)}
//             error={Boolean(touched.payment?.[key]) && Boolean(errors.payment?.[key])}
//             helperText={touched.payment?.[key] ? <ErrorMessage name={`payment.${key}`} /> : ''}
//             sx={{
//               '& .MuiInputBase-root': {
//                 backgroundColor: '#fff',
//               },
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: 'primary.main',
//                 },
//                 '&.Mui-error fieldset': {
//                   borderColor: 'red',
//                 },
//                 '&.Mui-success fieldset': {
//                   borderColor: 'green',
//                 },
//               },
//               '& .MuiFormHelperText-root': {
//                 color: 'red',
//               },
//             }}
//           />
//         );
//       })}
//     </Box>
//   </Box>
// );



// // Confirmation Component
// const Confirmation = ({ values }) => {
//   const {cart}=useCartStore();
//   console.log("cart in confirmation",cart)
//   return(
//     <Box sx={{ width: '90%', textAlign: 'center' }}>
//     <Typography variant="h6">Order Summary</Typography>
//     <Box sx={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%', marginTop: '2rem' }}>
//       <Typography variant="h6">Shipping Information:</Typography>
//       {Object.keys(values.shipping).map((key) => (
//         <Typography key={key}>
//           {key.charAt(0).toUpperCase() + key.slice(1)}: {values.shipping[key]}
//         </Typography>
//       ))}
//       <Typography variant="h6" sx={{ marginTop: '1rem' }}>Payment Information:</Typography>
//       {Object.keys(values.payment).map((key) => (
//         <Typography key={key}>
//           {key.charAt(0).toUpperCase() + key.slice(1)}: {values.payment[key]}
//         </Typography>
//       ))}
//        <Typography variant="h6" sx={{ marginTop: '1rem' }}>Product Details:</Typography>
//         {cart && cart.items && cart.items.length > 0 ? (
//           cart.items.map((item, index) => {
//             const {
//               productName,
//               price,
//               quantity,
//               color,
//               size,
//               productDescription,
//             } = item;

//             return (
//               <Box key={index} sx={{ marginTop: '1rem' }}>
//                 <Typography>Product Name: {productName}</Typography>
//                 <Typography>Description: {productDescription}</Typography>
//                 <Typography>Color: {color}</Typography>
//                 <Typography>Size: {size}</Typography>
//                 <Typography>Price: {price} PKR</Typography>
//                 <Typography>Quantity: {quantity}</Typography>
//                 <Typography>Total: {price * quantity} PKR</Typography>
//               </Box>
//             );
//           })
//         ) : (
//           <Typography>No items in cart.</Typography>
//         )}
//     </Box>
//   </Box>
//   )
// };

// export default Checkout;
