import React from "react";

function CordCard({ title, desc, linkTitle, link = "/" }) {
  return (
    <div className="bg-blue-1 px-8 lg:px-16 xl:px-28 py-8 lg:py-11 rounded-3xl text-center flex flex-col transition-all duration-300 hover:bg-primary group/card">
      <h4 className="text-center fs-24px mb-3 lg:mb-5 text-white font-semibold group-hover/card:text-black">
        {title}
      </h4>

      <p className="text-center font-medium text-sm xl:text-base text-white opacity-70 flex-1 group-hover/card:text-black">
        {desc}
      </p>

      {linkTitle && (
        <a
          href={link}
          className="w-fit mx-auto block text-sm xl:text-base text-primary mt-6 underline group-hover/card:text-black"
        >
          {linkTitle}
        </a>
      )}
    </div>
  );
}

export default CordCard;
