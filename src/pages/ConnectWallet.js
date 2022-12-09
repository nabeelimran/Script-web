import { Icon } from "@iconify/react";
import ConnectWalletButton from "components/ConnectWalletButton";
import SocialLoginCard from "components/SocialLoginCard";
import Title from "components/Title";
import TvNavbar from "components/TvNavbar";
import React from "react";
import { Link } from "react-router-dom";

function ConnectWallet() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-4 sm:mb-6 relative z-50">
        <TvNavbar />
      </div>

      <div className="">
        <section className="container">
          <div className="lg:w-[50%]">
            <div className="mb-8 xl:mb-12">
              <Title variant="44" className="font-medium mb-3">
                Welcome Back
              </Title>
              <p className="fs-16px">
                We knew you’d come around, sign in for endless entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 mb-7">
              <ConnectWalletButton
                img="images/metamask.svg"
                title={
                  <>
                    Metamask <span className="text-sm">( Recommended )</span>
                  </>
                }
              />
              <ConnectWalletButton
                img="images/wallet-connect.svg"
                title="Walletconnet"
              />
            </div>

            <div>
              <p className="text-center mb-5">Social</p>

              <div className="flex items-center justify-center space-x-5 mb-6">
                <SocialLoginCard
                  title="Google"
                  icon={<Icon icon="ri:google-fill" className="text-xl" />}
                />
                <SocialLoginCard
                  title="Twitter"
                  icon={<Icon icon="mdi:twitter" className="text-xl" />}
                />
              </div>

              <Link to="/" className="block w-fit mx-auto text-center fs-16px">
                Forget Password?
              </Link>
            </div>
          </div>

          <img
            src="images/connect-wallet-banner.png"
            className="w-full lg:w-auto mt-10 lg:mt-0 max-w-[26rem] lg:max-w-none mx-auto lg:h-screen object-cover lg:absolute top-0 right-0 z-[100]"
            alt=""
          />
        </section>
      </div>
    </div>
  );
}

export default ConnectWallet;
