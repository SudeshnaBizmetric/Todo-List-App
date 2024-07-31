import React, { useRef } from 'react';
import swal from 'sweetalert'

import 'react-datepicker/dist/react-datepicker.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) =>void;
}
const Form:React.FC<Props> = ({todo, setTodo,handleAdd}) => {
   
  const formRef=useRef<HTMLInputElement>(null)
 


  const handleTaskAddedalert =()=>{
    swal({
      title: "Good job!",
      text: "You have added new task!",
      icon: "success",
     
    });   
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
