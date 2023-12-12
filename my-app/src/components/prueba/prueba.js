import React from "react";
import PropTypes from "prop-types";
import styles from "./prueba.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import User from "../User/User";
import Note from "../Note/Note";

const Prueba = () => {
  const [data, setData] = React.useState(
    "Ejemplo React, estados y llamados a API"
  );
  const [formValues, setFormValues] = React.useState();
  const [authenticated, setAuthenticated] = React.useState();
  const [users, setUsers] = React.useState();
  const [notes, setNotes] = React.useState();

  // URL DEL API
  const urlDelApi = "http://localhost:8080/api/new/Note";


  const onChancheInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(event);
    console.log(name);
    console.log(value);

    setFormValues({ ...formValues, [name]: value });
  };

// LLAMA AL API
  const callAPINotes = (event) => {
    axios
      .post(`${urlDelApi}`)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.records);
        console.log(response.statusText);
        setNotes(response.data.records);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const clearNotes = (event) => {
    setNotes();
  };



// COSNT PARA LA CREACION DEL INSERT EN LA BD CON EL API
    const [formData, setFormData] = useState({
      UserID: '',
      Title: '',
      Content: ''
    });

    const handleChange = (e) => {
      setFormData({...formData,[e.target.name]: e.target.value});
    };


    const handleReset = () => {
      setFormData({
        UserID: '',
        Title: '',
        Content: ''
      });
    };

    const insertNoteToDB2 = () => {
      axios
      .post(`${urlDelApi}`, formData)
      .then(function (response) {
        // calling reset action
        handleReset();
      })
        .then(function (response) {
          // handle success
          callAPINotes();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      insertNoteToDB2(formData);
    };
  return (
    <div className={styles.Home}>
      <h1>{data}</h1>
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
          <h1>Autentiacion básica</h1>
          <TextField
            id="outlined-basic"
            name="usuario"
            label="Outlined"
            onChange={onChancheInput}
            variant="standard"
          />
          <TextField
            id="outlined-basic"
            name="password"
            type="password"
            onChange={onChancheInput}
            label="Outlined"
            variant="standard"
          />
          <br/><br/><br/>
        </Grid>


      <Grid item xs={5}>
          <h2>Insertar Nota en base de datos</h2>
          <Grid item xs={2} style={{}}>
          
            <form onSubmit={handleSubmit}>
              <ul>
                <label for="ID">ID:</label>
                <input type="text"name="UserID" value={formData.UserID} onChange={handleChange}/>
                <br/><br/>

                <label for="Titulo">Título:</label>
                <input type="text"name="Title" value={formData.Title} onChange={handleChange}/>
                <br/><br/>

                <label for="Contenido">Contenido:</label>
                <input type="textarea"name="Content" value={formData.Content} onChange={handleChange}/>
                <br/><br/>
                <Button onClick={insertNoteToDB2} type="submit" variant="contained" sx={{ mx: 2 }}>Insertar API</Button>
              </ul>
            </form>
      </Grid>
        </Grid>

        <Grid item xs={6} style={{}}>
       
         
          <Button onClick={clearNotes} color="secondary" variant="text">Limpiar</Button>
          <br></br><br></br><br></br>

      
          <Button onClick={callAPINotes} variant="contained" sx={{ mx: 3 }}>Llamar API RED</Button>
          <Button onClick={clearNotes} color="secondary" variant="text">Limpiar</Button>
        </Grid>

        <Grid item xs={12}>
          {" "}
        </Grid>
      </Grid>

      <Card id="card-home" className={styles["card-home"]}>{console.log("por aca ando")}
        <Grid container spacing={2}>
          {notes?.map((nota, index) => {
            return (
              <Grid item xs={4}>
                {" "}
                <Note titulo="titulo" note={nota}></Note>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </div>
  );
};

Prueba.propTypes = {};
Prueba.defaultProps = {};
export default Prueba;