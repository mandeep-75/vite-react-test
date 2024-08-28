import React from "react";
import style from "./Main.module.css";
export default function Body({ data }) {
  console.log(data);
  return (
    <>
      <div className={style.grid}>
        {data.map((task) => (
          <div className={style.div1}>
            <p key={task.id} className={style.bold}>
              {task.name}
            </p>

            <p key={task.id + 1} className={style.bold}>
              {task.id}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
