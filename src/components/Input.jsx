import React, { useRef } from "react";

export default function Input({ task, settask }) {
  const inref = useRef("");
  function addtask() {
    console.log(inref.current.value);
  }

  return (
    <div>
      <input type="text" name="task" ref={inref} />
      <button onClick={() => addtask()} name="task">
        add
      </button>
    </div>
  );
}
