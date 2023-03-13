import { useState } from "react";
import { addWilder } from "../../wildersData";
import style from "./AddWilderForm.module.css";
const AddWilderForm = ({ fetchData }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const sendWilder = async (e) => {
    e.preventDefault();
    const json = { name: name, city: city };
    try {
      const addWilders = await addWilder(json);
      console.log(addWilders.data);
      fetchData();
      setName("");
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Add new Wilder</h2>
      <form
        className={style.form}
        id="addWilderForm"
        onSubmit={(e) => {
          sendWilder(e);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AddWilderForm;
