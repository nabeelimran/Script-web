import Button from "components/Button";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import analyticsEventTracker from "services/google-analytics/trackAnalyticsEvent";
import { helper } from "utils/helper";

function HowToBuy() {
  return (
    <>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-4 sm:mb-6 lg:mb-20">
        <h2 className="text-center font-semibold lg:text-4xl mb-6 text-primary">
          SCRIPT NETWORK <span className="text-white">(SCPT)</span> PRESALE
        </h2>
        <div className="flex justify-center">
          <Button
            label="Join Presale"
            buttonProps={{
              onClick: () => {
                // helper.openLink("https://presale.script.tv/");
                analyticsEventTracker(
                  "buy-now-on-presale",
                  "click",
                  window.location.pathname
                );
              },
            }}
            className="lg:w-[200px] lg:h-[60px] justify-center"
          />
        </div>
      </div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <h2 className="mb-5 text-center font-semibold lg:text-4xl">
          <span className="text-primary">How To Buy Script Network tokens</span>{" "}
          (SCPT)
        </h2>
        <p className="lg:text-lg text-center">
          Beginners guide on how to buy $SCPT tokens.
        </p>

        <ul className="container mt-10 lg:mt-20">
          <li className="mb-10 lg:mb-20">
            <p className="lg:text-2xl font-semibold mb-1 text-primary">
              Step 1:
            </p>
            <p className="lg:text-lg">
              The First Step Is To Ensure You Have MetaMask and an associated
              wallet.
            </p>

            <p className="lg:text-2xl font-semibold mb-1 mt-6 text-primary">
              For Desktop:
            </p>
            <p className="lg:text-lg">
              We Recommend Using MetaMask Browser{" "}
              <span className="text-primary">
                Plugin For Chrome, Brave Or Firefox
              </span>
              .
            </p>

            <p className="lg:text-2xl font-semibold mb-1 mt-6 text-primary">
              For Mobile:
            </p>
            <p className="lg:text-lg">
              We Recommend Using <span className="text-primary">Metamask</span>{" "}
              And Connecting Through The In Built Browser.
            </p>
          </li>

          <li className="lg:mb-10">
            <p className="lg:text-2xl font-semibold mb-1 text-primary">
              Step 2:
            </p>
            <p className="lg:text-lg">
              Once You Have Metamask Ready, Click{" "}
              <span className="text-primary">“Connect Wallet”</span> And Select
              The Appropriate token you wish to buy in. For Mobile Wallet Apps
              You Will Need To Select{" "}
              <span className="text-primary">“Metamask”</span>.
            </p>
            <p className="text-lg">
              You Will Then Have 4 Options to buy through{" "}
              <span className="text-primary">ETH, BNB, USDT or BUSD:</span>
            </p>

            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-5 mt-20">
              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff] mb-10">
                <div className="flex eth-bsd justify-center">
                  <div className="buy-icon-box">
                    <img src="images/eth.png" alt="" />
                  </div>
                  <div className="buy-icon-box">
                    <img src="images/bsd.svg" alt="" />
                  </div>
                </div>
                <h2 className="mb-4 text-center font-semibold text-primary lg:text-2xl">
                  Buy SCPT With ETH/BNB
                </h2>
                <p className="lg:text-md text-[#999] mb-4">
                  Make sure you have enough ETH/BNB in your MetaMask wallet to
                  complete the transaction. For ETH transactions, we recommend
                  to have at least $10 worth of ETH (If you don't have enough
                  ETH please transfer ETH from any crypto exchange to your
                  wallet address.)
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Now you can swap ETH or BNB to SCPT. Click on Buy ETH or BNB
                  icon, enter desired amount of ETH you want to swap for SCPT
                  and click Buy Now. MetaMask will ask you to confirm the
                  transaction and will also show you the cost of gas.
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Remember ETH/BNB is also used in gas fees for the transaction
                  so don't use max button while buying with ETH or BNB
                </p>
              </div>

              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff] mb-10">
                <div className="flex eth-bsd justify-center">
                  <div className="buy-icon-box">
                    <img src="images/usdt.png" alt="" />
                  </div>
                  <div className="buy-icon-box">
                    <img src="images/busd.png" alt="" />
                  </div>
                </div>
                <h2 className="mb-4 text-center font-semibold text-primary lg:text-2xl">
                  Buy SCPT With USDT/BUSD
                </h2>

                <p className="lg:text-md text-[#999] mb-4">
                  Make sure you have USDT for the amount you wish to purchase
                  SCPT tokens in your MetaMask Wallet. We recommend to have at
                  least $10 worth of ETH for gas fees (If you don't have enough
                  ETH/BNB please transfer ETH from any crypto exchange to your
                  wallet address.)
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Now you can swap USDT or BUSD to SCPT. Click on the USDT or
                  BUSD icon on the presale page, enter desired amount of USDT
                  you want to swap for SCPT and click Buy Now. You will then be
                  asked to approve the purchase TWICE. The first approval is for
                  the USDT/BUSD contract and the second is for the transaction
                  amount. Please ensure you go through both approval steps in
                  order to complete the transaction.
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Remember ETH or BNB will still be required to approve and
                  confirm the transaction as gas fees for ethereum network, so
                  always have at least $10 worth of ETH/BNB in your wallet.
                </p>
              </div>

              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff] mb-10">
                <div className="buy-icon-box">
                  <img src="images/card.png" alt="" />
                </div>
                <h2 className="mb-4 text-center font-semibold text-primary lg:text-2xl">
                  Buy SCPT With Card
                </h2>
                <p className="lg:text-md text-[#999] mb-4">
                  Although this option is not visible on our website, new DeFi
                  users can purchase SCPT with credit/debit card as well. (No
                  verification or KYC is needed for this process)
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Visit{" "}
                  <a
                    href="/"
                    target="_blank"
                    className="text-primary cursor-pointer"
                  >
                    https://www.moonpay.com/buy
                  </a>{" "}
                  this will allow you to purchase ETH that will be sent to your
                  wallet. You will then be able to use this ETH to purchase
                  RENQ.
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Visit{" "}
                  <a
                    href="/"
                    target="_blank"
                    className="text-primary cursor-pointer"
                  >
                    https://www.moonpay.com/buy
                  </a>{" "}
                  to begin and follow the on screen steps. We recommend
                  purchasing a minimum of $10 worth of ETH to cover the all
                  expenses including gas fees to buy SCPT.
                </p>
                <p className="lg:text-md text-[#999] mb-4">
                  Once you have acquired ETH, you can buy SCPT using the same
                  wallet.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10">
            <p className="lg:text-2xl font-semibold mb-1 text-primary">
              Step 3:
            </p>
            <p className="lg:text-lg lg:mb-20">
              You Can Now Check Your Bought SCPT Tokens On the right hand side
              of the presale page where it will say{" "}
              <span className="text-primary">‘Ordered Tokens’</span>. These
              tokens will then be claimable prior to launch through the same
              wallet address used on the week of launch.
            </p>

            {/* <p className="text-2xl font-semibold mb-1">SCPT Dashboard:</p>
            <p className="text-lg">
              Visit:{" "}
              <a className="text-primary" href="/" target="_blank">
                {" "}
                Https://SCPT.Io/Dashboard/
              </a>{" "}
              <br /> Click Connect Wallet, You Can Now See The Amount Of RENQ
              Tokens You Own.
            </p>

            <p className="text-lg mt-6">
              Once The Presale Has Concluded, You Will Be Able To Claim Your
              SCPT Tokens Via SCPT Dashboard Itself.
            </p> */}
          </li>
        </ul>
      </div>

      {/* <div className="mb-4 sm:mb-6 lg:mb-10 mt-20 pb-10">
        <h2 className="mb-6 text-center font-semibold text-4xl">
          SCPT <span className="text-primary">FINANCE</span>
        </h2>
        <div className="flex justify-center mb-6">
          <Button
            label="Join Presale"
            buttonProps={{
              onClick: () => helper.openLink("https://presale.script.tv/"),
            }}
            className="w-[200px] h-[60px] justify-center"
          />
        </div>
        <div className="flex justify-center">
          <Button
            label="Win $250K"
            buttonProps={
              {
                onClick: () => helper.openLink("https://presale.script.tv/"),
              }
            }
            className="w-[200px] h-[60px] justify-center"
          />
        </div>
      </div> */}
      <Footer container="container-two" />
    </>
  );
}

export default HowToBuy;
