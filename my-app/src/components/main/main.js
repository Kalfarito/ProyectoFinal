import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Note/Note";
import axios from "axios";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {TextareaAutosize } from '@mui/material' ;
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Main = (props) => 
  {
  
    const [formValues, setFormValues] = React.useState();
    const [authenticated, setAuthenticated] = React.useState();
    const [users, setUsers] = React.useState();
    const [notes, setNotes] = React.useState();
    const [user,setUser]= React.useState(props.user);
  
    const urlDelApi = "http://localhost:8080/api/note/all";
  
    useEffect(()=>{
      const user=localStorage.getItem("user"); 
      setUser(props.user);
    },[])

    const mockNotes = [
      {
        NoteID: 1,
        UserID: 1,
        Title: "Nota 1",
        Content: "Prueba de nota local1",
        CreatedAt: "2023-10-10 17:43:12",
      },
      {
        NoteID: 2,
        UserID: 1,
        Title: "nota 2",
        Content: "Prueba de nota local2",
        CreatedAt: "2023-10-10 17:43:12",
      },
     
    ];
    
    const onChancheInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      console.log(event);
      console.log(name);
      console.log(value);
  
      setFormValues({ ...formValues, [name]: value });
    };
    const callAPINotes = (event) => {
      const params = {
        id: '1',
      };
      axios
        .get(`${urlDelApi}`,{params},  {
          headers: {
            'Access-Control-Allow-Origin': '*',
            // Otros encabezados si son necesarios
          },
        })
        .then(function (response) {
          console.log(response);
          console.log(response.data.records);
          console.log(response.statusText);
          setNotes(response.data.records);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    
    const callAPMockNotes = (event) => {
      setNotes(mockNotes);
      setNotes([...mockNotes]);
    };
   
    const clearNotes = (event) => {
      setNotes();
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
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menú Principal
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Bienvenido {user?.usuario}</h1>

      <Grid
          container
          spacing={2}
          style={{
            inset: 0,
            margin: "auto",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          <Grid item xs={12}>
            {/* ... */} 
          </Grid>
          <Grid item xs={6}>
          <h1> Blog de Notas</h1>
            <Button onClick={callAPMockNotes} variant="contained" sx={{ mx: 2 }}>
              Ver notas
            </Button>
            <Button onClick={clearNotes} color="secondary" variant="text">
              Ocultar
            </Button>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <Card id="card-home" className={styles["card-home"]}>
          <Grid container spacing={4}>
            {notes?.map((nota, index) => 
            (
              <Grid item xs={6} key={index}>
                  <Note titulo="titulo" note={nota}>  
                  </Note>
              </Grid>
            ))}
          </Grid>
        </Card>
    </Box>
  );
}


Main.propTypes = {};

Main.defaultProps = {};

export default Main;






