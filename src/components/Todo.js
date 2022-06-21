import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";
import { addTodo, deleteTodo, deleteAll } from "../actions";
import { useState } from "react";

function Todo() {
  const [inputData, setInputData] = useState();
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your tasks here ! 👈</figcaption>
          </figure>
          <div className="addItem">
            <input
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
              type="text"
              placeholder="✍️ Add an item here!"
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove all tasks"
              onClick={() => dispatch(deleteAll())}
            >
              <span>Check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
