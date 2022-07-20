import React from "react";
import "./input.css";
import { useDispatch } from "react-redux";

import { saveToDo } from "../features/toDoSlice";
function Input() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();
  const addToDO = (e) => {
    console.log(`we have added ${input} to redux`);
    dispatch(
      saveToDo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="input-fild"
      />
      <button className="btn-add " onClick={addToDO}>
        add
      </button>
    </div>
  );
}

export default Input;
