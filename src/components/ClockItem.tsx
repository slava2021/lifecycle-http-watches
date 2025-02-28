// import React from "react";
import { useState, useEffect } from "react";
import { ClockModel } from "../models/clockModel";
import moment from "moment";

interface ClockItemProps {
  item: ClockModel;
  remove: (id: number) => void;
}

const ClockItem = ({ item, remove }: ClockItemProps) => {
  const [value, setValue] = useState();
  useEffect(() => {
    const interval = setInterval(
      () => setValue(moment().utcOffset(item.zone).format("HH:mm:ss")),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [item.zone]);

  return (
    <div className="clock-item">
      <span>{item.title}</span>
      <div>
        <span>{value}</span>
        <button onClick={() => remove(item.id)}>X</button>
      </div>
    </div>
  );
};

export default ClockItem;
