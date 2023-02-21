import GemTitle from "components/GemTitle";
import React from "react";

function Gems() {
  return (
    <div className="dashboard-layout grid sm:grid-cols-[auto_auto] gap-10 sm:gap-12 justify-start">
      <div>
        <p className="fs-18px font-medium mb-6">Milestone Achieved</p>
        <GemTitle title="1.0" />
      </div>

      <div>
        <p className="fs-18px font-medium mb-6">My Gems</p>

        <div className="flex items-center space-x-6">
          <GemTitle title="1.0" />
          <GemTitle title="1.0" gemVariant="white" />
        </div>
      </div>
    </div>
  );
}

export default Gems;
