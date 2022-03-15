import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import FormPassword from '../components/Form/FormPassword';

import { FormX, Image } from '../styles-components/image';
import styled from 'styled-components'


const Login = () => {
  const formik = useFormik({
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container>
      <Image />
      <FormX>
        <Grid item xs={12} md={6}>
          <Card sx={{ width: '100%' }}  >
            <CardHeader title="Formulario de Login" style={{ textAlign: 'center' }} />
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
              </form>
              <FormPassword />
            </CardContent>
          </Card>
        </Grid>
      </FormX>
    </Grid >
  )
}

export default Login