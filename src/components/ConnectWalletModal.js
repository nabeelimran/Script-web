import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useState } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  toggleEmailModalVisibility,
  toggleModalVisibility,
  toggleSignUpModalVisibility,
  toggleSignInModalVisibility,
} from "redux/reducers/connectWalletModal_State";
import {
  metamaskCred,
  setIsOkc,
  setIsTemple,
} from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import MetamaskService from "services/metamask";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";
import auth from "auth/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  TwitterAuthProvider,
} from "firebase/auth";
import { detectBrowser, helper, metamaskNetwork } from "utils/helper";
import MixPanelService from "services/mixPanelService";
import { isLogin } from "redux/reducers/login_state";
import { loginTypes } from "utils/helper";
import { TempleWalletService } from "services/TempleWallet";
import { addLog } from "services/logs/FbLogs";
import analyticsEventTracker from "services/google-analytics/trackAnalyticsEvent";
import TrustWalletService from "services/trustWallet";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import LoginButton from "./LoginButton";
import EnsService from "services/ens";

function ConnectWalletModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState({
    metamask: false,
    wallet: false,
    bnb: false,
    okc: false,
    bitgret: false,
    temple: false,
    trust: false,
    ens: false,
  });
  const { isModalVisible } = useSelector(
    (state) => state.connectWalletModal_State
  );
  const { accountAddress } = useSelector((state) => state.metamask_state);
  const modalRef = OutsideClickDetector(() =>
    dispatch(toggleModalVisibility(false))
  );

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalVisible]);

  const walletConnectHandler = () => {
    helper.trackByMixpanel("Wallet Connect Button Clicked", {});
  };

  const spaceIdConnectHandler = async (loginType) => {
    try {
      if (!window.ethereum) {
        ToastMessage("Install Metamask");
        return;
      }

      if(loginType === loginTypes.bnb) {
        setLoading({ ...loading, bnb: true });
        dispatch(setIsOkc(loginTypes.bnb));
        const walletAddress = await MetamaskService.connectHandler();
        if (walletAddress) {
          dispatch(metamaskCred(walletAddress));
          const chainId = await MetamaskService.getChainId();
          if (chainId && chainId !== metamaskNetwork.spaceID.chainId) {
            await MetamaskService.changeChain("spaceID");
          }
          Api.getSpaceIDName(walletAddress).then((res) => {
            if (res && res.status === 200) {
              if (!res?.data?.data?.name) {
                addLog({
                  loginType: "spaceId-login",
                  errror: JSON.stringify(res),
                  attempt: "fail",
                });
                ToastMessage("BNB username is not found");
                setLoading({ ...loading, bnb: false });
                return;
              }
              const req = {
                walletAddress,
                username: res.data.data.name,
                signupType: loginTypes.bnb,
              };
              Api.loginWithSpaceID(req).then((resp) => {
                if (resp && resp.status === 200) {
                  setLoading({ ...loading, bnb: false });
                  ToastMessage(`${resp?.data?.message}`, true);
                  dispatch(toggleModalVisibility(false));
                  if (resp.data.data.authToken) {
                    sessionStorage.setItem(
                      "script-token",
                      JSON.stringify(resp.data.data.authToken)
                    );
                  }
  
                  sessionStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                      email: resp?.data?.data?.email || "",
                      userId: resp.data.data.id,
                      walletAddress: resp.data.data.walletAddress,
                      userName: resp.data.data.username,
                    })
                  );
                  dispatch(isLogin(true));
                  navigate({
                    pathname: "/",
                  });
                } else {
                  setLoading({ ...loading, bnb: false });
                  addLog({
                    loginType: "spaceId-login",
                    errror: JSON.stringify(resp),
                    attempt: "fail",
                  });
                  ToastMessage("Unable to login");
                }
              });
            }
          });
        }
      } else {
        setLoading({ ...loading, ens: true });
        dispatch(setIsOkc(loginTypes.ens));
        const walletAddress = await MetamaskService.connectHandler();
        if (walletAddress) {
          dispatch(metamaskCred(walletAddress));
          const chainId = await MetamaskService.getChainId();
          if (chainId && chainId !== metamaskNetwork.ethereumMainnet.chainId) {
            await MetamaskService.changeChain("ethereumMainnet");
          }

          const ensUserName = await EnsService.resolveNameByAddress(walletAddress);
          if(ensUserName && ensUserName.includes('.eth')) {
            const req = {
              walletAddress,
              username: ensUserName,
              signupType: loginTypes.ens,
            };
            Api.loginWithSpaceID(req).then((resp) => {
              if (resp && resp.status === 200) {
                setLoading({ ...loading, ens: false });
                ToastMessage(`${resp?.data?.message}`, true);
                dispatch(toggleModalVisibility(false));
                if (resp.data.data.authToken) {
                  sessionStorage.setItem(
                    "script-token",
                    JSON.stringify(resp.data.data.authToken)
                  );
                }

                sessionStorage.setItem(
                  "userInfo",
                  JSON.stringify({
                    email: resp?.data?.data?.email || "",
                    userId: resp.data.data.id,
                    walletAddress: resp.data.data.walletAddress,
                    userName: resp.data.data.username,
                  })
                );
                dispatch(isLogin(true));
                navigate({
                  pathname: "/",
                });
              } else {
                setLoading({ ...loading, ens: false });
                addLog({
                  loginType: "ens-login",
                  errror: JSON.stringify(resp),
                  attempt: "fail",
                });
                ToastMessage("Unable to login");
              }
            });
          } else {
            ToastMessage('Ens username not found');
            setLoading({ ...loading, ens: false });
          }
        }
      }
    } catch (error) {
      setLoading({ ...loading, bnb: false, ens: false });
      addLog({
        loginType: "spaceId-ens-login",
        errror: JSON.stringify(error),
        attempt: "fail",
      });
      ToastMessage(error?.response?.data?.message || "Something went wrong.");
    }
  };

  const metaMaskHandler = async (loginType = "metamask") => {
    try {
      let okcBalance;
      analyticsEventTracker("wallet-login", "click", window.location.pathname);
      if (loginType === loginTypes.okc) {
        setLoading({ ...loading, okc: true });
        helper.trackByMixpanel("OKC Button Clicked", {});
      } else if (loginType === loginTypes.bitgret) {
        setLoading({ ...loading, bitgret: true });
        helper.trackByMixpanel("Bitgret Button Clicked", {});
      } else if (loginType === loginTypes.temple) {
        setLoading({ ...loading, temple: true });
        helper.trackByMixpanel("Temple Button Clicked", {});
      } else if (loginType === loginTypes.trust) {
        setLoading({ ...loading, trust: true });
        helper.trackByMixpanel("Trust Button Clicked", {});
      } else if(loginType === loginTypes.ens) {
        setLoading({ ...loading, ens: true });
        helper.trackByMixpanel("ENS Button Clicked", {});
      } else {
        setLoading({ ...loading, metamask: true });
        dispatch(setIsOkc(loginTypes.metamask));
        helper.trackByMixpanel("Metamask Button Clicked", {});
      }
      let accAddres;
      if (loginType === loginTypes.temple) {
        if (await TempleWalletService.isCheckWalletPlugin()) {
          const templeWalletData = await TempleWalletService.connectWallet();
          if (templeWalletData?.isSuccess) {
            accAddres = templeWalletData.data.accountPkh;
            setLoading({ ...loading, temple: false });
          } else {
            ToastMessage(templeWalletData?.data?.message || "User rejected");
            setLoading({ ...loading, temple: false });
            return;
          }
        } else {
          ToastMessage("Temple Wallet not installed");
          setLoading({ ...loading, temple: false });
          return;
        }
      } else if (loginType === loginTypes.trust) {
        const trustWalletProvider = TrustWalletService.checkTrustWallet();
        if (!trustWalletProvider) {
          ToastMessage("Trust wallet not installed");
          setLoading({ ...loading, trust: false });
          return;
        }
        const etherProvider = new ethers.providers.Web3Provider(
          trustWalletProvider
        );
        const accountsArr = await window.trustwallet.request({
          method: "eth_requestAccounts",
        });

        if (accountsArr && accountsArr.length > 0) {
          accAddres = accountsArr[0];
        }

        setLoading({ ...loading, trust: false });
        const balance = new BigNumber(
          await etherProvider.getBalance(accAddres)
        );
        console.log(accAddres, "account", balance, "bal");
      } else if (loginType === loginTypes.ens) {
        if (!window.ethereum) {
          ToastMessage("Install Metamask");
          setLoading(false);
          return false;
        }
        const chainId = await MetamaskService.getChainId();
        if (chainId && chainId !== metamaskNetwork.ethereumMainnet.chainId) {
          try {
            await MetamaskService.changeChain("ethereumMainnet");
          } catch (error) {
            setLoading({
              ...loading,
              okc: false,
              metamask: false,
              bitgret: false,
              ens: false
            });

            console.log(error);
          }
        }
        accAddres = await MetamaskService.connectHandler();
        const ensName = await EnsService.resolveNameByAddress(accAddres);
        if(ensName && ensName.includes('.eth')) {

        } else {
          setLoading({
            ...loading,
            okc: false,
            metamask: false,
            bitgret: false,
            ens: false
          });
          ToastMessage(`ENS Username not found`);
          return;
        }
        
      } else {
        if (!window.ethereum) {
          ToastMessage("Install Metamask");
          setLoading(false);
          return false;
        }
        accAddres = await MetamaskService.connectHandler();
      }

      if (accAddres) {
        dispatch(metamaskCred(accAddres));
        if (loginType === loginTypes.okc) {
          dispatch(setIsOkc(loginTypes.okc));
          const chainId = await MetamaskService.getChainId();
          if (chainId && chainId !== metamaskNetwork.OKC.chainId) {
            try {
              await MetamaskService.changeChain("OKC");
            } catch (error) {
              setLoading({
                ...loading,
                okc: false,
                metamask: false,
                bitgret: false,
              });

              console.log(error);
            }
          }
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accAddres, "latest"],
          });

          if (balance) {
            okcBalance = parseInt(balance, 16) / Math.pow(10, 18);
          }
        }
        if (loginType === loginTypes.bitgret) {
          dispatch(setIsOkc(loginTypes.bitgret));
          const chainId = await MetamaskService.getChainId();
          if (chainId && chainId !== metamaskNetwork.bitgret.chainId) {
            await MetamaskService.changeChain("bitgret");
          }
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accAddres, "latest"],
          });

          if (balance) {
            okcBalance = parseInt(balance, 16) / Math.pow(10, 18);
          }
        }
        if (loginType === loginTypes.temple) {
          dispatch(setIsTemple(loginTypes.temple));
        }
        const isUser = await Api.getUserDetailsByWalletAddress(
          accAddres,
          "login-modal"
        );
        if (!isUser.data.isSuccess) {
          dispatch(toggleModalVisibility(false));
          dispatch(toggleEmailModalVisibility(true));
          setLoading(false);
        }

        if (isUser.data.data.userExist) {
          const resObj = {
            browser: "dummyData",
            country: "dummayData",
            device: "Web",
            loginIp: "dummyData",
            loginLocation: "dummmyData",
            email: "",
            userName: "",
            password: "",
            walletAddress: accAddres,
            walletSignature: "",
            otherReferralCode: "",
            okcWalletBalance: loginType === loginTypes.okc ? okcBalance : null,
            briseBalance: loginType === loginTypes.bitgret ? okcBalance : null,
            signupType: loginType,
          };

          const loginW = await Api.walletLogin(resObj, "");

          if (loginW && loginW.status === 200 && loginW.data.isSuccess) {
            dispatch(toggleModalVisibility(false));
            try {
              MixPanelService.setIdentifier(loginW?.data?.data?.email);
              MixPanelService.track("login", loginW?.data?.data);
            } catch (error) {}
            if (loginW.data.message === "Please verify your account.") {
              setLoading({
                ...loading,
                okc: false,
                metamask: false,
                bitgret: false,
              });
              ToastMessage(`${loginW.data.message}`);
              navigate({
                pathname: "/verify-account",
                search: `?email=${loginW.data.data.email}`,
              });
            } else {
              setLoading({
                ...loading,
                okc: false,
                metamask: false,
                bitgret: false,
              });
              ToastMessage(`${loginW.data.message}`, true);
              if (loginW.data.data.authToken) {
                sessionStorage.setItem(
                  "script-token",
                  JSON.stringify(loginW.data.data.authToken)
                );
              }

              sessionStorage.setItem(
                "userInfo",
                JSON.stringify({
                  email: loginW.data.data.email,
                  userId: loginW.data.data.id,
                  walletAddress: loginW.data.data.walletAddress,
                  userName: loginW.data.data.userName,
                })
              );
              helper.trackByMixpanel("User Signed In", {
                method: "metamask",
                email: loginW.data.data.email,
              });
              dispatch(isLogin(true));
              if (!location.pathname.includes("/dashboard"))
                navigate({
                  pathname: "/",
                });
            }
          } else {
            setLoading({
              ...loading,
              okc: false,
              metamask: false,
              bitgret: false,
            });
            ToastMessage("Somthing went wrong");
            await addLog({
              loginType: loginType,
              walletAddress: accAddres,
              errror: JSON.stringify(loginW),
              reqBoyd: JSON.stringify(resObj),
              attempt: "fail",
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
      setLoading({
        ...loading,
        okc: false,
        metamask: false,
        bitgret: false,
        temple: false,
        trust: false,
      });
      ToastMessage(error?.response?.data?.message || "Somthing went wrong");
      await addLog({
        loginType: loginType,
        errror: JSON.stringify(error),
        attempt: "fail",
      });
    }
  };

  const googleLoginHandler = () => {
    helper.trackByMixpanel("Google Social Button Clicked", {});
    analyticsEventTracker("social-login", "click", window.location.pathname);
    dispatch(setIsOkc(loginTypes.gmail));
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(auth), provider)
      .then((res) => {
        const gBody = {
          login: {
            email: res?.user?.email,
            device: "Web",
            password: "",
            browser: detectBrowser(),
            signupType: loginTypes.gmail,
          },
          user: {
            email: res?.user?.email,
            userName: res?.user?.displayName,
            accountLocked: false,
            confirmPassword: "",
            firstName: "",
            id: 0,
            lastName: "",
            middleName: "",
            password: "",
            roleId: 0,
            roleName: "",
            status: "ACTIVE",
          },
        };
        Api.solicalLogin(gBody, "login-modal")
          .then((loginRes) => {
            if (loginRes && loginRes.status === 200) {
              if (loginRes.data.message === "Please verify your account.") {
                ToastMessage(`${loginRes.data.message}`);
                navigate({
                  pathname: "/verify-account",
                  search: `?email=${loginRes.data.data.email}`,
                });
              } else {
                ToastMessage(`${loginRes.data.message}`, true);
                if (loginRes.data.data.authToken) {
                  sessionStorage.setItem(
                    "script-token",
                    JSON.stringify(loginRes.data.data.authToken)
                  );
                }

                sessionStorage.setItem(
                  "userInfo",
                  JSON.stringify({
                    email: loginRes.data.data.email,
                    userId: loginRes.data.data.id,
                    walletAddress: loginRes.data.data.walletAddress,
                    userName: loginRes.data.data.userName,
                  })
                );
                helper.trackByMixpanel("User Signed In", {
                  method: "google-sign-in",
                  email: loginRes.data.data.email,
                });
                dispatch(toggleModalVisibility(false));
                dispatch(isLogin(true));
                navigate({
                  pathname: "/",
                });
              }
            } else {
              ToastMessage(loginRes?.data?.message || "Something went wrong");
            }
          })
          .catch((err) => {
            ToastMessage(
              err?.response?.data?.message || "Something went wrong"
            );
          });
      })
      .catch(async (err) => {
        console.log(err);
        ToastMessage(
          err?.error?.message || "Google login popup closed by user."
        );
        await addLog({
          loginType: "social-login",
          errror: JSON.stringify(err),
          attempt: "fail",
        });
      });
  };

  // const twitterLoginHandler = (e) => {
  //   helper.trackByMixpanel("Twitter Social Button Clicked", {});
  //   helper.comingSoonNotification(e);
  //   return;
  //   dispatch(setIsOkc(loginTypes.twitter));
  //   const provider = new TwitterAuthProvider();
  //   signInWithPopup(getAuth(auth), provider)
  //     .then((res) => {
  //       const gBody = {
  //         login: {
  //           email: res?.user?.email,
  //           device: "Web",
  //           password: "",
  //           browser: detectBrowser(),
  //           signupType: loginTypes.gmail,
  //         },
  //         user: {
  //           email: res?.user?.email,
  //           userName: res?.user?.displayName,
  //           accountLocked: false,
  //           confirmPassword: "",
  //           firstName: "",
  //           id: 0,
  //           lastName: "",
  //           middleName: "",
  //           password: "",
  //           roleId: 0,
  //           roleName: "",
  //           status: "ACTIVE",
  //         },
  //       };
  //       Api.solicalLogin(gBody, "login-modal")
  //         .then((loginRes) => {
  //           if (loginRes && loginRes.status === 200) {
  //             if (loginRes.data.message === "Please verify your account.") {
  //               ToastMessage(`${loginRes.data.message}`);
  //               navigate({
  //                 pathname: "/verify-account",
  //                 search: `?email=${loginRes.data.data.email}`,
  //               });
  //             } else {
  //               ToastMessage(`${loginRes.data.message}`, true);
  //               if (loginRes.data.data.authToken) {
  //                 sessionStorage.setItem(
  //                   "script-token",
  //                   JSON.stringify(loginRes.data.data.authToken)
  //                 );
  //               }

  //               sessionStorage.setItem(
  //                 "userInfo",
  //                 JSON.stringify({
  //                   email: loginRes.data.data.email,
  //                   userId: loginRes.data.data.id,
  //                   walletAddress: loginRes.data.data.walletAddress,
  //                   userName: loginRes.data.data.userName,
  //                 })
  //               );
  //               dispatch(toggleModalVisibility(false));
  //               dispatch(isLogin(true));
  //               navigate({
  //                 pathname: "/",
  //               });
  //             }
  //           } else {
  //             ToastMessage(loginRes?.data?.message || "Something went wrong");
  //           }
  //         })
  //         .catch((err) => {
  //           ToastMessage(err?.error?.message || "Something went wrong");
  //         });
  //     })
  //     .catch((err) => {
  //       ToastMessage(err?.error?.message || "Something went wrong");
  //     });
  // };

  return (
    <>
      <BlackScreen zIndex="1000000" show={isModalVisible} />

      <UpperRoot>
        <section
          ref={modalRef}
          className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-3 md:py-3 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
            isModalVisible
              ? "pointer-events-auto top-1/2 opacity-100"
              : "opacity-0 pointer-events-none top-[40%]"
          }`}
        >
          {/*  */}
          <div className="lg:w-[50%]">
            <div className="mb-4">
              <Title className="font-medium mb-1">Welcome Back</Title>
              <p className="text-sm">
                We knew you’d come around, sign in for endless entertainment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mb-3 sm:grid-cols-2">
              <ConnectWalletButton
                clickEvent={() => metaMaskHandler(loginTypes.metamask)}
                img="images/metamask.svg"
                loader={loading.metamask}
                title={
                  <>
                    Metamask
                    {/* <span className="text-sm">( Recommended )</span> */}
                  </>
                }
              />
              <ConnectWalletButton
                img="images/space_id_logo.png"
                title=".bnb Domain"
                loader={loading.bnb}
                clickEvent={() => spaceIdConnectHandler(loginTypes.bnb)}
              />
              <ConnectWalletButton
                img="images/ens-logo.png"
                title=".ens Domain"
                loader={loading.ens}
                clickEvent={() => spaceIdConnectHandler(loginTypes.ens)}
              />
              <ConnectWalletButton
                img="images/bitgret_logo.png"
                title="Bitgert"
                loader={loading.bitgret}
                clickEvent={() => metaMaskHandler(loginTypes.bitgret)}
              />
              <ConnectWalletButton
                img="images/temple-wallet.png"
                title="Temple Wallet"
                loader={loading.temple}
                clickEvent={() => metaMaskHandler(loginTypes.temple)}
              />
              <ConnectWalletButton
                img="images/okc_logo.png"
                title="OKT Chain"
                loader={loading.okc}
                clickEvent={() => metaMaskHandler(loginTypes.okc)}
              />
              {/* <ConnectWalletButton
                img="images/trust_wallet_logo.png"
                title="Trust Wallet"
                loader={loading.trust}
                clickEvent={() => metaMaskHandler(loginTypes.trust)}
              /> */}
            </div>
            <hr style={{color: '#999'}} />
            <div className="my-4">
              <div className="mb-2 mt-4">
                <LoginButton
                  img="images/google-logo.png"
                  title="Continue with Google"
                  clickEvent={googleLoginHandler}
                />
              </div>
              <div className="my-4">
                <LoginButton
                  img="images/email.png"
                  title="Sign in via Email Address"
                  clickEvent={() => {
                    dispatch(toggleSignInModalVisibility(true));
                  }}
                />
                <p
                  onClick={() => {
                    dispatch(toggleSignUpModalVisibility(true));
                  }}
                  className="block w-fit mx-auto text-center text-sm cursor-pointer mt-4"
                >
                  Sign up via Email Address
                </p>
              </div>
            </div>
            {/* <div>
              <p className="text-center text-sm mb-5">Social</p>

              <div className="flex items-center justify-center space-x-4 mb-2">
                <SocialLoginCard
                  title="Google"
                  click={googleLoginHandler}
                  icon={<Icon icon="ri:google-fill" className="text-lg" />}
                /> */}
                {/* <SocialLoginCard
                  title="Twitter"
                  click={twitterLoginHandler}
                  icon={<Icon icon="mdi:twitter" className="text-lg" />}
                /> */}
              {/* </div> */}

              {/* <Link to="/" className="block w-fit mx-auto text-center text-sm">
                Forget Password?
              </Link> */}
              {/* <p
                onClick={() => {
                  dispatch(toggleSignUpModalVisibility(true));
                }}
                className="block w-fit mx-auto text-center text-sm cursor-pointer mt-4"
              >
                Sign Up
              </p>
            </div> */}
          </div>

          <img
            src="images/connect-wallet-banner.png"
            className="w-full lg:w-auto mt-10 lg:mt-0 max-w-[26rem] lg:max-w-none mx-auto lg:h-full object-cover lg:absolute top-0 right-0 z-[100]"
            alt=""
          />

          <button
            onClick={() => dispatch(toggleModalVisibility(false))}
            className="absolute top-8 right-10 text-lg text-white flex z-[500000]"
          >
            <Icon icon="maki:cross" />
          </button>
        </section>
      </UpperRoot>
    </>
  );
}

export default ConnectWalletModal;
