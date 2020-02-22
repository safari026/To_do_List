import React, { Component } from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import StatusFilter from "../StatusFilter/StatusFilter";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import "./App.css";

export default class App extends Component {
  createTodo = todo => {
    return {
      label: todo,
      done: false,
      important: false,
      id: this.maxId++
    };
  };
  maxId = 100;
  state = {
    todos: [
      this.createTodo("Drink Coffe"),
      this.createTodo("Build Awesome App"),
      this.createTodo("Have lunch")
    ],
    pattern: "",
    filter: "active" //all, active, done
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  deleteTodo = id => {
    this.setState(({ todos }) => {
      return {
        todos: todos.filter(todo => todo.id !== id)
      };
    });
  };

  addTodo = todo => {
    this.setState(({ todos }) => {
      return {
        todos: [...todos, this.createTodo(todo)]
      };
    });
  };

  toggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "important")
      };
    });
  };

  toggleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "done")
      };
    });
  };
  onSearchChange = pattern => {
    this.setState({
      pattern
    });
  };
  search = (items, pattern) => {
    if (pattern.length === 0) return items;
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(pattern.toLowerCase()) > -1;
    });
  };
  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };
  render() {
    const { todos, pattern, filter } = this.state;
    const doneCount = todos.filter(todo => todo.done).length;
    const todoCount = todos.length - doneCount;
    const filteredTodos = this.filter(this.search(todos, pattern), filter);
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchBar onSearchChange={this.onSearchChange} />
          <StatusFilter onFilterChange={this.onFilterChange} filter={filter} />
        </div>
        <TodoList
          todos={filteredTodos}
          onDelete={this.deleteTodo}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
