import React from "react";
import Form from "./Components/Form";
import './App.css'
import './Components/style.css'
import { Todo } from "./model"; 
import TodoList from "./Components/TodoList";
function App() {
  const [todo, setTodo] = React.useState<string>("")
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [completedTodos ,setCompletedTodos] =React.useState<Todo[]>([])
  const handleAdd =(e: React.FormEvent) =>{
       e.preventDefault();
       if(todo){
        setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
        setTodo("");
       }
  }

 console.log(todo)
 console.log(todos)

  return (
    <>
     <div className="Main">
      <span className="Heading">Todo List</span>
      <Form  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} setCompletedTodos={setCompletedTodos} completedTodos={completedTodos}/>
    
     </div>
    </>
  )
}

export default App
