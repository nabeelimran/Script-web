import { Icon } from "@iconify/react";
import GemModal from "components/Dashboard/GemModal";
import GlassModal from "components/Dashboard/GlassModal";
import RechargeModal from "components/Dashboard/RechargeModal";
import InventoryTradeCard from "components/InventoryTradeCard";
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getGemsEligibility } from "utils/api";
import { helper } from "utils/helper";
import LoaderGif from "../../../assets/Loading_icon.gif";

// const glasses = [
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535435'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535436'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535437'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535438'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535439'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535440'
//   },
//   {
//     img: helper.glassImages[Math.floor(Math.random() * helper.glassImages.length)],
//     id: '#535441'
//   }
// ]

function InventoryTrade() {
  const prevRef = useRef();
  const nextRef = useRef();

  const [index, setIndex] = useState(0);
  const [openGlassModal, setOpenGlassModal] = useState(false);
  const [openRechargeModal, setOpenRechargeModal] = useState(false);
  const [openGemModal, setOpenGemModal] = useState(false);
  const [gemEligibleGlasses, setGemEligibleGlasses] = useState();

  const { glasses } = useSelector((state) => state.Profile_State);

  const { accountAddress } = useSelector((state) => state.metamask_state);

  console.log("InventoryTrade ", glasses);

  useEffect(() => {
    if (accountAddress && glasses?.length) {
      getGemEligibleGlasses();
    }
  }, [glasses]);

  const getGemEligibleGlasses = async () => {
    if (accountAddress) {
      let glasses = await getGemsEligibility(accountAddress);
      setGemEligibleGlasses(glasses);
    }
  };

  const handleClick = (index) => {
    setIndex(index);
    setOpenGlassModal(true);
  };

  const handleSell = () => {};

  const handleAddGem = () => {
    setOpenGemModal(true);
  };

  const handleRecharge = () => {
    setOpenRechargeModal(true);
  };

  const handleAction = (action) => {
    switch (action) {
      case "sell":
        handleSell();
        break;

      case "add gem":
        handleAddGem();
        break;

      case "recharge":
        handleRecharge();
        break;

      default:
        break;
    }
  };

  return (
    <div className="dashboard-layout">
      <h1 className="fs-20px font-medium mb-7">My Inventory Trade Here</h1>

      <div className="relative">
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
          {glasses.length === 0 ? (
            <div className="flex flex-row justify-center">
              <h1 className="fs-16px font-medium mb-7">
                Inventory Trade Not Found
              </h1>
            </div>
          ) : (
            <>
              {glasses.map((glass, index) => {
                return (
                  <SwiperSlide>
                    <InventoryTradeCard
                      onClick={() => handleClick(index)}
                      glass={glass}
                      // img={
                      //   helper.glassImages[
                      //     Math.floor(Math.random() * helper.glassImages.length)
                      //   ]
                      // }
                    />
                  </SwiperSlide>
                );
              })}
            </>
          )}

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

      <GlassModal
        id={glasses[index]?.id}
        img={glasses[index]?.img}
        open={openGlassModal}
        setOpen={setOpenGlassModal}
        handleAction={handleAction}
        gemEligible={
          !!gemEligibleGlasses?.length &&
          !!gemEligibleGlasses.includes(glasses[index]?.id)
        }
      />

      <GemModal
        id={glasses[index]?.id}
        img={glasses[index]?.img}
        open={openGemModal}
        setOpen={setOpenGemModal}
        setGemEligibleGlasses={setGemEligibleGlasses}
      />

      <RechargeModal
        glass={glasses[index]}
        open={openRechargeModal}
        setOpen={setOpenRechargeModal}
      />
    </div>
  );
}

export default InventoryTrade;
