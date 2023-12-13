import React, { useState } from "react";
import styles from "./prueba.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Note from "../Note/Note";


const Prueba = () => {
  const [state, setState] = useState({
    data: "Ejemplo React, estados y llamados a API",
    formValues: {},
    authenticated: null,
    users: null,
    notes: null,
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  };

  const handleTitleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const handleContentChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };

  const urlDelApi = "http://localhost:8080/api/new/Note";

  const handleNoteSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch( `${urlDelApi}?UserID=1&Title=tony&Content=conte&token=123`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       
      });

      if (response.ok) {
        console.log('Nota enviada exitosamente');
        // Realiza acciones adicionales si es necesario
      } else {
        console.error('Error al enviar la nota', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error general al enviar la nota', error);
    }
  };

  return (
    <div className={styles.Home}>
      <h1>{state.data}</h1>
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
          <h1>Autenticacion básica</h1>
          <TextField
            id="outlined-basic"
            name="usuario"
            label="Outlined"
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            id="outlined-basic"
            name="password"
            type="password"
            onChange={handleChange}
            label="Outlined"
            variant="standard"
          />
          <br/><br/><br/>
        </Grid>

        <Grid item xs={5}>
          <h2>Insertar Nota en base de datos</h2>
          <Grid item xs={2}>
            <form onSubmit={handleNoteSubmit}>
              <ul>
                <label htmlFor="ID">ID:</label>
                <input type="text" name="UserID" value={state.formValues.UserID} onChange={handleChange}/>
                <br/><br/>

                <label htmlFor="Titulo">Título:</label>
                <input type="text" name="Title" value={state.formValues.Title} onChange={handleChange}/>
                <br/><br/>

                <label htmlFor="Contenido">Contenido:</label>
                <input type="textarea" name="Content" value={state.formValues.Content} onChange={handleChange}/>
                <br/><br/>
                <Button type="submit" variant="contained" sx={{ mx: 2 }}>Insertar API</Button>
              </ul>
            </form>
          </Grid>
        </Grid>

        {/* Resto del código.. */}
      </Grid>

      <Card id="card-home" className={styles["card-home"]}>
        <Grid container spacing={2}>
          {state.notes?.map((nota, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Note titulo="titulo" note={nota}></Note>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </div>
  );
};

export default Prueba;
