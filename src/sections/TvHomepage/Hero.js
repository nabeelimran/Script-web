import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Icon } from "@iconify/react";
import DividerLine from "components/DividerLine";
import HeadingSmall from "components/HeadingSmall";
import LocalServices from "services/LocalServices";
import Api from "services/api";
import { useSelector } from "react-redux";

const SliderContent = ({ img, link }) => {
  return (
    <div className="h-[auto] md:h-full relative z-10 rounded-xl overflow-hidden">
      {link ? (
        <a href={link} target="_blank">
          <img
            // src="images/tv/hero-banner.png"
            src={img}
            className="w-full md:h-full"
            alt=""
          />
        </a>
      ) : (
        <img
          // src="images/tv/hero-banner.png"
          src={img}
          className="w-full md:h-full"
          alt=""
        />
      )}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] z-20"></div> */}
    </div>
  );
};

function Hero() {
  const prevRef = useRef();
  const nextRef = useRef();
  const token = LocalServices.getServices("token");
  const [videoWatchDuration, setVideoWatchDuration] = React.useState(0);
  const [lastDayWatchVideoDuration, setLastDayWatchVideoDuration] =
    React.useState(0);
  const [lastVideoHistory, setLastVideoHistory] = React.useState(null);
  let userId = LocalServices.getServices("user")?.userId || null;
  const { isLogin } = useSelector((state) => state.login_state);

  React.useEffect(() => {
    if (userId) {
      getVideoWatchDuration(userId);
      getLastShowWatchHistory(userId);
    }
  }, [userId, isLogin]);

  const getVideoWatchDuration = (userId) => {
    Api.getVideoWatchDuration(userId, "watch").then((res) => {
      if (res && res.status === 200) {
        setVideoWatchDuration(res.data.data.totalWatchVideoDuration);
        setLastDayWatchVideoDuration(res.data.data.lastDayWatchVideoDuration);
      }
    });
  };

  const getLastShowWatchHistory = (userId) => {
    Api.getLastWatchShowHistory(userId, "watch").then((res) => {
      if (res && res.status === 200) {
        setLastVideoHistory(res.data.data);
      }
    });
  };

  const bannerImgages = [
    // {
    //   image: "images/bitcoin-pizza.png",
    //   link: "https://www.twitter.com/script_network",
    // },
    {
      image: "images/final_sprint.png",
      link: "",
    },
    {
      image: "images/community-ama.png",
      link: "",
    },
    {
      image: "images/test-launch.gif",
      link: "",
    },
    // {
    //   image: "images/Partnerships.png",
    //   link: "https://presale.script.tv/",
    // },
    {
      image: "images/collect-points.png",
      link: "https://crew3.xyz/c/scriptnetwork/questboard",
    },
    {
      image: "images/minutes-watched.png",
      link: "",
    },
    {
      image: "images/collect-points.png",
      link: "https://crew3.xyz/c/scriptnetwork/questboard",
    },
    {
      image: "images/minutes-watched.png",
      link: "",
    },
  ];

  return (
    <div>
      <div className="container grid md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_356px] gap-6 sm:gap-8">
        <div className="relative min-w-full">
          <Swiper
            className="rounded-xl overflow-hidden h-[auto] md:h-full"
            spaceBetween={30}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".bullet-pagination",
              bulletClass: "people-slider-bullet",
              bulletActiveClass: "active",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span className="${className}"></span>`;
                // return '<span className="' + className + '">' + "" + "</span>";
              },
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            {bannerImgages &&
              bannerImgages.map((img, index) => (
                <SwiperSlide key={index}>
                  <SliderContent img={img.image} link={img.link} />
                </SwiperSlide>
              ))}

            {/* <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide> */}
          </Swiper>

          <div className="absolute bottom-6 right-8 z-50 rounded-full overflow-hidden flex items-center">
            <button
              ref={prevRef}
              className="min-w-[22px] group/navigator h-5 flex items-center justify-end text-sm text-black bg-white"
            >
              <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                className="invert group-disabled/navigator:opacity-30"
              />
            </button>
            <button
              ref={nextRef}
              className="min-w-[22px] h-5 flex group/navigator items-center justify-start text-sm text-black bg-white"
            >
              <Icon
                icon="material-symbols:arrow-forward-ios-rounded"
                className="invert group-disabled/navigator:opacity-30"
              />
            </button>
          </div>

          <div className="bullet-pagination z-40 space-x-2 absolute bottom-7 left-0 w-full flex items-center justify-center"></div>
        </div>

        <div className="bg-[#0D0D0D] py-6 rounded-xl">
          <p className="fs-20px font-semibold mb-4 px-6">Your Mini Dashboard</p>

          <div className="space-y-4">
            <div className="px-6">
              <HeadingSmall className="mb-1">
                Minutes watched in total (as of yesterday)
              </HeadingSmall>
              <p className="text-sm xl:text-base font-bold">
                {token
                  ? `${videoWatchDuration ? videoWatchDuration : 0} Minutes`
                  : "N/A"}
              </p>
            </div>

            <DividerLine />

            <div className="px-6">
              <HeadingSmall className="mb-1">
                Minutes watched yesterday
              </HeadingSmall>

              <p className="text-sm xl:text-base font-bold">
                {token
                  ? `${
                      lastDayWatchVideoDuration ? lastDayWatchVideoDuration : 0
                    } Minutes`
                  : "N/A"}
              </p>
            </div>

            <DividerLine />

            <div className="px-6 flex items-center justify-between space-x-6">
              <HeadingSmall>Most watched channel:</HeadingSmall>

              <div>
                {token && lastVideoHistory?.channelImageLink ? (
                  <img
                    src={lastVideoHistory?.channelImageLink}
                    className="w-[90px]"
                    alt={
                      lastVideoHistory?.channelName
                        ? lastVideoHistory?.channelName
                        : "default"
                    }
                  />
                ) : (
                  "N/A"
                )}
              </div>
            </div>

            <DividerLine />

            <div className="px-6 flex items-center space-x-4 justify-between">
              <div>
                <p className="text-sm xl:text-base font-medium">N/A</p>
                <HeadingSmall>Favourite Glasses</HeadingSmall>
              </div>

              <img
                src="/images/green-glasses.png"
                className="w-[60px] xl:w-[80px]"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="space-y-6 flex flex-col items-center">
          <Title>
            The worlds first <span className="text-primary">web3 Live</span>{" "}
            Television platform
          </Title>

          <Button label="Watch Live Now" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
