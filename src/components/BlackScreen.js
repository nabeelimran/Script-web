import React from "react";
import UpperRoot from "./UpperRoot";

function BlackScreen({ show = false, zIndex = "100" }) {
  return (
    <UpperRoot>
      <div
        className={`black-screen ${show ? "show" : ""}`}
        style={{
          zIndex: zIndex,
        }}
      ></div>
    </UpperRoot>
  );
}

export default BlackScreen;
