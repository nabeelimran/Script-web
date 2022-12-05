import React from "react";
import UpperRoot from "./UpperRoot";

function BlackScreen({ show = false }) {
  return (
    <UpperRoot>
      <div className={`black-screen ${show ? "show" : ""}`}></div>
    </UpperRoot>
  );
}

export default BlackScreen;
