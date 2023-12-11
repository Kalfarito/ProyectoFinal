import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const NotasId = () => {
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlDelApi = "http://localhost:8080/api/all/Notes";
        const params = {
          id: '1',
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

  const handleHoverEnter = () => {
    setHovered(true);
  };

  const handleHoverLeave = () => {
    setHovered(false);
  };

  return (
    <div data-testid="Registro">
      <AppBar position="static" sx={{ background: '#1976D2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ color: 'white' }}></span>
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

      <h1>Todas las notas</h1>

      <Button variant="contained" onClick={handleShowNotes} sx={{ backgroundColor: '#1976D2' }}>
        Mostrar Notas
      </Button>
      <Button variant="contained" onClick={handleHideNotes} sx={{ backgroundColor: '#1976D2' }}>
        Ocultar Notas
      </Button>

      {showNotes && (
        <Grid container spacing={2}>
          {notes.map((note, index) => (
            <Grid item key={note.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} style={{ padding: '15px', marginBottom: '15px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Nota {index + 1}</Typography>
                <Typography variant="h6" sx={{ color: 'black' }}>{note.title}</Typography>
                <Typography sx={{ color: 'black' }}>{note.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {!showNotes && hovered && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'black',
              textDecoration: 'underline',
            }}
            onClick={handleShowNotes}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            Mostrar Notas
          </p>
        </div>
      )}

      {!showNotes && !hovered && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: 'black' }}>Las notas están ocultas.</p>
        </div>
      )}
    </div>
  );
};

export default NotasId;
