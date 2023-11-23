import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Form({ addTodo, todos }) {
  const theme = createTheme({
    palette: {
      brown: {
        main: "#bcaaa4",
        light: "#d7ccc8",
        dark: "#a1887f",
        contrastText: "#3e2723",
      },
    },
  });

  const getLastID = () => {
    if (todos[0] !== undefined) {
      return todos[todos.length - 1].id + 1;
    }
    return 0;
  };
  getLastID();
  const [text, setText] = useState(null);
  const [id, setId] = useState(getLastID);
  const todoCreate = (text) => {
    const todoObj = {
      text: text,
      id: id,
    };
    setId(id + 1);

    addTodo(todoObj);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ padding: "1em", borderRadius: "1em" }} elevation={8}>
        <form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              id="outlined-basic"
              label="Tarefa"
              variant="outlined"
              color="brown"
              fullWidth
              style={{ marginRight: "1em" }}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              type="reset"
              variant="contained"
              color="brown"
              onClick={() => todoCreate(text)}
            >
              Add
            </Button>
          </div>
        </form>
      </Paper>
    </ThemeProvider>
  );
}
