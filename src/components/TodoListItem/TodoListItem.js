import React from "react";
import "./TodoListItem.css";

const TodoListItem = props => {
  const {
    label,
    important,
    done,
    onDelete,
    toggleDone,
    toggleImportant
  } = props;
  let classNames = "todo-list-item";
  if (done) classNames += " done";
  if (important) classNames += " important";
  return (
    <span className={classNames}>
      <span onClick={toggleDone} className="todo-list-item-label">
        {label}
      </span>
      <button
        onClick={toggleImportant}
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        onClick={onDelete}
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
