import React, { useState } from "react";
import "./BoxForm.css";
import PeopleData from "../PeopleData.js";
import People from "./People.jsx";

const BoxForm = () => {
  const [peopleList, setPeopleList] = useState(PeopleData);

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let newPerson = {
      id: peopleList.length + 1,
      url: url,
      name: name,
    };

    setPeopleList((prevList) => [...prevList, newPerson]);
  };

  return (
    <div>
      <form className="boxForm">
        <input
          className="url"
          type="text"
          placeholder="URL"
          onChange={urlChangeHandler}
        />
        <input
          className="name"
          type="text"
          placeholder="Name"
          onChange={nameChangeHandler}
        />
        <button onClick={submitHandler}>
          <p>+</p>
        </button>
      </form>
      <div className="people">
        <People peopleList={peopleList} setPeopleList={setPeopleList}></People>
      </div>
    </div>
  );
};

export default BoxForm;
