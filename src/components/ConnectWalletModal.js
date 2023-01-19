import { Icon } from "@iconify/react";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
	toggleEmailModalVisibility,
	toggleModalVisibility,
} from "redux/reducers/connectWalletModal_State";
import { metamaskCred } from "redux/reducers/metamask_state";
import BlackScreen from "./BlackScreen";
import ConnectWalletButton from "./ConnectWalletButton";
import SocialLoginCard from "./SocialLoginCard";
import Title from "./Title";
import UpperRoot from "./UpperRoot";
import MetamaskService from "services/metamask";
import { ToastMessage } from "./ToastMessage";
import Api from "services/api";
import auth from "auth/firebase";
import {GoogleAuthProvider,signInWithPopup,getAuth,TwitterAuthProvider} from "firebase/auth"
import { detectBrowser, helper, metamaskNetwork } from "utils/helper";
import MixPanelService from "services/mixPanelService";
import { isLogin } from "redux/reducers/login_state";

function ConnectWalletModal() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
		helper.trackByMixpanel('Wallet Connect Button Clicked', {});
	}

	const spaceIdConnectHandler = async () => {
		if (!window.ethereum) {
			ToastMessage("Install Metamask");
			return;
		}
		const walletAddress = await MetamaskService.connectHandler();
		if(walletAddress) {
			const chainId = await MetamaskService.getChainId();
			if(chainId && chainId !== metamaskNetwork.spaceID.chainId) {
				await MetamaskService.changeChain("spaceID");
			}
			Api.getSpaceIDName(walletAddress).then((res) => {
				if(res && res.status === 200) {
					if(!res?.data?.data?.name) {
						ToastMessage('BNB username is not found');
						return;
					}
					const req = {
						walletAddress,
						username: res.data.data.name
					}
					Api.loginWithSpaceID(req).then((resp) => {
						if(resp && resp.status === 200) {
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
									email: resp?.data?.data?.email || '',
									userId: resp.data.data.id,
									walletAddress: resp.data.data.walletAddress,
									userName:resp.data.data.username
								})
							);
							dispatch(isLogin(true))
							navigate({
								pathname: "/tv",
							});
						} else {
							ToastMessage('Unable to login');
						}
					})
				}
			})
		}


	}

	const metaMaskHandler = async () => {
		helper.trackByMixpanel('Metamask Button Clicked', {});
		
		if (!window.ethereum) {
			ToastMessage("Install Metamask");
			return false;
		}
		const accAddres = await MetamaskService.connectHandler();

		if (accAddres) {
			dispatch(metamaskCred(accAddres));
			const isUser = await Api.getUserDetailsByWalletAddress(
				accAddres,
				"login-modal"
			);
			if (!isUser.data.isSuccess) {
				dispatch(toggleModalVisibility(false));
				dispatch(toggleEmailModalVisibility(true));
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
				};

				const loginW = await Api.walletLogin(resObj, "");

				if (loginW && loginW.status === 200 && loginW.data.isSuccess) {
					dispatch(toggleModalVisibility(false));
					try {
						MixPanelService.setIdentifier(loginW?.data?.data?.email);
            			MixPanelService.track('login', loginW?.data?.data);
					} catch (error) {
						
					}
					if (loginW.data.message === "Please verify your account.") {
						ToastMessage(`${loginW.data.message}`);
						navigate({
							pathname: "/verify-account",
							search: `?email=${loginW.data.data.email}`,
						});
					} else {
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
								userName:loginW.data.data.userName
							})
						);
						helper.trackByMixpanel('User Signed In', {
							"method": "metamask",
							"email" : loginW.data.data.email
						});
						dispatch(isLogin(true))
						navigate({
							pathname: "/tv",
						});
					}
				} else {
					ToastMessage("Somthing went wrong");
				}
			}
		}
	};

	const googleLoginHandler =  () => {
		helper.trackByMixpanel('Google Social Button Clicked', {})
	  	const provider = new GoogleAuthProvider();
		signInWithPopup(getAuth(auth),provider).then((res) => {
		
			const gBody = {
				login: {
            		email:res?.user?.email,
					device: "Web",
					password: "",
					browser: detectBrowser()
          		},
          		user:{
            		email:res?.user?.email,
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
					status: "ACTIVE"
          		}
        	}
        	Api.solicalLogin(gBody,"login-modal").then((loginRes)=>{
        		if(loginRes && loginRes.status === 200) {
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
								userName:loginRes.data.data.userName

							})
						);
						helper.trackByMixpanel('User Signed In', {
							"method": "google-sign-in",
							"email" : loginRes.data.data.email
						});
            			dispatch(toggleModalVisibility(false))
						dispatch(isLogin(true))
						navigate({
							pathname: "/tv",
						});
					}
				} else {
					ToastMessage(loginRes?.data?.message || 'Something went wrong')
				}

        	}).catch(err => {
				ToastMessage(err?.error?.message || 'Something went wrong')
			})

			})
			.catch((err) => {
				ToastMessage(err?.error?.message || 'Something went wrong')
			});
	};
	const twitterLoginHandler =  (e) => {
		helper.trackByMixpanel('Twitter Social Button Clicked', {});
		helper.comingSoonNotification(e);
		return;
	  	const provider = new TwitterAuthProvider();
		signInWithPopup(getAuth(auth),provider).then((res) => {
		
			
			
			const gBody = {
				login: {
            		email:res?.user?.email,
					device: "Web",
					password: "",
					browser: detectBrowser()
          		},
          		user:{
            		email:res?.user?.email,
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
					status: "ACTIVE"
          		}
        	}
        	Api.solicalLogin(gBody,"login-modal").then((loginRes)=>{
        		if(loginRes && loginRes.status === 200) {
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
								userName:loginRes.data.data.userName
							})
						);
            dispatch(toggleModalVisibility(false))
			dispatch(isLogin(true))
						navigate({
							pathname: "/tv",
						});
					}
				} else {
					ToastMessage(loginRes?.data?.message || 'Something went wrong')
				}

        	}).catch(err => {
				ToastMessage(err?.error?.message || 'Something went wrong')
			})

			})
			.catch((err) => {
				ToastMessage(err?.error?.message || 'Something went wrong')
			});
	};



	return (
		<>
			<BlackScreen zIndex='1000000' show={isModalVisible} />

			<UpperRoot>
				<section
					ref={modalRef}
					className={`fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-[90%] max-w-[900px] h-[90vh] max-h-[600px] z-[10000000] overflow-x-hidden overflow-y-auto rounded-xl md:rounded-3xl py-6 md:py-10 px-8 md:px-14 hide-scrollbar transition-all duration-300 shadow-sm shadow-primary ${
						isModalVisible
							? "pointer-events-auto top-1/2 opacity-100"
							: "opacity-0 pointer-events-none top-[40%]"
					}`}>
					{/*  */}
					<div className='lg:w-[50%]'>
						<div className='mb-8'>
							<Title className='font-medium mb-3'>
								Welcome Back
							</Title>
							<p className='text-sm'>
								We knew you’d come around, sign in for endless
								entertainment
							</p>
						</div>

						<div className='grid grid-cols-1 gap-4 mb-7'>
							<ConnectWalletButton
								clickEvent={metaMaskHandler}
								img='images/metamask.svg'
								title={
									<>
										Metamask{" "}
										<span className='text-sm'>
											( Recommended )
										</span>
									</>
								}
							/>
							<ConnectWalletButton
								img='images/wallet-connect.svg'
								title='Wallet Connect'
								clickEvent={walletConnectHandler}
							/>
							{/* <ConnectWalletButton
								img='images/space_id_logo.png'
								title='.bnb Domain'
								clickEvent={spaceIdConnectHandler}
							/> */}
						</div>

						<div>
							<p className='text-center text-sm mb-5'>Social</p>

							<div className='flex items-center justify-center space-x-4 mb-6'>
								<SocialLoginCard
									title='Google'
									click={googleLoginHandler}
									icon={
										<Icon
											icon='ri:google-fill'
											className='text-lg'
										/>
									}
								/>
								<SocialLoginCard
									title='Twitter'
                  click={twitterLoginHandler}
									icon={
										<Icon
											icon='mdi:twitter'
											className='text-lg'
										/>
									}
								/>
							</div>

							<Link
								to='/'
								className='block w-fit mx-auto text-center text-sm'>
								Forget Password?
							</Link>
						</div>
					</div>

					<img
						src='images/connect-wallet-banner.png'
						className='w-full lg:w-auto mt-10 lg:mt-0 max-w-[26rem] lg:max-w-none mx-auto lg:h-full object-cover lg:absolute top-0 right-0 z-[100]'
						alt=''
					/>

					<button
						onClick={() => dispatch(toggleModalVisibility(false))}
						className='absolute top-8 right-10 text-lg text-white flex z-[500000]'>
						<Icon icon='maki:cross' />
					</button>
				</section>
			</UpperRoot>
		</>
	);
}

export default ConnectWalletModal;
