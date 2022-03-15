import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup';

const validationSchema = yup.object({
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const FormPassword = props => {
  const formik = useFormik({
    initialValues: {
      password: props.password || '',
    },
    validationSchema: validationSchema,
  });
  return (
    <TextField
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
    />
  )
}

FormPassword.propTypes = {
  onChange: PropTypes.func,
}

export default FormPassword