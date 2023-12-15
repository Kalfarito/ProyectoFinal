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
            Manual de Usuario
          </Typography>
          <Button color="inherit" href="Login">Login</Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px', marginTop: '60px' }}>
      <h2>Grupo Progra 3</h2>
<p><strong> + JOSE LEANDRO RUA RAMIREZ + JAVIER ALBERTO GARCIA SOLIS + ARMANDO ALONSO MONTIEL MONTES </strong></p>
<h3>Guía de métodos para el RestController:</h3>
<p>
            "/api" (GET): Descripción: Retorna un saludo simple "Hello, world!".
</p>
<p>
            "/api/allUsers" (GET): Descripción: Retorna una lista de todos los usuarios almacenados en la base de datos.
</p>
<p>
            "/api/allNotes" (GET): Descripción: Retorna una lista de todas las notas almacenadas en la base de datos.
</p>
<p>
            "/api/Ubyid" (GET): Descripción: Retorna un usuario específico según el ID proporcionado.
</p>
<p>
            "/api/Nbyid" (GET): Descripción: Retorna una nota específica según el ID proporcionado.
</p>
<p>
            "/api/UpdateUbyid" (PUT): Descripción: Actualiza la información de un usuario específico según el ID proporcionado.
</p>
<p>
            "/api/UpdateNbyid" (PUT): Descripción: Actualiza la información de una nota específica según el ID proporcionado.
</p>
<p>
            "/api/newuser" (POST): Descripción: Inserta un nuevo usuario en la base de datos.
</p>
<p>
            "/api/newnote" (POST): Descripción: Inserta una nueva nota en la base de datos.
</p>
<p>
            "/api/login" (POST): Descripción: Autentica a un usuario según el nombre de usuario y la contraseña proporcionados, y genera un token JWT para el usuario autenticado.
</p>
<p>
            "/api/DeleteUbyid" (DELETE): Descripción: Elimina un usuario específico de la base de datos según el ID proporcionado.
</p>
<p>
            "/api/DeleteNbyid" (DELETE): Descripción: Elimina una nota específica de la base de datos según el ID proporcionado.
</p>
<h2>Grupo Progra 4</h2>
<p><strong> + kEYLOR ALFARO MENA + ANTHONNY MONTOYA CHAVARRIA + JOSE CERDAS HERNANDEZ + FABIANA SANCHEZ CERVANTES + SEBASTIAN BARZUNA GARZA </strong></p>
<h3>Guía de métodos para el FrontEnd:</h3>
<p>
            "/api/note" (POST): Descripción: Envia los datos de la nota.
</p>
<p>
            "/api/Login" (POST): Descripción: Envia datos del login a la BD.
</p>
<p>
            "/api/note" (GET): Descripción: Optiene datos de la nota del usuario.
</p>
<p>
            "/api/note" (DELETE): Descripción: Elimina nota creada.
</p>
</div>
</div>
  );
};
export default App;