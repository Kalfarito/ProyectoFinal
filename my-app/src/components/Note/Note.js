import React, { useState } from 'react';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './Note.module.css';

const Note = (props) => {
  const urlDelApi = "http://localhost:8080/api/new/Note";

  const [user, setUser] = useState(props.user);
  const [note, setNote] = useState({ UserID: '0', Title: '', Content: '',  token: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickBorrar = (event) => {
    window.location.href = '/Borrar';
  };

  const onClickEditar = (event) => {
    window.location.href = '/Editar';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(
      `${urlDelApi}?UserID=${note.UserID}&Title=${note.Title}&Content=${note.Content}&token=${note.token}`,
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
      .then(response => {
        console.log('Post success');
        console.log('Response: ', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const reset = () => {
    setNote({
      UserID: '',
      title: '',
      content: '',
    });
  };

  return (
    <div className={styles.Perfilpersona} data-testid="Perfilpersona">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit" component={Link} to="./perfilpersona">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="./main">
            Home
          </Button>
          <Button color="inherit" component={Link} to="./login">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

     

      <h1>Perfil: {user?.usuario}</h1>
      <form>
        <TextField
          required
          id="standard-basic-"
          label="UserID"
          variant="standard"
          name="UserID"
          type="text"
          value={note.UserID}
          onChange={handleChange}
        />
        <br />
        <TextField
          required
          id="standard-basic"
          label="Titulo"
          variant="standard"
          name="Titulo"
          type="text"
          value={note.Title}
          onChange={handleChange}
        />
          <TextField
          required
          id="standard-basic"
          label="Contenido"
          variant="standard"
          name="content"
          type="text"
          value={note.Content}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" name="AgregarNota" onClick={handleSubmit}>Agregar</Button>

        <Button variant="contained" name="Cancelar" onClick={reset}>Cancelar</Button>
        <br></br>
        <h2>Eliminar/Editar Nota</h2>
        <Button onClick={onClickBorrar} variant="contained" name="EliminarNota" type="button">Eliminar Nota</Button>
        <Button onClick={onClickEditar} variant="contained" name="EditarNota" type="reset">Editar</Button>

        <br />
      </form>

      <br></br>
    </div>
  );
};

Note.propTypes = {};
Note.defaultProps = {};
export default Note;