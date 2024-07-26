import React, { useState } from 'react';
import './style.css';
import { Todo } from '../model';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import swal from 'sweetalert';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(todo.todo);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  // Check if todo item is in completed list
  const isInCompletedList = completedTodos.some(t => t.id === todo.id);

  // Disable buttons if task is completed
  const disableButtons = buttonsDisabled || isInCompletedList;

  const handleDoneAlert = () => {
    swal({
      title: "Good job!",
      text: "Congratulations, you have completed the task! KEEP IT UP",
      icon: "success"
    });
  };
const handledeletealert=()=>{
   swal({
      title: "Deleted",
    
      icon: "warning",
      dangerMode: true,
    })
    
}
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

  const handleDone = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    handleAddToCompletedList();
    handleButtonDisable();
    handleDoneAlert();
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    handledeletealert()
  };

  const handleEditText = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodoText } : todo
    )));
    setEdit(false);
  };

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

      <div className='icons'>
        <span
          className={`icon ${disableButtons ? 'disabled' : ''}`}
          onClick={() => {
            if (!edit && !isInCompletedList) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span
          className={`icon ${disableButtons ? 'disabled' : ''}`}
          onClick={() => {
            if (!disableButtons) {
              handleDelete(todo.id);
            }
          }}
        >
          <MdDelete />
        </span>
        {!isInCompletedList && (
          <span
            className={`icon ${disableButtons ? 'disabled' : ''}`}
            onClick={() => {
              if (!disableButtons) {
                handleDone(todo.id);
              }
            }}
          >
            <TiTick />
          </span>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;
