import { createStore } from "redux";

const todoReducer = (state = { list: [] }, action) => {
  if (action.type === "ADD") {
    state.list.push(action.todo);
    console.log(state.list);
    return {
      list: state.list,
    };
  }
  return state;
};

const store = createStore(todoReducer);

export default store;
