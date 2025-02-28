import { useState } from "react";
import "./App.css";

import InputForm from "./components/InputForm";
import Clocks from "./components/Clocks";

function App() {
  const [dataTime, setDataTime] = useState([]);

  const handleChange = (item: object) => {
    console.log("item ", item);

    const newDataTime = [...dataTime];

    newDataTime.push(item);

    setDataTime(newDataTime);
  };

  const handleRemove = (id: number) => {
    // console.log("id: ", id)
    setDataTime((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <>
      <InputForm onAdd={handleChange} time={dataTime} />
      <p className="clock-title">Current time:</p>
      <Clocks clocksData={dataTime} onRemove={handleRemove} />
    </>
  );
}

export default App;
