// import React from "react";

import { useState } from "react";

interface DataClockProps {
  time: string[];
  onAdd: (item: object) => void;
  onSubmit?: () => void;
}

interface KeyboardEvent {
  target: HTMLInputElement;
  // key: string,
}

const InputForm = ({ time, onAdd }: DataClockProps) => {
  const [form, setForm] = useState({ title: "", zone: "" });

  const handleChange = ({ target }: KeyboardEvent) => {
    const name = target.name;
    const value = target.value;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  let clockItem = {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("handleSubmit: ", form);

    clockItem = {
      id: time.length,
      title: form.title,
      zone: Number(form.zone),
    };

    console.log("onAdd: ", clockItem);

    onAdd(clockItem);

    setForm({ title: "", zone: "" });
  };

  return (
    <>
      <form className="container-training-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Name Clock
          <input
            type="text"
            name="title"
            value={form.title}
            id="title"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="zone">
          GMT
          <input
            type="number"
            min={"-12"}
            max={"12"}
            name="zone"
            value={form.zone}
            id="zone"
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" value="OK" />
      </form>
    </>
  );
};

export default InputForm;
