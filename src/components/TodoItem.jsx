import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper, createTheme } from "@mui/material";
import EditDialog from "./EditDialog";

export default function TodoItem({ todo, deleteTodo, editTodo }) {
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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };
  const checkedHandler = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <EditDialog
        open={openDialog}
        dialogHandler={dialogHandler}
        todo={todo}
        editTodo={editTodo}
      />
      <Paper style={{ padding: "0.5em 0", borderRadius: "1em" }} elevation={6}>
        <ListItem
          secondaryAction={
            <IconButton
              theme={theme}
              color="brown"
              edge="end"
              aria-label="delete"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                onClick={checkedHandler}
              />
            </ListItemIcon>
            <ListItemText
              primary={todo.text}
              style={{
                textDecoration: isChecked ? "line-through" : "none",
                color: isChecked ? "gray" : "initial",
              }}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
