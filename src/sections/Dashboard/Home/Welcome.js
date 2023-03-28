import FillBar from "components/FillBar";
import Title from "components/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { setRewardPoints } from "redux/reducers/RewardPoint_State";
import Card from "components/Dashboard/Card";
import CardProgress from "components/Dashboard/CardProgress";
import { getVoucherEligibility, getVoucherSignature } from "utils/api";
import {
  approveVoucher,
  balanceOf,
  checkVoucherApproval,
  mintVoucher,
} from "contract/functions";

const voucherType = ["COMMON", "RARE", "SUPERSCRIPT"];

function Welcome({}) {
  const user = LocalServices.getServices("user");
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const { updateRewardPointState } = useSelector(
    (state) => state.RewardPoint_State
  );

  const { accountAddress } = useSelector((state) => state.metamask_state);

  const [isVoucherApproved, setIsVoucherApproved] = useState(false);
  const [balance, setBalance] = useState(0);

  const [voucherEligible, setVoucherEligible] = useState({
    eligibility: false,
    types: [false, false, false],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!accountAddress) return;
      await checkVoucherEligibility();
      await handleCheckVoucherApproval();
      await getBalance();
    })();
  }, [accountAddress]);

  const goToTVSite = () =>
    navigate({
      pathname: "/tv",
    });

  const getBalance = async () => {
    if (accountAddress) {
      const balance = await balanceOf(accountAddress);
      setBalance(Number(balance));
    }
  };

  const handleCheckVoucherApproval = async () => {
    if (accountAddress) {
      let approval = await checkVoucherApproval(accountAddress);
      setIsVoucherApproved(approval);
    }
  };

  const handleApproveVoucher = async () => {
    if (accountAddress) {
      await approveVoucher();
      await handleCheckVoucherApproval();
    }
  };

  const checkVoucherEligibility = async () => {
    if (accountAddress) {
      let eligibility = await getVoucherEligibility(
        accountAddress.toLowerCase()
      );
      console.log("Eligible >", eligibility);
      setVoucherEligible(eligibility);
    }
  };

  const handleVoucherMint = async (type) => {
    if (accountAddress && voucherEligible.eligibility) {
      if (!isVoucherApproved) {
        await handleApproveVoucher();
      }
      if (isVoucherApproved) {
        const res = await getVoucherSignature(
          accountAddress.toLowerCase(),
          type
        );
        await mintVoucher(
          res.address,
          res.voucherType,
          res.nonce,
          res.signature
        );
        checkVoucherEligibility();
      }
    }
  };

  const getTotalRewardPoints = () => {
    if (user && user.userId) {
      Api.getMyRewardPointTotal(user.userId, "reward-management").then(
        (res) => {
          if (res && res.status === 200) {
            setTotalRewardPoints(res.data.data.myRewards);
            dispatch(setRewardPoints(res.data.data.myRewards));
          }
        }
      );
    }
  };

  const handlePaidMint = async () => {
    navigate("/dashboard/mint");
  };

  useEffect(() => {
    getTotalRewardPoints();
  }, [updateRewardPointState]);

  return (
    <div className="dashboard-top-spacing pb-8 lg:pb-12 bg-[#18181A] relative z-10">
      <div className="dashboard-layout">
        <Title variant="20" className="font-semibold text-center mb-3">
          Welcome Back, {user?.userName || ""}
        </Title>
        <h1
          onClick={goToTVSite}
          className="text-base lg:text-base xl:text-xl text-center text-primary font-semibold mb-7"
        >
          Head back to TV
        </h1>

        <div className="space-y-1 mb-8 lg:mb-12">
          <p className="fs-20px font-medium">
            Welcome to your Script TV dashboard
          </p>
          <p className="text-sm">
            Connect and interact with viewers, and build community around your
            passions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          <Card
            color="#5815BA"
            title="Nice Work!"
            description="You have earned N/A SPAY this week!"
          />

          <CardProgress
            color="#0E0E0F"
            title="N/A SPAY"
            description="Accumulate 10,000 SPAY"
            barColor="#FF38DC"
            progress="90%"
            bgColor="#A6A6A6"
          />

          <CardProgress
            color="#0E0E0F"
            title="N/A SCPT"
            description="Connect on live chat 5x a week"
            progress="100%"
          />

          <CardProgress
            color="#0E0E0F"
            title={
              totalRewardPoints ? `${totalRewardPoints} POINTS` : `N/A POINTS`
            }
            description="Accumulate Script Points"
            progress="100%"
          />

          {voucherEligible.eligibility && (
            <>
              {voucherEligible.types.map(
                (available, idx) =>
                  available && (
                    <Card
                      key={idx.toString()}
                      color="#00A12D"
                      title="MINT VOUCHER!"
                      description={`You are now eligible to mint a ${voucherType[idx]} voucher!`}
                      clickHandler={() => {
                        handleVoucherMint(idx);
                      }}
                    />
                  )
              )}
            </>
          )}

          <Card
            color="#5815BA"
            title="Mint Glasses!"
            description="Mint glasses to start earning SPAY"
            clickHandler={handlePaidMint}
          />

          <Card
            title={`${balance.toFixed(2)} SPAY`}
            color="#0E0E0F"
            description="watch to earn!"
          />
        </div>
      </div>

      <img
        src="images/dashboard-home-circles.svg"
        className="absolute bottom-0 left-16 -z-10 w-[180px]"
        alt=""
      />

      <img
        src="images/rectangular-boxes.png"
        className="absolute bottom-4 right-6 -z-10 w-[74px]"
        alt=""
      />
    </div>
  );
}

export default Welcome;
