import { Icon } from "@iconify/react";
import React from "react";
import Title from "./Title";

function CoreTeamCard({ title, desc, twitterLink = "/", designation }) {
  return (
    <div className="bg-shade-dark-blue rounded-xl py-5 lg:py-7 px-4 lg:px-6">
      <div className="mb-3">
        <Title variant="24">{title}</Title>
      </div>

      <div className="w-fit mx-auto py-1 lg:py-[5px] px-3 bg-blue-4 rounded text-xs lg:text-base font-bold mb-6">
        {designation}
      </div>

      <div className="flex-1">
        <p className="text-center font-medium text-sm lg:text-base xl:text-lg">
          {desc}
        </p>
      </div>

      <div className="flex justify-center mt-8 lg:mt-14">
        <a
          href={twitterLink}
          rel="noreferrer"
          target="_blank"
          className="flex text-lg opacity-50"
        >
          <Icon icon="fa:twitter" />
        </a>
      </div>
    </div>
  );
}

export default CoreTeamCard;
