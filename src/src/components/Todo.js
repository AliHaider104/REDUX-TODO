import React, { Fragment, useEffect } from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [task, settask] = useState("");
  const [list, setlist] = useState([]);
  const [op, setop] = useState("Added");

  const dispatch = useDispatch();
  var List = useSelector((state) => state.list);

  const AddTodoHandler = (value) => {
    dispatch({ type: "ADD", todo: value });
  };

  const RemoveTodoHandler = (value) => {
    dispatch({ type: "DELETE", todo: value });
  };

  useEffect(() => {
    setlist(List);
  }, [task, op]);

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
            AddTodoHandler(task);
            setop("ADDED");
            settask("");
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
            {list.map((todo) => (
              //TODO: Add todo key
              <tr key={todo}>
                <td>{todo}</td>
                <td>
                  <button className="btn btn-outline-danger">Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      RemoveTodoHandler(todo);
                      setop("Deleted");
                    }}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
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
