import { configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};
console.log(addMessage("Hello"));
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};
const store = configureStore(messageReducer);

export default store;
