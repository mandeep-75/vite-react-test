import React from "react";
import style from "./Header.module.css";
import rocketsvg from "../assets/rocket.svg";

export default function Header() {
  return (
    <div>
      <div className={style.main}>
        <img className={style.img} src={rocketsvg} alt="" />
        <button className={style.button1}>RESET</button>
      </div>
    </div>
  );
}
