import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [date, setDate] = useState("");

  function newDate(date) {
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    return [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(newDate(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>{date}</h1>
    </div>
  );
};

export default App;
