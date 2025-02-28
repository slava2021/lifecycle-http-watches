// import React from "react";
import { FormEvent, useState } from "react";

const InputForm = ({ addClocks, itemsData }) => {
  const [form, setForm] = useState({ title: "", zone: "" });
  const [items, setItems] = useState([]);

  const handleChange = ({ target }: FormEvent<HTMLElement>) => {
    const name = target.name;
    const value = target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    console.log("handleSubmit: ", form);

    const formData = {
      id: itemsData.length,
      title: form.title,
      zone: Number(form.zone),
    };

    console.log("formdata ", formData);

    addClocks(formData);

    setForm({ title: "", zone: "" });
  };

  return (
    <div>
      <form className="input-form" onSubmit={handleSubmit}>
        <label htmlFor="date">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="zone">
          Time zone
          <input
            type="number"
            min={0}
            max={12}
            name="zone"
            id="zone"
            value={form.zone}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Добавить" />
      </form>
    </div>
  );
};

export default InputForm;
