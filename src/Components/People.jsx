import React from "react";
import "./People.css";
import Person from "./Person";

const People = ({ peopleList, setPeopleList }) => {
  return (
    <div className="peopleWrapper">
      {peopleList.map((kisi) => (
        <Person
          key={kisi.id}
          url={kisi.url}
          name={kisi.name}
          kisi={kisi}
          peopleList={peopleList}
          setPeopleList={setPeopleList}
        />
      ))}
    </div>
  );
};

export default People;
