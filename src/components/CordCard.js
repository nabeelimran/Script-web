import React from "react";

function CordCard({ title, desc, linkTitle, link = "/" }) {
  return (
    <div className="bg-blue-1 px-28 py-11 rounded-3xl text-center flex flex-col">
      <h4 className="text-center text-4xl mb-5 text-white font-semibold">
        {title}
      </h4>

      <p className="text-center font-medium text-lg text-white opacity-70 flex-1">
        {desc}
      </p>

      {linkTitle && (
        <a
          href={link}
          className="w-fit mx-auto block text-lg text-primary mt-6 underline"
        >
          {linkTitle}
        </a>
      )}
    </div>
  );
}

export default CordCard;
