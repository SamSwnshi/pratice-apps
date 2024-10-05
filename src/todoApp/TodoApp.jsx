import React, { useEffect, useState } from "react";
import "./Todo.css";
const TodoApp = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [edit, setEdit] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setData(savedTodos);
    }
  }, []);

  // Save todos to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);
  const handleAddData = (e) => {
    setInputData(e.target.value);
  };
  const handleTodo = () => {
    if (inputData.trim() === "") {
      alert("Please enter a task");
      return;
    }
    if (edit !== null) {
      const updateData = [...data];
      updateData[edit] = inputData;
      setData(updateData);
      setEdit(null);
    } else {
      setData([...data, inputData]);
    }
    setInputData("");
  };
  const handleEdit = (i) => {
    setInputData(data[i]);
    setEdit(i);
  };
  const handleCancel = (i) => {
    setData(data.filter((_, idx) => idx !== i));
  };
  return (
    <div className="todo-container">
      <div>
        <h1>Todo App</h1>
      </div>

      <div className="todo-input">
        <div className="todo-box">
          <label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Today Todo"
              className="todo-inputbox"
              value={inputData}
              onChange={handleAddData}
            />
          </label>
          <button onClick={handleTodo}>Add Todo</button>
        </div>
      </div>

      {data.map((items, idx) => (
        <>
          <div key={idx} className="todo-data">
            <div>
              <label>
                <input
                  type="radio"
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                />
                {items.toUpperCase()}
              </label>
            </div>

            <div className="todo-buttons">
              <button className="button" onClick={() => handleEdit(idx)}>
                Edit
              </button>
              <button className="button" onClick={() => handleCancel(idx)}>
                Cancel
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TodoApp;
