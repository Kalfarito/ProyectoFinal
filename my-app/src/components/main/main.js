import React from "react";
import PropTypes from "prop-types";
import styles from "./main.module.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import axios from "axios";
import User from "../User/User";
import Note from "../Note/Note";

const Main = () => {
  //constante
  const [data, setData] = React.useState(
    "Tarea de insertar notas en la base de datos "
  );
  const [formValues, setFormValues] = React.useState();
  const [users, setUsers] = React.useState();
  const [notes, setNotes] = React.useState();

  const urlDelApi = "http://localhost/dashboard/apiDB.php/records";


  const onChancheInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(event);
    console.log(name);
    console.log(value);

    setFormValues({ ...formValues, [name]: value });
  };

  const callAPINotes = (event) => {
    axios
      .get(`${urlDelApi}/notes`) //cambio direccion
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


/* tarea de insertar en el api */
    const [formData, setFormData] = useState({
      UserID: '',
      Title: '',
      Content: ''
    });
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
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
      .post(`${urlDelApi}/notes`, formData)
      .then(function (response) {
       
        handleReset();
      })
        .then(function (response) {
          
          callAPINotes();
        })
        .catch(function (error) {
          
          console.log(error);
        })
        .finally(function () {
          
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      insertNoteToDB2(formData);
    };
  return (
    <div className={styles.Main}>
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
        <Grid item xs={6}>
  
          <Grid item xs={3} style={{}}>
          <form onSubmit={handleSubmit}>
        <TextField
             type="text"
             name="UserID"
            required
            label="UserID"
            onChange={handleChange}
            variant="standard"
          />
        <br />

<TextField
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            label="Titulo"
            variant="standard"
          />
<br />

<TextField
           name="Content"
           value={formData.Content}
           onChange={handleChange}
            label="informacion "
            variant="outlined"
            
          />
<br /><br />
<Button  type="submit" variant="contained"color="success" sx={{ mx: 2 }}>
            Insertar
          </Button>
          </form>
          </Grid>

          <Button onClick={callAPINotes} variant="contained" sx={{ mx: 3 }}>
            Llamar API
          </Button>
          <br></br><br></br>
          <Button onClick={clearNotes} color="secondary" variant="text">
            Limpiar
          </Button>
        </Grid>
        <Grid item xs={6} style={{}}>
          <h2>Llamar Local y base de datos</h2>
          <p>
            {" "}
           El boton llama a MockNotes 
          </p>
          <Button onClick={clearNotes} color="secondary" variant="text">
            Limpiar
          </Button>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <p>
            
          </p>
        </Grid>
      </Grid>

      <Card id="card-main" className={styles["card-main"]}>
        {console.log("por aca ando")}

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

Main.propTypes = {};

Main.defaultProps = {};

export default Main;