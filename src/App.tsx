// import ClockList from "./components/ClockList";
import { useState } from "react";
import InputForm from "./components/InputForm";
import ClockList from "./components/ClockList";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const handleChangeClocks = (item) => {
    const newItems = [...items];
    // const checkDate = newItems.find((target) => target.date === item.date);

    newItems.push(item);

    // console.log("newItems: ", newItems);

    setItems(newItems);
  };

  const handleRemove = (id) => {
    // console.log("id: ", id)
    setItems((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <>
      <InputForm addClocks={handleChangeClocks} itemsData={items} />

      <ClockList itemsData={items} onRemove={handleRemove} />
      {/* <ClockList /> */}
    </>
  );
}

export default App;
