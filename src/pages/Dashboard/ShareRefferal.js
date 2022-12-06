import Button from "components/Button";
import Title from "components/Title";
import React from "react";

function ShareRefferal() {
  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout">
      <div className="mb-12 md:mb-16">
        <Title className="font-semibold text-primary mb-3" variant="24">
          Share Referral
        </Title>
        <p className="text-sm md:text-base opacity-80">
          Hey Washim Akram Shishir want to refer your friends? You will earn
          referral points for every friend that signs up via your referral code
          and purchase subscription. Enter Space Separated Email Addresses You
          agree that you have the permission to provide Script-Tv with the
          information set forth above. All information submitted to Script-Tv is
          subject to our Privacy Policy
        </p>
      </div>

      <div className="max-w-[500px] mx-auto">
        <img src="/images/share.png" className="w-full mb-6 md:mb-11" alt="" />

        <div className="flex rounded-lg overflow-hidden">
          <div className="h-[40px] md:h-[50px] flex-1 bg-[#0E0E0F] px-5 pr-8 flex items-center overflow-hidden -mr-4">
            <p
              className="cut-text w-full min-w-full lh-1 text-sm md:text-base"
              style={{ "--width": "auto" }}
            >
              KqJGE7ri4P askldjas djaklsd jkajsdklas jkldj
            </p>
          </div>
          <Button
            label="Copy Link"
            className="flex-[.6] text-center justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default ShareRefferal;
