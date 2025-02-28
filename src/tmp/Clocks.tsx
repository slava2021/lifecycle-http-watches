// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "react-clock/dist/Clock.css";
import Clock from "react-clock";

const Clocks = ({ clocksData, onRemove }) => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="clock-container">
        <button onClick={() => remove(item.id)}>Remove</button>
        <div>
          <Clock value={value} />;
        </div>
      </div>
    </>
  );
};

export default Clocks;
