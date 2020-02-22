import React from "react";
import "./StatusFilter.css";

const StatusFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];
  const handleClick = filter => {
    onFilterChange(filter);
  };
  return (
    <div className="btn-group">
      {buttons.map(button => {
        const clas =
          filter === button.name ? "btn btn-info" : "btn btn-outline-secondary";
        return (
          <button
            onClick={() => handleClick(button.name)}
            key={button.name}
            className={clas}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};
export default StatusFilter;
