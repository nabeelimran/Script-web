import { Icon } from "@iconify/react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
  const [type, setType] = useState(0);

  const [openGlassModal, setOpenGlassModal] = useState(false);
  const [openRechargeModal, setOpenRechargeModal] = useState(false);
  const [openGemModal, setOpenGemModal] = useState(false);
  const [gemEligibleGlasses, setGemEligibleGlasses] = useState();

  const { glasses } = useSelector((state) => state.Profile_State);

  const [_glasses, _setGlasses] = useState([]);

  const { accountAddress } = useSelector((state) => state.metamask_state);

  console.log("InventoryTrade ", glasses);

  useEffect(() => {
    if (accountAddress && glasses?.length) {
      getGemEligibleGlasses();
    }
  }, [glasses]);

  useEffect(() => {
    if (glasses.length) {
      _setGlasses(glasses);
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

  const handleTypeSelect = (e) => {
    setType(Number(e.target.value));
    let glassType = e.target.value;
    if (glassType === 0) {
      _setGlasses(glasses);
    } else if (glassType === 1) {
      _setGlasses(glasses.filter((glass) => glass.type === "COMMON"));
    } else if (glassType === 2) {
      _setGlasses(glasses.filter((glass) => glass.type === "RARE"));
    } else if (glassType === 3) {
      _setGlasses(glasses.filter((glass) => glass.type === "SUPERSCRIPT"));
    }
  };

  console.log("InventoryTrade type ", type);

  return (
    <div className="dashboard-layout">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <h1 className="fs-20px font-medium mb-7">My Inventory Trade Here</h1>
        <Box>
          <FormControl
            sx={{
              minWidth: 150,
            }}
          >
            <InputLabel>Glass Type </InputLabel>
            <Select
              value={type.toString()}
              label="Glass Type"
              onChange={handleTypeSelect}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Common</MenuItem>
              <MenuItem value={2}>Rare</MenuItem>
              <MenuItem value={3}>Superscript</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

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
          {_glasses.length === 0 ? (
            <div className="flex flex-row justify-center">
              <h1 className="fs-16px font-medium mb-7">No Glasses</h1>
            </div>
          ) : (
            <>
              {_glasses.map((glass, index) => {
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

      {_glasses[index] && (
        <GlassModal
          id={_glasses[index]?.id}
          img={_glasses[index]?.img}
          glass={_glasses[index]}
          open={openGlassModal}
          setOpen={setOpenGlassModal}
          handleAction={handleAction}
          gemEligible={
            !!gemEligibleGlasses?.length &&
            !!gemEligibleGlasses.includes(_glasses[index]?.id)
          }
        />
      )}

      {_glasses[index] && (
        <GemModal
          id={_glasses[index]?.id}
          img={_glasses[index]?.img}
          open={openGemModal}
          setOpen={setOpenGemModal}
          setGemEligibleGlasses={setGemEligibleGlasses}
        />
      )}

      {_glasses[index] && (
        <RechargeModal
          glass={_glasses[index]}
          open={openRechargeModal}
          setOpen={setOpenRechargeModal}
        />
      )}
    </div>
  );
}

export default InventoryTrade;
