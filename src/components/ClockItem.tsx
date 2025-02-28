// import React from "react";
import { useState, useEffect } from "react";
import { ClockModel } from "../models/clockModel";

interface ClockItemProps {
  item: ClockModel;
  remove: (id: number) => void;
}

const ClockItem = ({ item, remove }: ClockItemProps) => {
  //   console.log("item ", item);

  const [value, setValue] = useState(new Date());
  console.log(item.zone);
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = () => {
    const hours = value.getHours() + item.zone;
    const minuts = value.getMinutes();
    const seconds = value.getSeconds();

    return `${hours}:${minuts}:${seconds}`;
  };

  return (
    <div className="clock-item">
      <span>{item.title}</span>
      <div>
        <span>{formatTime()}</span>
        <button onClick={() => remove(item.id)}>X</button>
      </div>
    </div>
  );
};

export default ClockItem;
