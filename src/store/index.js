import { createStore } from "redux";

const todoReducer = (state = { list: [] }, action) => {
  if (action.type === "ADD") {
    state.list.push(action.todo);

    return {
      list: state.list,
    };
  }
  //? why this fucntion required double taps
  if (action.type === "DELETE") {
    state.list = state.list.filter((item) => {
      if (item !== action.todo) return item;
    });

    return {
      list: state.list,
    };
  }
  return state;
};

const store = createStore(todoReducer);

export default store;
