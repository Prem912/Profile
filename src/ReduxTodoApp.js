import React from "react";

import { createStore } from "redux";

import { Provider, connect } from "react-redux";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {};
const store = createStore(todoReducer);
function ReduxTodoApp() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default ReduxTodoApp;
