import React from "react";

function CordCard({ title, desc, linkTitle, link = "/" }) {
  return (
    <div className="bg-blue-1 px-8 lg:px-16 xl:px-28 py-8 lg:py-11 rounded-3xl text-center flex flex-col">
      <h4 className="text-center fs-24px mb-3 lg:mb-5 text-white font-semibold">
        {title}
      </h4>

      <p className="text-center font-medium fs-16px text-white opacity-70 flex-1">
        {desc}
      </p>

      {linkTitle && (
        <a
          href={link}
          className="w-fit mx-auto block fs-16px text-primary mt-6 underline"
        >
          {linkTitle}
        </a>
      )}
    </div>
  );
}

export default CordCard;
