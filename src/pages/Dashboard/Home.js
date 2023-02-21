import Rewards from "pages/Rewards";
import React, { useEffect, useState } from "react";
import Gems from "sections/Dashboard/Home/Gems";
import InventoryTrade from "sections/Dashboard/Home/InventoryTrade";
import Tip from "sections/Dashboard/Home/Tip";
import Welcome from "sections/Dashboard/Home/Welcome";
import Api from "services/api";
import LocalServices from "services/LocalServices";

function Home() {

  const userId = LocalServices.getServices("user")?.userId || null;
  const [profile, setProfile] = useState(null);

  const viewUserProfile = (userId) => {
    Api.viewUserProfile(userId, 'dashboard').then((res) => {
      if(res && res.status === 200) {
        setProfile(res.data.data);
      }
    })
  }

  useEffect(() => {
    if(userId) {
      viewUserProfile(userId)
    }
  }, [])


  return (
    <div className="min-h-screen pb-14">
      <div className="mb-8">
        <Welcome profile={profile}/>
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
