import { 
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Select,
  MenuItem,
  Grid,
  Box
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const PersonalInfoForm = () => {
  const initialValues = {
    name: "",
    email: "",
    age: 0,
    gender: "",
    educationLevel: "", // Added educationLevel field
    interests: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer"),
    gender: Yup.string().required("Gender is required"),
    educationLevel: Yup.string().required("Education level is required"), // Validation for educationLevel
    interests: Yup.array().min(1, "At least one interest must be selected"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert(values);
    // You can handle form submission here, like sending data to backend
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={touched.gender && Boolean(errors.gender)}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup name="gender" value={values.gender} onChange={handleChange}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {touched.gender && <FormHelperText>{errors.gender}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={touched.educationLevel && Boolean(errors.educationLevel)}>
                <FormLabel component="legend">Education Level</FormLabel>
                <Select
                  name="educationLevel"
                  value={values.educationLevel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="">Select Education Level</MenuItem>
                  <MenuItem value="school">School</MenuItem>
                  <MenuItem value="college">College</MenuItem>
                  <MenuItem value="graduate">Graduate</MenuItem>
                  <MenuItem value="postgraduate">Post Graduate</MenuItem>
                </Select>
                {touched.educationLevel && <FormHelperText>{errors.educationLevel}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={touched.interests && Boolean(errors.interests)}>
                <FormLabel component="legend">Interests</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="interests" value="sports" onChange={handleChange} />}
                    label="Sports"
                  />
                  <FormControlLabel
                    control={<Checkbox name="interests" value="music" onChange={handleChange} />}
                    label="Music"
                  />
                  <FormControlLabel
                    control={<Checkbox name="interests" value="reading" onChange={handleChange} />}
                    label="Reading"
                  />
                </FormGroup>
                {touched.interests && <FormHelperText>{errors.interests}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
