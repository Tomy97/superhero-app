import { Button, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import FormPassword from '../components/Form/FormPassword';

import { FormX, Image } from '../styles-components/Login';
import FormEmail from '../components/Form/FormEmail';


const Login = () => {
  const formik = useFormik({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid container>
      <Image />
      <FormX>
        <Grid item xs={12} md={6}>
          <Card sx={{ width: '100%' }}  >
            <CardHeader title="Formulario de Login" style={{ textAlign: 'center' }} />
            <form onSubmit={formik.handleSubmit}>
              <CardContent>
                <Grid item xs={12} style={{ marginBottom: '20px' }} >
                  <FormEmail />
                </Grid>
                <Grid item xs={12} >
                  <FormPassword />
                </Grid>
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained">Enviar</Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </FormX>
    </Grid >
  )
}

export default Login