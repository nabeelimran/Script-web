import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Icon } from "@iconify/react";
import Title from "components/Title";
import Button from "components/Button";

const SliderContent = () => {
  return (
    <div className="h-[350px] relative z-10 rounded-xl overflow-hidden">
      <img src="images/tv/hero-banner.png" className="w-full h-full" alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] z-20"></div>
    </div>
  );
};

function Hero() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div>
      <div className="container">
        <div className="relative mb-12">
          <Swiper
            className="rounded-xl overflow-hidden"
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

        <div className="space-y-6 flex flex-col items-center">
          <Title>
            The worlds first <span className="text-primary">web3 Live</span>{" "}
            Television platform
          </Title>

          <Button label="Watch Live Now" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
