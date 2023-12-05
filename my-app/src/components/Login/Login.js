import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
  });


  const mockUser = {
    usuario: 'admin',
    password:'admin',
    };

  

  const callAPMockUsers = (event) => {
    setFormData(mockUser);
    setFormData([...mockUser]);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urlDelApi = "http://localhost:8080/api/allUsers";

  const callAPIAuthenticate = (event) => {
    const data = formData;
    console.log("data");
    axios
      .get(
        `${urlDelApi}/users?filter=Nombre_Usuario,eq,${formData.usuario,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        }&filter=Contraseña,eq,${formData.password,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }}`
      
        )
      .then(function (response) {
        // handle success
        console.log("data", response.data.records);
       localStorage.setItem("user",JSON.stringify(response.data.records[0]));
       window.location.href="../main/"
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
       
      });
  };

  const onClickBtn = () => {
    console.log("click", formData);

    if (
      mockUser.usuario === formData.usuario &&
      mockUser.password === formData.password
    ) {
      console.log("Usuario correcto");
      
     window.location.href="../main/"
    } else {
      console.log("Usuario incorrecto");
      alert("Ingrese un usuario y contraseña validos para continuar")
    }
    
  };

  const reset = () =>{
    setFormData(''); 
  }
  const defaultTheme = createTheme();
  
  


  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
            margin="normal"
            required
            fullWidth
            name="usuario"
            label="Usuario"
            type="text"
            id="standard-basic"
            value={formData.usuario}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar cuenta"
          />

          <Button type="submit" fullWidth variant="contained" 
          sx={{ mt: 3, mb: 2 }} name="btnIngresar" 
          onClick={onClickBtn}>Iniciar Sesion
          </Button>
     
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="SignUp" variant="body2">
                {"No tienes cuenta? Crea una!"}
              </Link>
            </Grid>
          </Grid>
      </Box>
    </Container>
  </ThemeProvider>
    
  );
};

Login.propTypes = {};

export default Login;

