import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
