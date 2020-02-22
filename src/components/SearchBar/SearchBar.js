import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  state = {
    pattern: ""
  };
  onPatternChange = e => {
    const pattern = e.target.value;
    this.setState({ pattern });
    this.props.onSearchChange(pattern);
  };
  render() {
    return (
      <input
        onChange={this.onPatternChange}
        value={this.state.pattern}
        type="text"
        placeholder="type to search"
        className="form-control search-bar"
      />
    );
  }
}
