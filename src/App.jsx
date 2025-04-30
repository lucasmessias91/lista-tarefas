import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  TodoList,
  Input,
  Button,
  ListItem,
  Check,
  Trash,
} from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function inputMudou(event) {
    setTask(event.target.value);
  }

  function botaoClicado() {
    if (task) {
      setList([...list, { id: uuid(), task: task, finished: false }]);
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, finished: !item.finished };
      }
      return item;
    });
    setList(newList);
  }

  function deletarTarefa(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  return (
    <Container>
      <div>
      <h1>Lista de Tarefas com ReactJs</h1>
      </div>
      <TodoList>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <Button onClick={botaoClicado}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarTarefa(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Você não tem tarefas cadastradas</h3>
          )}
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
