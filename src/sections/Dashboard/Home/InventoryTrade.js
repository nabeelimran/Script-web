import { Icon } from "@iconify/react";
import InventoryTradeCard from "components/InventoryTradeCard";
import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const glassImages = [
  'images/blue-glasses.png',
  'images/yellow-glasses.png',
  'images/green-glasses.png',
  'images/orange-glasses.png'
]

const glasses = [
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535435'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535436'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535437'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535438'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535439'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535440'
  },
  {
    img: glassImages[Math.floor(Math.random() * glassImages.length)],
    id: '#535441'
  }
]


function InventoryTrade() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div className="dashboard-layout">
      <h1 className="fs-20px font-medium mb-7">My Inventory Trade Here</h1>

      <div className="relative">
        {console.log(glasses)}
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          className="overflow-y-visible"
          modules={[Navigation]}
          // centeredSlides={true}
          // loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
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
          breakpoints={{
            760: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            200: {
              slidesPerView: 1.7,
            },
          }}
        >
          {
            glasses.map(glass => {
              return (
                <SwiperSlide>
                  <InventoryTradeCard glass={glass}/>
                </SwiperSlide>
              )
            })
          }
          
          {/* <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide>
          <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide>
          <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide>
          <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide>
          <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide>
          <SwiperSlide>
            <InventoryTradeCard />
          </SwiperSlide> */}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute top-0 -left-[0] w-[40px] h-full flex items-center justify-start z-50 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none text-base lg:text-xl bg-gradient-to-r from-[black] to-[transparent]"
        >
          <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
        </button>

        <button
          ref={nextRef}
          className="absolute top-0 -right-[0] w-[40px] h-full flex items-center justify-end z-50 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none text-base lg:text-xl bg-gradient-to-r from-[transparent] to-[black]"
        >
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            className="rotate-180"
          />
        </button>
      </div>
    </div>
  );
}

export default InventoryTrade;
