import React from "react";
import style from "./Main.module.css";
export default function Body({ data }) {
  return (
    <>
      <div className={style.grid}>
        {data.map((task) => (
          <div key={task.id} className={style.div1}>
            <p className={style.bold}>{task.name}</p>

            <p className={style.bold}>{task.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
