import Button from "components/Button";
import Title from "components/Title";
import { ToastMessage } from "components/ToastMessage";
import React, { useEffect, useState } from "react";
import Api from "services/api";
import LocalServices from "services/LocalServices";
import { helper } from "utils/helper";

function ShareRefferal() {

  const userId = LocalServices.getServices("user")?.userId || null;
  const [profile, setProfile] = useState(null);

  const viewUserProfile = (userId) => {
    Api.viewUserProfile(userId, 'dashboard').then((res) => {
      if(res && res.status === 200) {
        setProfile(res.data.data);
      }
    })
  }

  const copyToClipboard = () => {
    if (profile?.referralCode) {
      const textField = document.createElement('textarea')
      textField.innerText = profile.referralCode
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      ToastMessage('Copied!', true);
      helper.trackByMixpanel('Referral Shared By', {
        email: profile?.email || 'N/A',
        referral_code: profile?.referralCode || 'N/A'
      })
      textField.remove()
    }
  }

  useEffect(() => {
    if(userId) {
      viewUserProfile(userId)
    }
  }, [])

  return (
    <div className="dashboard-top-spacing dashboard-bottom-spacing dashboard-layout">
      <div className="mb-12 md:mb-16">
        <Title className="font-semibold text-primary mb-3" variant="24">
          Share Referral
        </Title>
        <p className="text-sm md:text-base opacity-80">
          Hey {profile?.firstName || ''} want to refer your friends and get rewarded for doing so? Great!  You will earn referral points for every friend that signs up via your referral code. Your friend must verify themselves and begin interacting with the ecosystem to earn these points. Any attempt to decieve or fake the referral process will lead to points being removed. By referring others, you agree that you have the permission to provide Script Network with the information set forth above. All information submitted to Script Network is subject to our Privacy Policy
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
              {profile?.referralCode || ''}
            </p>
          </div>
          <Button
            label="Copy Link"
            className="flex-[.6] text-center justify-center"
            buttonProps={{
              onClick: () => copyToClipboard()
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShareRefferal;
