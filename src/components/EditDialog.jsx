import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDialog({ open, dialogHandler, todo, editTodo }) {
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
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandler();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <ThemeProvider theme={theme}>
        <DialogTitle>{"Editando tarefa"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            color="brown"
            defaultValue={todo.text}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="brown" onClick={dialogHandler}>
            Cancelar
          </Button>
          <Button color="brown" onClick={textHandler}>
            Ok
          </Button>
        </DialogActions>
      </ThemeProvider>
    </Dialog>
  );
}
