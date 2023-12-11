import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NotasId = () => {
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/all/Notes";
        const params = {
          id: '1',   // userId: userId, // Suponiendo que el parámetro esperado por la API es userId
        };
        const response = await axios.get(urlDelApi, { params });
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (showNotes) {
      fetchData();
    }
  }, [showNotes]);

  const handleShowNotes = () => {
    setShowNotes(true);
  };

  const handleHideNotes = () => {
    setShowNotes(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div data-testid="Registro">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button color="inherit" onClick={() => window.location.href = "../note"}>
            Nueva nota
          </Button>
          <Button color="inherit" onClick={() => window.location.href = "../main"}>
            Home
          </Button>
          <Button color="inherit" onClick={() => window.location.href = "../login"}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <h1>Notas por id de usuario</h1>

      <Button variant="contained" onClick={handleShowNotes}>
        Mostrar Notas
      </Button>
      <Button variant="contained" onClick={handleHideNotes}>
        Ocultar Notas
      </Button>

      {showNotes && (
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item key={note.id} xs={12} sm={6} md={4}>
              <div>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default NotasId;
