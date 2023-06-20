import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { helper } from "utils/helper";

const channels = [
  // { img: "/images/channels/cultured-one.svg", className: "w-full lg:w-20", id:1922 },
  // { img: "/images/channels/toom.svg", className: "w-full lg:w-20", id:1913 },
  // { img: "/images/channels/drama.svg", className: "w-full lg:w-auto", id:1911 },
  // { img: "/images/channels/cultured-two.svg", className: "w-full lg:w-20", id:1922 },
  // { img: "/images/channels/film.svg", className: "w-full lg:w-auto", id:1908 },
  // { img: "/images/channels/irl.svg", className: "w-full lg:w-14", id:621730 },
  // { img: "/images/channels/asmr.png", className: "w-full lg:w-20", id:727149 },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1686649580791-SOFAST_logo-assets_1080x1080_EN-EN_black-removebg-preview.png',
    className: "w-full lg:w-20",
    id:785352
  },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1687260261375-edgy_urban_(1).png',
    className: "w-full lg:w-20",
    id: 785357
  },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1686649119608-SOFAST_logo-assets_1080x1080_EN-ES_black-removebg-preview.png',
    className: "w-full lg:w-20",
    id: 785353
  },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1687260228141-lol.png',
    className: "w-full lg:w-20",
    id: 785355
  },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1686649247898-Copy_of_300x300_White_logo_LOGO-PRIME-FIGHT.png',
    className: "w-full lg:w-20",
    id: 785356
  },
  {
    img: 'https://scripttv.s3.eu-central-1.amazonaws.com/1687260241287-w_(1).png',
    className: "w-full lg:w-20",
    id: 785354
  }
];

const ImgBox = ({ children }) => {
  return (
    <div className="w-[22px] lg:w-[34px] h-[22px] lg:h-[34px] flex items-center justify-center rounded bg-primary">
      {children}
    </div>
  );
};

const ChannelBox = ({ img, label, to = "/" }) => {
  return (
    <Link to={to} className="flex items-center space-x-2 lg:space-x-3 w-full">
      <ImgBox>{img}</ImgBox>
      <p className="text-xs lg:text-sm font-bold text-white">{label}</p>
    </Link>
  );
};

const ChannelsDropdownBody = (
  ) => {

  const navigate = useNavigate();

  const handleWatchLive = (channelId) => {
    navigate({
      pathname:  "/watch",
      search: `?channelId=${channelId}`,
    })
  }
  
  return (
    // <div className="bg-blue-3 rounded-lg grid lg:grid-cols-[230px,1fr] lg:p-0 gap-6 lg:gap-0 py-4 lg:py-0">
    <div className="bg-blue-3 rounded-lg grid lg:grid-cols-3 lg:p-0 gap-6 lg:gap-0 py-4 lg:py-0 w-full">
      <div className="lg:py-7 px-5 lg:px-8 flex-col space-y-3 lg:space-y-5">
        <ChannelBox
          label="All Channels"
          img={<img src="images/channels.svg" className="w-[50%]" alt="" />}
          to="/all-channels"
        />
        <ChannelBox
          label="All Categories"
          img={<img src="images/all.svg" className="w-[50%]" alt="" />}
          to="/all-categories"
        />
      </div>
      <div className="py-4 lg:py-7 px-5 lg:px-8 border-t-1px lg:border-t-0 lg:border-l-1px border-primary w-full col-span-2">
        <p className="text-base font-bold mb-6 uppercase text-primary">
          Channels
        </p>

        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:flex flex-wrap items-center lg:-mx-3 lg:-my-3">
          {channels && channels.length > 0
            ? channels.map((item, i) => (
                <img
                  src={item.img}
                  key={i}
                  alt="abc"
                  className={`lg:mx-3 lg:my-3 ${item.className}`}
                  // onClick={() => {
                  //   handleWatchLive(item.id)
                  // }}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ChannelsDropdownBody;
