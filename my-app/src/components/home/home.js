import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu de Usuario
          </Typography>
          <Button color="inherit" href="Login">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px', marginTop: '60px' }}>
      <h2>Grupo Progra 3</h2>
      <p><strong> + JOSE LEANDRO RUA RAMIREZ + JAVIER ALBERTO GARCIA SOLIS + ARMANDO ALONSO MONTIEL MONTES </strong></p>
  <h3>Guía de métodos para el RestController:</h3>
  <ol>
    <li>
      <p><strong> "/api" (GET):</strong> Descripción: Retorna un saludo simple "Hello, world!".</p>
    </li>
    <li>
      <p><strong> "/api/allUsers" (GET):</strong> Descripción: Retorna una lista de todos los usuarios almacenados en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/allNotes" (GET):</strong> Descripción: Retorna una lista de todas las notas almacenadas en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/Ubyid" (GET):</strong> Descripción: Retorna un usuario específico según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/Nbyid" (GET):</strong> Descripción: Retorna una nota específica según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/UpdateUbyid" (PUT):</strong> Descripción: Actualiza la información de un usuario específico según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/UpdateNbyid" (PUT):</strong> Descripción: Actualiza la información de una nota específica según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/newuser" (POST):</strong> Descripción: Inserta un nuevo usuario en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/newnote" (POST):</strong> Descripción: Inserta una nueva nota en la base de datos.</p>
    </li>
    <li>
      <p><strong> "/api/login" (POST):</strong> Descripción: Autentica a un usuario según el nombre de usuario y la contraseña proporcionados, y genera un token JWT para el usuario autenticado.</p>
    </li>
    <li>
      <p><strong> "/api/DeleteUbyid" (DELETE):</strong> Descripción: Elimina un usuario específico de la base de datos según el ID proporcionado.</p>
    </li>
    <li>
      <p><strong> "/api/DeleteNbyid" (DELETE):</strong> Descripción: Elimina una nota específica de la base de datos según el ID proporcionado.</p>
    </li>
  </ol>
      </div>
    </div>
  );
};
export default App;