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

// ... (importaciones)

const Login = () => {
  const [formData, setFormData] = useState({
    usuario: '', // Cambiado de 'username' a 'usuario'
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urlDelApi = "http://localhost:8080/api/login"; // Reemplaza con la URL de tu API

  const callAPIAuthenticate = (event) => {
    event.preventDefault();

    axios
      .post(
        `${urlDelApi}?username=${formData.usuario}&password=${formData.password}`
      )
      .then(function (response) {
        console.log("data", response);
        localStorage.setItem("user", JSON.stringify(response.data));
         window.location.href = "../main/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const reset = () => {
    setFormData({ usuario: '', password: '' });
  };

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

          <form onSubmit={callAPIAuthenticate}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              name="btnIngresar"
            >
              Iniciar Sesion
            </Button>
          </form>

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

export default Login;
