import React from "react";
import { Link } from "react-router-dom";
import { helper } from "utils/helper";

const Card = ({ title, img, subtitle, to = "/" }) => {
  return (
    <div>
      <p className="text-base font-bold mb-4">{title}</p>

      <Link to={to} className="block">
        <img
          src={img}
          className="rounded-md w-full mb-2 aspect-video object-cover"
          alt=""
        />

        <p className="text-sm font-medium">{subtitle}</p>
      </Link>
    </div>
  );
};

const HelpDropdownBody = () => {
  return (
    <div className="bg-blue-3 rounded-lg grid lg:grid-cols-[230px,1fr]">
      <div className="pt-4 pb-6 lg:py-6 px-4 lg:px-7 flex-col">
        <p className="text-base font-bold mb-4">About</p>

        <div className="bg-[#1F1F1F] rounded-xl py-4 px-5">
          <div className="space-y-2">
            <a href="https://whitepaper.script.tv/" rel="noreferrer" target="_blank" className="text-sm font-medium">Whitepaper</a> <br/>
            <a href={helper.generateTokenHrefLink('research')} rel="noreferrer" target="_blank" className="text-sm font-medium">Script TV explained</a> <br/>
            {/* <Link to="/research" className="text-sm font-medium">Script TV explained</Link> <br/> */}
            <Link to="/" className="text-sm font-medium">Blog</Link> <br/>
            <a href={helper.generateTokenHrefLink('faq')} rel="noreferrer" target="_blank" className="text-sm font-medium">FAQ</a>
            {/* <Link to="/faq" className="text-sm font-medium">FAQ</Link>  */}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 py-5 lg:py-7 px-4 lg:px-8 border-t-1px lg:border-t-0 lg:border-l-1px border-primary">
        <Card
          to="/research"
          title="Learn More"
          img="images/learn-more.png"
          subtitle="More on Script TV"
        />
        <Card
          title="Latest Post"
          img="images/latest-post.png"
          subtitle="Developer Diary"
        />
      </div>
    </div>
  );
};

export default HelpDropdownBody;
