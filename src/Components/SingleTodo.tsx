import React, { useState } from 'react';
import './style.css';
import { Todo } from '../model';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import swal from 'sweetalert';
import DatePicker from 'react-datepicker';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setpriorityList: React.Dispatch<React.SetStateAction<Todo[]>>;
  priorityList: Todo[];
};

const SingleTodo: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
  priorityList,
  setpriorityList
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(todo.todo);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  const isInCompletedList = completedTodos.some(t => t.id === todo.id);
  const disableButtons = buttonsDisabled || isInCompletedList;
  const isinPriority=priorityList.some(t=>t.id===todo.id)

  const handleDoneAlert = () => {
    swal({
      title: "Good job!",
      text: "Congratulations, you have completed the task! KEEP IT UP",
      icon: "success"
    });
  };

  const handleDeleteAlert = () => {
    swal({
      title: "Deleted",
      icon: "warning",
      dangerMode: true,
    });
  };

  const handleButtonDisable = () => {
    setButtonsDisabled(true);
  };

  const handleAddToCompletedList = () => {
    if (!todo.isDone) {
      setCompletedTodos([...completedTodos, todo]);
    } else {
      setCompletedTodos(completedTodos.filter((t) => t.id !== todo.id));
    }
  };

  const handleAddToPriorityList = () => {
    if (!todo.isPriority) {
      if (!isinPriority) {
        setpriorityList([...priorityList, todo]);
      }
    } else {
      setpriorityList(priorityList.filter((t) => t.id !== todo.id));
    }
  };
  

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );
    setTodos(updatedTodos);
    handleAddToCompletedList();
    handleButtonDisable();
    handleDoneAlert();
    
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    handleDeleteAlert();
  };

  const handleEditText = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editTodoText } : todo
    );
    setTodos(updatedTodos);
    setEdit(false);
  };

  const [selectedDate, setDate] = useState<Date | null>(null); 

  return (
    <form className='SingleTodo' onSubmit={(e) => handleEditText(e, todo.id)}>
      {edit ? (
        <input
          value={editTodoText}
          onChange={(e) => setEditTodoText(e.target.value)}
        />
      ) : (
        <span className='todo-text'>{todo.todo}</span>
      )}
         {! disableButtons &&(
   <div className='dropdown'>
   <button className='dropdown-btn'>Actions</button>
   <div className='dropdown-content'>
     <a href='#'>
       <DatePicker placeholderText="Deadline" className='inputDate' selected={selectedDate} onChange={(date: Date | null) => setDate(date)} />
     </a>
     {!isinPriority &&(
       <a href="#" onClick={() => {
         
           handleAddToPriorityList();
         
       }}>
       {isinPriority ? 'Remove Priority' : 'Add to Priority'}
       
     </a>
     )}
     
     <a href="#" onClick={() => {
       if (!edit && !isInCompletedList) {
         setEdit(!edit);
       }
     }}>
       <MdEdit style={{ marginRight: '10px' }} /> Edit
     </a>
     <a href="#" onClick={() => {
       if (!disableButtons) {
         handleDelete(todo.id);
       }
     }}>
       <MdDelete style={{ marginRight: '10px' }} /> Delete
     </a>
     {!isInCompletedList && (
       <a href="#" onClick={() => {
         if (!disableButtons) {
           handleDone(todo.id);
         }
       }}>
         <TiTick style={{ marginRight: '10px' }} /> Done
       </a>
     )}
   </div>
 </div>
         ) 
         }
   
    </form>
  );
};

export default SingleTodo;
