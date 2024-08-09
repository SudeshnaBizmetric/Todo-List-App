import React, { useRef } from 'react';
import swal from 'sweetalert'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios';
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) =>void;
}
const Form:React.FC<Props> = ({todo, setTodo,handleAdd}) => {
   
  const formRef=useRef<HTMLInputElement>(null)
  // const API_URL = " http://127.0.0.1:8000/"


  const handleTaskAddedalert =()=>{
    swal({
      title: "New Task  added, GREAT!",
     
      icon: "success",
     
    });   
  }
  
  const handleaddtodo=()=>{
    axios
  }

  return (
    <>
      <form className='input' onSubmit={handleAdd} >
        <input
         ref={formRef}
         className='inputbox'
         type='input' 
         placeholder='Enter a task here'
         value={todo}
         onChange={(e)=>setTodo(e.target.value)}
         ></input>
        
        <button className='inputSubmit' type='submit' onClick={handleTaskAddedalert}>Enter</button>
      </form>
    </>
  )
}

export default Form
