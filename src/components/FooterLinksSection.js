import React from "react";

const FooterLinksSection = ({ title, links = [] }) => {
  return (
    <div className="">
      <h4 className="text-base xl:text-lg uppercase font-bold mb-4">{title}</h4>

      <div className="space-y-2">
        {links &&
          links.map((obj, i) => (
            <p className="text-xs xl:text-sm cursor-pointer w-fit">
              {obj.title}
            </p>
          ))}
      </div>
    </div>
  );
};

export default FooterLinksSection;
