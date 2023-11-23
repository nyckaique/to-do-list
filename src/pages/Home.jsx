import { Container, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const getLocalStorage = () => {
    const storage = localStorage.getItem("todos");
    if (storage) {
      return JSON.parse(storage);
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(getLocalStorage);
  //console.log(todos[0]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    const todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }
    setTodos(todosArray);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className="background"></div>
      <Container maxWidth="xs" className="container">
        <Typography variant="h4" gutterBottom className="titulo">
          LISTA DE TAREFAS
        </Typography>
        <Form addTodo={addTodo} todos={todos} />
        <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
