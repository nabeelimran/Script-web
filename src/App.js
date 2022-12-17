import ConnectWalletModal from "components/ConnectWalletModal";
import ScrollToTop from "components/ScrollToTop";
import DashboardLayout from "layouts/DashboardLayout";
import UnlockWalletPageLayout from "layouts/UnlockWalletPageLayout";
import AccountDetails from "pages/AccountDetails";
import Calculator from "pages/Calculator";
import ConnectWallet from "pages/ConnectWallet";
import CookiesPolicy from "pages/CookiesPolicy";
import Analytics from "pages/Dashboard/Analytics";
import ChangePassword from "pages/Dashboard/ChangePassword";
import EditProfile from "pages/Dashboard/EditProfile";
import ShareRefferal from "pages/Dashboard/ShareRefferal";
import TokenMapping from "pages/Dashboard/TokenMapping";
import Home from "pages/Dashboard/Home";
import Details from "pages/Details";
import Explorer from "pages/Explorer";
import FAQ from "pages/FAQ";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import Marketplace from "pages/Marketplace";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Register from "pages/Regsiter";
import Research from "pages/Research";
import Rewards from "pages/Rewards";
import Stake from "pages/Stake";
import Technology from "pages/Technology";
import TermsAndConditions from "pages/TermsAndConditions";
import TokenPage from "pages/TokenPage";
import TvHomepage from "pages/TvHomepage";
import KeyStore from "pages/UnlockWallet/KeyStore";
import Mnemonics from "pages/UnlockWallet/Mnemonics";
import PrivateKey from "pages/UnlockWallet/PrivateKey";
import Validator from "pages/Validator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailConfirmation from "components/EmailConfirmation";
import CreatePasswordForm from "components/CreatePasswordForm";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConnectWalletModal />
      <EmailConfirmation/>
      <CreatePasswordForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/node" element={<Validator />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/research" element={<Research />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/faq" element={<FAQ />} />

        {/* TV ROUTES */}
        <Route path="/tv" element={<TvHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="stake" element={<Stake />} />
        <Route path="account-details" element={<AccountDetails />} />
        <Route path="reward" element={<Rewards />} />
        <Route path="connect-wallet" element={<ConnectWallet />} />

        <Route path="/unlock-wallet" element={<UnlockWalletPageLayout />}>
          <Route path="key-store" element={<KeyStore />} />
          <Route path="mnemonics" element={<Mnemonics />} />
          <Route path="private-key" element={<PrivateKey />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="" index element={<Home />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="share-referral" element={<ShareRefferal />} />
          <Route path="token-mapping" element={<TokenMapping />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* MARKETPLACE */}
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
