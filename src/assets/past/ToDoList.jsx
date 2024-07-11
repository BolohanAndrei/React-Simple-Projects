import React, { useState } from "react";
export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask === "") {
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  // function handleKeyPress(event) {
  //   if (event.key == "Enter") addTask();
  // }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) {
      return;
    }
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index - 1];
    newTasks[index - 1] = temp;
    setTasks(newTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) {
      return;
    }
    const newTasks = [...tasks];
    const temp = newTasks[index];
    newTasks[index] = newTasks[index + 1];
    newTasks[index + 1] = temp;
    setTasks(newTasks);
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              UP👆
            </button>
            <button
              className="move-down-button"
              onClick={() => moveTaskDown(index)}
            >
              DOWN👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
