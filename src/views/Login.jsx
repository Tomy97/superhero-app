import React, { useState } from 'react'
import { useFormik } from 'formik';

import { FormX, Image } from '../styles-components/Login';
import FormPassword from '../components/Form/FormPassword';
import FormEmail from '../components/Form/FormEmail';
import { Button, Card, CardActions, CardContent, CardHeader, Grid } from '@mui/material'


const Login = () => {
  const [state, setstate] = useState({
    email: '',
    password: ''
  })

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
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
                  <Button type="submit" variant="contained" >Enviar</Button>
                </Grid>
              </CardActions>
            </form>
          </Card>
          {
            state.email && state.password
          }
        </Grid>
      </FormX>
    </Grid >
  )
}

export default Login