import React from "react";

const Person = ({ url, name, kisi, peopleList, setPeopleList }) => {
  const deletePersonHandler = () => {
    let newPeopleList = peopleList.filter((x) => kisi.id !== x.id);
    setPeopleList(newPeopleList);
  };

  return (
    <div className="person">
      <div className="info1">
        <img src={url} alt="" />
        <p>{name}</p>
      </div>
      <button onClick={deletePersonHandler}>sil</button>
    </div>
  );
};

export default Person;
