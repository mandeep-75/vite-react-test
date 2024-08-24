import React from "react";

export default function Main() {
  const tasks = [
    { name: "Task 1", id: 1 },
    { name: "mandeep", id: 2 },
    { name: "mandeep3", id: 3 },
  ];
  return (
    <div>
      {tasks.map((task) => (
        <p>{task.name}</p>
      ))}
      <p>mandeep</p>
    </div>
  );
}
