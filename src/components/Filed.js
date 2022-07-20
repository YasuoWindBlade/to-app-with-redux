import React from "react";
import "./filed.css";
import { useSelector } from "react-redux";

function Filed() {
  const todoList = useSelector((state) => state.todos.todoList);
  return (
    <div className="filed">
      {todoList.map((item) => (
        <h1 key={item.id}>{item.item}</h1>
      ))}
    </div>
  );
}

export default Filed;
