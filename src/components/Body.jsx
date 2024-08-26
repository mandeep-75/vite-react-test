import React from "react";
import style from "./Main.module.css";
export default function Body() {
  const tasks = [
    { name: "Task 1", id: 1 },
    { name: "mandeep", id: 2 },
    { name: "mandeep3", id: 3 },
    { name: "mandeep4", id: 4 },
    { name: "mandeep5", id: 5 },
  ];
  return (
    <div className={style.grid}>
      {tasks.map((task) => (
        <div className={style.div1}>
          <p style={{ padding: "0px,10px,0px,10px" }}>taskname = {task.name}</p>
          <p>taskid ={task.id}</p>
        </div>
      ))}
    </div>
  );
}
