import React from "react";
import BoxTitle from "./BoxTitle.jsx";
import BoxForm from "./BoxForm.jsx";
import "./System.css";

const System = () => {
  return (
    <div className="System">
      <div className="BoxWrapper">
        <BoxTitle />
        <BoxForm />
      </div>
    </div>
  );
};

export default System;
