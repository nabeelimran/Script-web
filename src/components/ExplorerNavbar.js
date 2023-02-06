import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import UpperRoot from "./UpperRoot";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import { useDispatch, useSelector } from "react-redux";
import Api from "services/api";
import { helper, isBnbUser } from "utils/helper";
import LocalServices from "services/LocalServices";

function ExplorerNavbar({ className }) {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));
  const userId = LocalServices.getServices("user")?.userId || null;
  const { updateProfileState } = useSelector((state) => state.Profile_State);
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [channels, setChannels] = useState([]);

  const getChannels = () => {
    Api.getAllChannels(5, "header").then((res) => {
      if (res && res.status === 200) {
        setChannels(res.data.data);
      }
    });
  };

  const viewUserProfile = (userId) => {
    Api.viewUserProfile(userId, "dashboard").then((res) => {
      if (res && res.status === 200) {
        setProfile(res.data.data);
      }
    });
  };

  useEffect(() => {
    if (userId) {
      viewUserProfile(userId);
    }
  }, [updateProfileState]);

  useEffect(() => {
    getChannels();
    if (isSidebarVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSidebarVisible]);

  const checkToken = () => sessionStorage.getItem("script-token") || null;

  const goToDashboard = () =>
    navigate({
      pathname: "/dashboard",
    });

  return (
    <UpperRoot>
      <div className="container py-5 xl:py-7 flex items-center justify-between z-[200] relative">
        <Link to="/explorer">
          <img
            src="images/logo-beta.svg"
            className="w-[100px] xl:w-[144px]"
            alt=""
          />
        </Link>

        <div>
          <button
            className="block lg:hidden text-2xl"
            onClick={() => setSidebarVisibility((val) => !val)}
          >
            <Icon icon="charm:menu-hamburger" />
          </button>

          <div
            ref={sidebarRef}
            className={`p-12 lg:p-0 flex flex-col lg:flex-row lg:items-center lg:space-x-10 xl:space-x-10 fixed lg:static top-0 right-0 w-[300px] lg:w-auto h-full border-l-2 border-primary lg:border-none transition-all duration-300 bg-black lg:bg-transparent z-[110] overflow-y-auto lg:overflow-y-visible ${
              isSidebarVisible
                ? "translate-x-0"
                : "translate-x-[300px] lg:translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between lg:hidden mb-10">
              <img
                src="images/logo.svg"
                className="w-[60%] cursor-pointer block lg:hidden"
                alt=""
              />

              <button
                className="flex text-lg"
                onClick={() => setSidebarVisibility(false)}
              >
                <Icon icon="maki:cross" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-5 lg:space-y-0 lg:space-x-6 xl:space-x-6">
              <Link
                to="/blocks"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Blocks
              </Link>

              <Link
                to="/txs"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Transactions
              </Link>

              <Link
                to="/stake"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                Staking
              </Link>
              <Link
                to="/tv"
                className="nav-link text-sm xl:text-base font-medium cursor-pointer"
              >
                More
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
              <Button
                // link="/marketplace"
                className="mt-8 lg:mt-0 flex justify-center"
                customizationClassName="space-x-3 px-5 rounded-lg font-semibold"
                buttonHeightClassName="min-h-[30px] xl:min-h-[32px]"
                label={
                  <span className="text-xs xl:text-sm text-black">
                    MarketPlace
                  </span>
                }
                buttonProps={{
                  onClick: () => {
                    helper.comingSoonNotification();
                    helper.trackByMixpanel("Market Place Button Clicked", {});
                  },
                }}
              />
              {checkToken() ? (
                <div
                  className="w-[34px] rounded-full h-[34px] relative"
                  onClick={goToDashboard}
                >
                  <div className="w-[10px] h-[10px] rounded-full bg-[#3FC864] absolute top-0 right-0"></div>
                  <img
                    src={
                      isBnbUser()
                        ? "/images/bnb-default-avatar.png"
                        : profile?.profile?.urlProfileImage
                        ? profile?.profile?.urlProfileImage
                        : "/images/dashboard/user.png"
                    }
                    className="rounded-full w-full"
                    alt=""
                  />
                </div>
              ) : (
                <Button
                  buttonProps={{
                    onClick: () => {
                      setSidebarVisibility(false);
                      dispatch(toggleModalVisibility(true));
                      helper.trackByMixpanel("Sign In Button Clicked", {});
                    },
                  }}
                  label={
                    <span className="text-xs xl:text-sm text-black">
                      Sign in / Sign up
                    </span>
                  }
                  className="mt-8 lg:mt-0 flex justify-center text-center"
                  customizationClassName="space-x-3 px-5 rounded-lg font-semibold"
                  buttonHeightClassName="min-h-[30px] xl:min-h-[32px]"
                />
              )}
            </div>
          </div>
        </div>

        <div className={`black-screen ${isSidebarVisible ? "show" : ""}`}></div>
      </div>
    </UpperRoot>
  );
}

export default ExplorerNavbar;
