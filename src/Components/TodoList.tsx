import React from 'react'
import './style.css'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';

interface Props{
    todos:Todo[];
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos ,setTodos ,completedTodos ,setCompletedTodos}) => {
  return (
    <div className='container'>
        <div className="todos">
              
        <span className="todo_heading">Active Tasks</span>
        {todos.map((todo)=>(
            <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos} 
            />
            
      ))}
        </div>
        <div className=" todos Completed_tasks">
        <span className="todo_heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
       <SingleTodo
        todo={todo}
        key={todo.id}
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos} 
    />
))}
        </div>
        </div>
    
    
  )
}

export default TodoList
