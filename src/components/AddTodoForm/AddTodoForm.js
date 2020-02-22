import React, { Component } from "react";
import "./AddTodoForm.css";

export default class AddTodoForm extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.label);
    this.setState({
      label: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="item-add-form d-flex">
        <input
          placeholder="what needs to be done"
          onChange={this.onLabelChange}
          type="text"
          className="form-control"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary text-nowrap">
          Add Todo
        </button>
      </form>
    );
  }
}
