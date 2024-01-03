import { React, useState } from "react";
import styles from "@/styles/Strike.module.css";
import { Segment } from 'semantic-ui-react';
import { Task } from "@/components/Task.js";
import { Footer } from "@/components/Footer.js";

export default function Strike() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      finished: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const finishedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, finished: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="Strike">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              finished={task.finished}
              deleteTask={deleteTask}
      
            />
          );
        })}
      </div>
      
    </div>

  

   
    
  );
}
