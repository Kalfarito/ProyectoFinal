import React, { useState } from "react";
import styles from "./Note.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Note = () => {
  const [state, setState] = useState({
    formValues: {},
    authenticated: null,
    users: null,
    notes: null,
    title: "",
    content: "",
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
      const response = await fetch(
        `${urlDelApi}?UserID=1&Title=tony&Content=conte&token=123`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Nota enviada exitosamente");
        // Realiza acciones adicionales si es necesario
      } else {
        alert.error(
          "Error al enviar la nota",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      alert.error("Error general al enviar la nota", error);
    }
  };

  return (
    <div className={styles.Home}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          </Typography>
          <Button color="inherit" onClick={() => window.location.href = "../main"}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Grid item xs={4.5} style={{ margin: "0 auto" }}>
          <Paper elevation={10} style={{ padding: "20px", width: "400px" }}>
            <h2 style={{ textAlign: "center" }}>Insertar Nota en base de datos</h2>
            <form onSubmit={handleNoteSubmit}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TextField
                  label="ID"
                  variant="outlined"
                  size="small"
                  name="UserID"
                  value={state.formValues.UserID}
                  onChange={handleChange}
                  style={{ marginBottom: '8px' }}
                />
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TextField
                  label="Título"
                  variant="outlined"
                  size="small"
                  name="Title"
                  value={state.formValues.Title}
                  onChange={handleChange}
                  style={{ marginBottom: '8px' }}
                />
              </div>
              <br />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TextField
                  label="Contenido"
                  variant="outlined"
                  size="small"
                  name="Content"
                  value={state.formValues.Content}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  style={{ marginBottom: '8px' }}
                />
              </div>
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ mx: 2 }}
              >
                Insertar
              </Button>
            </form>
          </Paper>
        </Grid>
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

export default Note;
