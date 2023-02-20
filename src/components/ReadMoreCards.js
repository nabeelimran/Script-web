import React from "react";
import Title from "./Title";

function ReadMoreCards({ img = "images/read-more-banner.png", blog }) {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <div className="bg-grey-1 rounded-md overflow-hidden" onClick={() => openInNewTab(blog.link)}>
      <img src={blog.thumbnail} className="w-full block object-cover h-[159px]" alt="" />

      <div className="px-4 py-4 pb-8">
        <Title className="font-medium mb-3" variant="18">
          {blog.title}
        </Title>

        <p className="text-sm opacity-80" >
          {blog.author}
        </p>
      </div>
    </div>
  );
}

export default ReadMoreCards;
