import React, { useState } from 'react';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styles from './Note.module.css';

const Note = (props) => {
  const urlDelApi = "http://localhost:8080/api/new/Note";

  const [user, setUser] = useState(props.user);
  const [note, setNote] = useState({ UserID: '0', Title: '', Content: '', token: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
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
      Title: '',
      Content: '',
    });
  };

  return (
    <div className={styles.Perfilpersona} data-testid="Perfilpersona" style={{ textAlign: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit" component={Link} to="./prueba">
            
          </Button>
          <Button color="inherit" component={Link} to="./main">
            
          </Button>
          <Button color="inherit" component={Link} to="./login">
            
          </Button>
        </Toolbar>
      </AppBar>

      <h1>Perfil: {user?.usuario}</h1>

      <form style={{ margin: '20px', maxWidth: '400px', margin: 'auto' }}>
        <TextField
          required
          fullWidth
          id="standard-basic-"
          label="UserID"
          variant="standard"
          name="UserID"
          type="text"
          value={note.UserID}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          id="standard-basic"
          label="Titulo"
          variant="standard"
          name="Title"
          type="text"
          value={note.Title}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          multiline
          rows={4}
          id="standard-basic"
          label="Contenido"
          variant="standard"
          name="Content"
          type="text"
          value={note.Content}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          name="AgregarNota"
          onClick={handleSubmit}
          style={{ marginTop: '20px', marginRight: '10px' }}
        >
          Agregar
        </Button>
        <Button
          variant="contained"
          name="Cancelar"
          onClick={reset}
          style={{ marginTop: '20px' }}
        >
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default Note;
