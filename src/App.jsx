import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:6767/task")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Header />
          <Body data={data} />
        </div>
      )}
    </div>
  );
}
