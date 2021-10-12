import React, { Fragment } from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [task, settask] = useState("");
  const [list, setlist] = useState("");

  const dispatch = useDispatch();
  const List = useSelector((state) => state.list);

  const addTodoHandler = (value) => {
    dispatch({ type: "ADD", todo: value });
    setlist(List);
    settask("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="d-flex mt-5">
        <input
          className="form-control"
          value={task}
          onChange={(event) => {
            settask(event.target.value);
          }}
          type="text"
          placeholder="Write your task here.."
        ></input>
        <button
          className="btn btn-success"
          onClick={() => {
            addTodoHandler(task);
          }}
        >
          Add
        </button>
      </div>
      <Fragment>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {List.map((todo) => (
              //TODO: Add todo key
              <tr>
                <td>{todo}</td>
                <td>
                  <button className="btn btn-outline-danger">Edit</button>
                </td>
                <td>
                  <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    </div>
  );
};

export default Todo;
