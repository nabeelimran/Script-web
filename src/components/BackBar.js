import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function BackBar({ title, to = -1 }) {
  const navigate = useNavigate();

  const sender = () => {
    navigate(to);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={sender} className="flex">
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
      </button>
      <p className="text-sm">{title}</p>
    </div>
  );
}

export default BackBar;
