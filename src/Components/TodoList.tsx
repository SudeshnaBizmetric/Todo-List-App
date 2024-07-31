import React from 'react';
import './style.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setpriorityList: React.Dispatch<React.SetStateAction<Todo[]>>;
  priorityList: Todo[];
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
  priorityList,
  setpriorityList
}) => {
  // Separate todos into active, priority, and completed
  const activeTodos = todos.filter(todo => !todo.isDone && !todo.isPriority);
  const priorityTodos = priorityList
  const completedTodosList = completedTodos;

  return (
    <div className='container'>
      <div className="todos">
        <span className="todo_heading">Active Tasks</span>
        {activeTodos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            priorityList={priorityList}
            setpriorityList={setpriorityList}
          />
        ))}
      </div>

      <div className="todos_priority">
        <span className="todo_heading">Priority Tasks</span>
        {priorityTodos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            priorityList={priorityList}
            setpriorityList={setpriorityList}
          />
        ))}
      </div>

      <div className="todos Completed_tasks">
        <span className="todo_heading">Completed Tasks</span>
        {completedTodosList.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            priorityList={priorityList}
            setpriorityList={setpriorityList}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
