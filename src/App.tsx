import React, { useEffect } from "react";
import Form from "./Components/Form";
import './App.css'
import './Components/style.css'
import { Todo } from "./model"; 
import TodoList from "./Components/TodoList";
import axios from "axios";
function App() {
  const [todo, setTodo] = React.useState<string>("")
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [completedTodos ,setCompletedTodos] =React.useState<Todo[]>([])
  const [priorityList ,setpriorityList]=React.useState<Todo[]>([])
  const handleAdd = () => {
    return axios.get(`${"http://127.0.0.1:8000/"}`)
      .then(response => response.data.data as Todo[])  // Ensure the response is typed as Todo[]
      .catch(error => {
        console.error("Error fetching data:", error);
        throw error;
      });
  };

  useEffect(() => {
    handleAdd()
      .then(data => {
        console.log('API data:', data);  // Log the data to verify it's an array
        setTodos(data);
      })
      .catch(error => console.error("Error setting todos:", error));
  }, []);

  console.log(todo);
  console.log(todos);

  return (
    <>
      <div className="Main">
        <span className="Heading">Todo List</span>
        <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setCompletedTodos={setCompletedTodos}
          completedTodos={completedTodos}
          priorityList={priorityList}
          setpriorityList={setpriorityList}
        />
      </div>
    </>
  );
}

export default App;