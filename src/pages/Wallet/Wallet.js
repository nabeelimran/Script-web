import React from "react";
import PageLink from "components/Wallet/PageLink";
import WalletNavbar from "components/Wallet/WalletNavbar";
import Footer from "components/Footer";
import Button from "components/Button";

const Wallet = () => {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <div className="yellow-corner-blob opacity-40" />
      <div className="relative z-50">
        <WalletNavbar />
      </div>

      {/* Wallet */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="flex justify-evenly">
            <div className="bg-[#202125] rounded-lg flex items-center p-5 w-[40%]">
              <div>
                <img src="images/wallet/scpt.svg" alt="" />
              </div>

              <div className="ml-5">
                <h3 className="font-medium text-lg mb-1">SCPT</h3>
                <h4 className="font-medium text-[#9A9A9A]">0</h4>
              </div>
            </div>

            <div className="bg-[#202125] rounded-lg flex items-center p-5 w-[40%]">
              <div>
                <img src="images/wallet/spay.svg" alt="" />
              </div>

              <div className="ml-5">
                <h3 className="font-medium text-lg mb-1">SCPT</h3>
                <h4 className="font-medium text-[#9A9A9A]">0</h4>
              </div>
            </div>
          </div>

          <p className="text-center font-medium text-xs mt-6 text-[#ABABAB]">
            Transaction History
          </p>

          <div className="flex justify-center items-center h-[70%]">
            <h3 className="font-medium text-lg">Transactions not found</h3>
          </div>
        </div>
      </div>

      {/* Stakes */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-black border-2 border-[#464646] rounded-xl flex justify-between items-center py-4 px-10 mx-5 mt-4">
            <h4 className="font-medium text-lg">Stakes</h4>
            <div>
              <button className="font-medium text-sm border border-[#2BC8E5] rounded-lg py-4 px-5">
                Deposit Stake
              </button>
              <button className="font-medium text-sm border border-[#2BC8E5] rounded-lg py-4 px-5 ml-5">
                Withdraw Stake
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-black border-2 border-[#464646] rounded-xl py-7 pl-10 pr-16 mx-5 mt-4">
            <h4 className="font-medium text-lg">Latest Rewards</h4>
            <div>
              <table className="w-full text-left border-y mt-5 mb-10">
                <thead>
                  <tr>
                    <th className="font-medium text-sm py-7">Transaction</th>
                    <th className="font-medium text-sm py-7">Block</th>
                    <th className="font-medium text-sm py-7">Status</th>
                    <th className="font-medium text-sm py-7">Amount</th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody> */}
              </table>
            </div>
            <p className="font-medium text-sm text-[#FFEF00] text-center">
              View More on Explorer
            </p>
          </div>
        </div>
      </div>

      {/* Contract */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-black border-2 border-[#464646] rounded-xl py-6 pb-12 px-12 mx-5 mt-4">
            <div className="flex justify-center rewardsContract gap-12 mb-6">
              <a
                href="#"
                className="font-medium text-lg text-[#7B7B7D] active px-1"
              >
                Latest Rewards
              </a>
              <a href="#" className="font-medium text-lg text-[#7B7B7D] px-1">
                Interact with contract
              </a>
            </div>

            <div className="flex gap-3 mb-10 pt-6 border-t">
              <div className="w-1/2">
                <label htmlFor="jsonInterface" className="font-medium text-lg">
                  ABI/JSON Interface
                </label>
                <textarea
                  id="jsonInterface"
                  placeholder="Paste ABI/ JSON Interface"
                  className="bg-transparent border border-[#5A5A5A] rounded-lg resize-none w-full h-[160px] mt-3 p-4 placeholder:text-[#757578] placeholder:font-medium"
                ></textarea>
              </div>

              <div className="w-1/2">
                <label htmlFor="jsonInterface" className="font-medium text-lg">
                  Byte Code
                </label>
                <textarea
                  id="jsonInterface"
                  placeholder="Paste byte code "
                  className="bg-transparent border border-[#5A5A5A] rounded-lg resize-none w-full h-[160px] mt-3 p-4 placeholder:text-[#757578] placeholder:font-medium"
                ></textarea>
              </div>
            </div>

            <Button
              label="Deplay Contract"
              className="w-full justify-center py-4"
            />
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-black border-2 border-[#464646] rounded-xl py-6 pb-9 px-12 mx-5 mt-4">
            <h3 href="#" className="font-medium text-lg mb-2">
              Latest Rewards
            </h3>

            <div>
              <label
                htmlFor="currentPswd"
                className="font-medium text-sm text-[#ABABAB]"
              >
                Current Password
              </label>
              <input
                type="password"
                name="password"
                id="currentPswd"
                className="bg-[#171717] border border-[#5A5A5A] rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <div className="my-5">
              <label
                htmlFor="currentPswd"
                className="font-medium text-sm text-[#ABABAB]"
              >
                Current Password
              </label>
              <input
                type="password"
                name="password"
                id="currentPswd"
                className="bg-[#171717] border border-[#5A5A5A] rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <div>
              <label
                htmlFor="currentPswd"
                className="font-medium text-sm text-[#ABABAB]"
              >
                Current Password
              </label>
              <input
                type="password"
                name="password"
                id="currentPswd"
                className="bg-[#171717] border border-[#5A5A5A] rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <Button
              label="Export Keystore"
              className="w-full justify-center py-4 mt-6"
            />
          </div>
        </div>
      </div>

      {/* Send */}
      <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-[#0C0C0C] border rounded-lg py-3 pb-6 px-6">
            <h3 href="#" className="font-semibold text-lg mb-4 text-center">
              Send Amount To User
            </h3>

            <div>
              <label htmlFor="token" className="text-sm">
                Token
              </label>
              <input
                type="text"
                name="token"
                id="token"
                className="bg-[#171717] border rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <div className="my-5">
              <label htmlFor="walletAdd" className="text-sm">
                To (Wallet Address)
              </label>
              <input
                type="text"
                name="walletAddress"
                id="walletAdd"
                className="bg-[#171717] border rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <div>
              <label htmlFor="amountTransferred" className="text-sm">
                Amount (to be tranasferred)
              </label>
              <input
                type="text"
                name="amountTransferred"
                id="amountTransferred"
                className="bg-[#171717] border rounded-lg w-full mt-2 h-[47px]"
              />
            </div>

            <Button label="Send" className="w-full justify-center py-4 mt-6" />
          </div>
        </div>
      </div>

      {/* Receive */}
      {/* <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-[#0C0C0C] border rounded-lg py-3 pb-6 px-6 text-center">
            <h3 href="#" className="font-semibold text-lg">
              Receive
            </h3>
            <p className="font-medium text-lg text-[#22B2CD] my-2">
              My Public Adress
            </p>
            <p className="text-sm">0x10133d8885E6dA6F39431A7BdCCF1F8a07C</p>

            <button className="font-medium text-lg flex items-center gap-3 border-2 border-[#25CAE9] rounded-lg py-1.5 px-3 mx-auto mt-4">
              <img src="images/copy.svg" alt="" /> Copy
            </button>

            <img src="images/qr-code.svg" alt="" className="mx-auto mt-6" />
          </div>
        </div>
      </div> */}

      {/* Stakes */}
      {/* <div className="bg-[#151515] rounded-2xl container pl-5 flex mt-5 mb-20">
        <div className="bg-black pt-4 pb-8 space-y-1 w-[16%]">
          <PageLink
            link=""
            label="Wallet"
            img="wallet.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Send"
            img="send.svg"
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Receive"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Stakes"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Rewards"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Contract"
            img=""
            //   onClick={() => setter(false)}
          />
          <PageLink
            link=""
            label="Settings"
            img=""
            //   onClick={() => setter(false)}
          />
        </div>

        <div className="py-4 w-[84%]">
          <div className="bg-[#0C0C0C] border rounded-lg py-3 pb-6 px-6 text-center">
            <h3 href="#" className="font-semibold text-lg">
              Withdraw Stake
            </h3>
            <p className="text-sm mt-2">Please choose the staking purpose</p>

            <div className="border rounded-lg py-3 mt-4">
              <h4 className="text-lg">Validator Node</h4>
              <p className="text-sm text-[#9A9A9A] mt-1">
                Withdraw stake from a Validator
              </p>
            </div>

            <div className="border rounded-lg py-3 my-6">
              <h4 className="text-lg">Lightning Node</h4>
              <p className="text-sm text-[#9A9A9A] mt-1">
                Withdraw stake from Lighting Node
              </p>
            </div>

            <div className="border rounded-lg py-3">
              <h4 className="text-lg">Edge Node</h4>
              <p className="text-sm text-[#9A9A9A] mt-1">
                Withdraw stake from your Edge node
              </p>
            </div>

            <Button
              label="Continue"
              className="w-full justify-center py-4 mt-10"
            />
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Wallet;
