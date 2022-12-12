import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { Icon } from "@iconify/react";
import DividerLine from "components/DividerLine";
import HeadingSmall from "components/HeadingSmall";

const SliderContent = () => {
  return (
    <div className="h-[auto] md:h-full relative z-10 rounded-xl overflow-hidden">
      <img
        // src="images/tv/hero-banner.png"
        src="images/tv-banner-3.png"
        className="h-[200px] md:absolute top-0 left-0 w-full md:h-full"
        alt=""
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] z-20"></div> */}
    </div>
  );
};

function Hero() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div>
      <div className="container grid md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_356px] gap-6 sm:gap-8">
        <div className="relative min-w-full">
          <Swiper
            className="rounded-xl overflow-hidden h-[auto] md:h-full"
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: ".bullet-pagination",
              bulletClass: "people-slider-bullet",
              bulletActiveClass: "active",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span className="' + className + '">' + "" + "</span>";
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
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent />
            </SwiperSlide>
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
                Minutes watched in total
              </HeadingSmall>
              <p className="text-sm xl:text-base font-bold">5,400 Minutes</p>
            </div>

            <DividerLine />

            <div className="px-6">
              <HeadingSmall className="mb-1">
                Minutes watched in the last 24 hours
              </HeadingSmall>

              <p className="text-sm xl:text-base font-bold">24 Minutes</p>
            </div>

            <DividerLine />

            <div className="px-6 flex items-center justify-between space-x-6">
              <HeadingSmall>Most watched channel:</HeadingSmall>

              <div>
                <img
                  src="/images/tv/cultured-one.svg"
                  className="w-[90px]"
                  alt=""
                />
              </div>
            </div>

            <DividerLine />

            <div className="px-6 flex items-center space-x-4 justify-between">
              <div>
                <p className="text-sm xl:text-base font-medium">#535435</p>
                <HeadingSmall>Favourite Glasses</HeadingSmall>
              </div>

              <img
                src="/images/cool-glasses.png"
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
