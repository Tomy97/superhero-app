import React from 'react'
import PropTypes from 'prop-types'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

const validationSchema = yup.object({
  email: yup.string().
    email('Invalid email').
    required('Required')
});

const FormEmail = props => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
  });
  return (
    <TextField
      fullWidth
      id="email"
      name="email"
      type="email"
      label="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
    />
  )
}

FormEmail.propTypes = {}

export default FormEmail