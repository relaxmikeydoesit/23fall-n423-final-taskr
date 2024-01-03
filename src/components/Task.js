import React from "react";
import styles from '@/styles/Strike.module.css';

export const Task = (props) => {
    return (
      <div
       className="task"
        style={{ backgroundColor: props.finshedTask ? "green" : "gray" }}
      >
        <h1 className={styles.task}>{props.taskName} <button className={styles.taskButton} onClick={() => props.deleteTask(props.id)}> X </button></h1>
       {/* <button className={styles.finished} onClick={(finishedTask) => props.finishedTask(props.id)}>Finished</button> */}
       
      </div>
    );
  };