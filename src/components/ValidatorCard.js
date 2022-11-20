import React from "react";

function ValidatorCard({ link = "/", title, desc, linkTitle, img }) {
  return (
    <div className="bg-blue-1 py-7 px-11 rounded-3xl flex space-x-9">
      <div className="flex items-center">
        {img ? (
          <img
            src={img}
            className="min-w-[103px] h-[103px] rounded-full"
            alt=""
          />
        ) : (
          <div className="min-w-[103px] h-[103px] rounded-full bg-yellowGradient"></div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-2xl font-medium mb-2">{title}</p>
        <div className="flex-1">
          <p className="text-base font-light">{desc}</p>
        </div>

        {linkTitle && (
          <a
            href={link}
            className="mt-3 text-base text-primary underline block w-fit cursor-pointer"
          >
            {linkTitle}
          </a>
        )}
      </div>
    </div>
  );
}

export default ValidatorCard;
