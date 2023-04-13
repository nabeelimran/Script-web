import Button from "components/Button";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import { helper } from "utils/helper";

function HowToBuy() {
  return (
    <>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <Navbar />
      </div>
      <div className="mb-4 sm:mb-6 lg:mb-20">
        <h2 className="text-center font-semibold text-4xl mb-6">
          SCPT <span className="ml-2 text-primary">FINANCE</span>
        </h2>
        <div className="flex justify-center">
          <Button
            label="Join Presale"
            buttonProps={{
              onClick: () => helper.openLink("https://presale.script.tv/"),
            }}
            className="w-[200px] h-[60px] justify-center"
          />
        </div>
      </div>
      <div className="mb-4 sm:mb-6 lg:mb-10">
        <h2 className="mb-5 text-center font-semibold text-4xl">
          How to buy <span className="text-primary">SCPT Finanace</span> (SCPT)
        </h2>
        <p className="text-lg text-center text-[#999]">
          Beginners guide on how to buy $SCPT tokens.
        </p>

        <ul className="container mt-20">
          <li className="mb-20">
            <p className="text-2xl font-semibold mb-1">Step 1:</p>
            <p className="text-lg">
              The First Step Is To Ensure You Have One Of The Supported Wallets
              By Wallet Connect.
            </p>

            <p className="text-2xl font-semibold mb-1 mt-6">For Desktop:</p>
            <p className="text-lg">
              We Recommend Using MetaMask Browser Plugin For Chome Or Firefox.
            </p>

            <p className="text-2xl font-semibold mb-1 mt-6">For Mobile:</p>
            <p className="text-lg">
              We Recommend Using Trust Wallet And Connecting Through The In
              Built Browser.
            </p>
          </li>

          <li className="mb-10">
            <p className="text-2xl font-semibold mb-1">Step 2:</p>
            <p className="text-lg">
              Once You Have Your Preferred Wallet Provider Ready, Click “Connect
              Wallet” And Select The Appropriate Option. For Mobile Wallet Apps
              You Will Need To Select “Wallet Connect”.
            </p>
            <p className="text-lg">You Will Then Have 3 Options:</p>

            <div className="flex flex-row gap-10 mt-20 mb-10">
              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff]">
                <h2 className="mb-4 text-center font-semibold text-primary text-2xl">
                  Buy SCPT with ETH
                </h2>
                <p className="text-md text-[#999] mb-4">
                  Make sure you have enough ETH in your MetaMask or Trust Wallet
                  to complete the transaction. We recommend to have atleast $20
                  worth of ETH (If you don't have enought ETH please transfer
                  ETH from any crypto exchange to your wallet address.)
                </p>
                <p className="text-md text-[#999] mb-4">
                  Now you can swap ETH to SCPT. Click on Buy With ETH, enter
                  desiered amount of ETH you want to swap for RENQ and click Buy
                  Now. Your wallet provider will ask you to confirm the
                  transaction and will also show you the cost of gas.
                </p>
                <p className="text-md text-[#999] mb-4">
                  Remember ETH is also used in gas fees for the transaction so
                  don't use max button while buying with ETH.
                </p>
              </div>
              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff]">
                <h2 className="mb-4 text-center font-semibold text-primary text-2xl">
                  Buy SCPT with USDT
                </h2>

                <p className="text-md text-[#999] mb-4">
                  Make sure you have USDT for the amount you wish to purchase
                  SCPT tokens in your MetaMask or Trust Wallet. We recommend to
                  have atleast $20 worth of ETH for gas fees (If you don't have
                  enought ETH please transfer ETH from any crypto exchange to
                  your wallet address.)
                </p>
                <p className="text-md text-[#999] mb-4">
                  Now you can swap USDT to SCPT. Click on Buy With USDT, enter
                  desiered amount of USDT you want to swap for SCPT and click
                  Buy Now. You will then be asked to approve the purchase TWICE.
                  The first approval is for the USDT contract and the second is
                  for the transaction amount. Please ensure you go through both
                  approval steps in order to complete the transaction.
                </p>
                <p className="text-md text-[#999] mb-4">
                  Remember ETH will still be required to approve and confirm the
                  transaction as gas fees for ethereum network, so always have
                  atleast $20 worth of ETH in your wallet.
                </p>
              </div>

              <div className="bg-shade-grayis rounded-xl w-full p-5 text-center border border-[#999] hover:border-[#fff]">
                <h2 className="mb-4 text-center font-semibold text-primary text-2xl">
                  Buy SCPT with Card
                </h2>
                <p className="text-md text-[#999] mb-4">
                  Although this option is not visible on our website, new DeFi
                  users can purchase SCPT with credit/debit card as well. (No
                  verification or KYC is needed for this process)
                </p>
                <p className="text-md text-[#999] mb-4">
                  Visit{" "}
                  <a href="/" target="_blank">
                    https://www.moonpay.com/buy
                  </a>{" "}
                  this will allow you to purchase ETH that will be sent to your
                  wallet. You will then be able to use this ETH to purchase
                  SCPT.
                </p>
                <p className="text-md text-[#999] mb-4">
                  Visit{" "}
                  <a href="/" target="_blank">
                    https://www.moonpay.com/buy
                  </a>{" "}
                  to begin and follow the on screen steps. We recommend
                  purchasing a minimum of $20 worth of ETH to cover the all
                  expenses including gas fees to buy SCPT.
                </p>
                <p className="text-md text-[#999] mb-4">
                  Once you have acquired ETH, you can buy SCPT using the same
                  wallet.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-10">
            <p className="text-2xl font-semibold mb-1">Step 3:</p>
            <p className="text-lg mb-6">
              You Can Now Check Your Bought SCPT Tokens On SCPT Dashboard.
            </p>

            <p className="text-2xl font-semibold mb-1">SCPT Dashboard:</p>
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
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-4 sm:mb-6 lg:mb-10 mt-20 pb-10">
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
                // onClick: () => helper.openLink("https://presale.script.tv/"),
              }
            }
            className="w-[200px] h-[60px] justify-center"
          />
        </div>
      </div>
      <Footer container="container-two" />
    </>
  );
}

export default HowToBuy;
