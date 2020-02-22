import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDelete, toggleImportant, toggleDone }) => {
  const todosElms = todos.map(todo => {
    const { id, ...todoProps } = todo;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...todoProps}
          toggleImportant={() => toggleImportant(id)}
          toggleDone={() => toggleDone(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{todosElms}</ul>;
};

export default TodoList;
