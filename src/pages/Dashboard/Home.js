import { glassesOfOwnerServer } from "contract/functions";
import Rewards from "pages/Rewards";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlasses } from "redux/reducers/Profile_State";
import Gems from "sections/Dashboard/Home/Gems";
import InventoryTrade from "sections/Dashboard/Home/InventoryTrade";
import Tip from "sections/Dashboard/Home/Tip";
import Welcome from "sections/Dashboard/Home/Welcome";
import Api from "services/api";
import LocalServices from "services/LocalServices";

function Home() {
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await getGlasses();
    })();
  }, [accountAddress]);

  const getGlasses = async () => {
    const response = await glassesOfOwnerServer(accountAddress);

    dispatch(setGlasses(response));
  };

  return (
    <div className="min-h-screen pb-14">
      <div className="mb-8">
        <Welcome />
      </div>

      <div className="mb-12">
        <InventoryTrade />
      </div>

      <div className="mb-12">
        <Gems />
      </div>

      <Rewards />
      {/* <Tip /> */}
    </div>
  );
}

export default Home;
