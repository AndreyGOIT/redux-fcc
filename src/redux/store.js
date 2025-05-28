import { configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";

export const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};
export const store = configureStore(messageReducer);

// export default store;
