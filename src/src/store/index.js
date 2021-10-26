import { createStore } from "redux";

const todoReducer = (state = { list: [] }, action) => {
  if (action.type === "ADD") {
    state.list.push(action.todo);
    console.log("Add Function...");
    console.log(state.list);

    return {
      list: state.list,
    };
  }

  if (action.type === "DELETE") {
    state.list = state.list.filter((item) => {
      if (item !== action.todo) return item;
    });
    console.log("Delete Function...");
    console.log(state.list);

    return {
      list: state.list,
    };
  }
  return state;
};

const store = createStore(todoReducer);

export default store;
