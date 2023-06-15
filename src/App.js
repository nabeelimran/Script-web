import ScrollToTop from "components/ScrollToTop";
import Calculator from "pages/Calculator";
import CookiesPolicy from "pages/CookiesPolicy";
import Details from "pages/Details";
import FAQ from "pages/FAQ";
import HomePage from "pages/HomePage";
import Marketplace from "pages/Marketplace";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Research from "pages/Research";
// import Technology from "pages/Technology";
import TermsAndConditions from "pages/TermsAndConditions";
import TokenPage from "pages/TokenPage";
import Validator from "pages/Validator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "pages/coming-soon";
import { useEffect } from "react";
import MixPanelService from "services/mixPanelService";
import Download from "pages/Download";
import PageNotFound from "pages/PageNotFound";
import { toggleMetamaskChangeDetect } from "redux/reducers/MetamaskChangeDetect_State";
import { useDispatch, useSelector } from "react-redux";
import { ToastMessage } from "components/ToastMessage";
import { toggleNotification } from "redux/reducers/Notification_State";
import { helper } from "utils/helper";
import HowToBuy from "pages/HowToBuy";
import ReactGA from 'react-ga';
import { googleTrackingId } from "constants";

ReactGA.initialize(googleTrackingId);

function App() {
  const dispatch = useDispatch();
  const { isNotificationReceived } = useSelector((state) => state.Notification_State)
  try {
    console.log("init mixpanel");
    MixPanelService.init();
  } catch (error) {
    console.log("error while connecting mixpanel", error);
  }

  useEffect(() => {
    if(isNotificationReceived) {
      helper.playSound()
      ToastMessage('New notification received', true);
      dispatch(toggleNotification(false))
    }
  }, [isNotificationReceived])


  useEffect(() => {
    try {
      console.log("init mixpanel");
      MixPanelService.init();
    } catch (error) {
      console.log("error while connecting mixpanel", error);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("userInfo"));
    if(user && user.email) {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", () => {
          console.log('metmask address changed')
          dispatch(toggleMetamaskChangeDetect(true))
        });
      }
    }
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/token" element={<HomePage />} /> */}
        <Route path="/how-to-buy" element={<HowToBuy/>} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/download" element={<Download />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/node" element={<Validator />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
        <Route path="/research" element={<Research />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/faq" element={<FAQ />} />

        {/* MARKETPLACE */}
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="details" element={<Details />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
