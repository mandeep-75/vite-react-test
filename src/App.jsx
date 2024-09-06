import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Input from "./components/Input";

export default function App() {
  const [data, setData] = useState([
    { id: 9541, name: "mandeep$" },
    { id: 950, name: "mandeep$" },
    { id: 960, name: "mandeep$" },
    { id: 970, name: "mandeep$" },
    { id: 980, name: "mandeep$" },
    { id: 990, name: "mandeep$" },
    { name: "Task 1", id: 131 },
    { name: "mandeep", id: 1212 },
    { name: "mandeep3", id: 1213 },
    { name: "mandeep4", id: 422 },
    { name: "mandeep5", id: 5323 },
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Header />
          <Input task={data} settask={setData} />
          <Body data={data} />
        </div>
      )}
    </div>
  );
}
