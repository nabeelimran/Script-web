import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazyloading } from "utils/lazyloading";
import { Suspense } from "react";

const ConnectWalletModal = lazyloading(import("components/ConnectWalletModal"));
const ScrollToTop = lazyloading(import("components/ScrollToTop"));
const DashboardLayout = lazyloading(import("layouts/DashboardLayout"));
const UnlockWalletPageLayout = lazyloading(
  import("layouts/UnlockWalletPageLayout")
);
const AccountDetails = lazyloading(import("pages/AccountDetails"));
const Calculator = lazyloading(import("pages/Calculator"));
const ConnectWallet = lazyloading(import("pages/ConnectWallet"));
const CookiesPolicy = lazyloading(import("pages/CookiesPolicy"));
const Analytics = lazyloading(import("pages/Dashboard/Analytics"));
const ChangePassword = lazyloading(import("pages/Dashboard/ChangePassword"));
const EditProfile = lazyloading(import("pages/Dashboard/EditProfile"));
const ShareRefferal = lazyloading(import("pages/Dashboard/ShareRefferal"));
const TokenMapping = lazyloading(import("pages/Dashboard/TokenMapping"));
const Details = lazyloading(import("pages/Details"));
const Explorer = lazyloading(import("pages/Explorer"));
const FAQ = lazyloading(import("pages/FAQ"));
const Login = lazyloading(import("pages/Login"));
const Marketplace = lazyloading(import("pages/Marketplace"));
const PrivacyPolicy = lazyloading(import("pages/PrivacyPolicy"));
const Register = lazyloading(import("pages/Regsiter"));
const Research = lazyloading(import("pages/Research"));
const Rewards = lazyloading(import("pages/Rewards"));
const Stake = lazyloading(import("pages/Stake"));
const Technology = lazyloading(import("pages/Technology"));
const TermsAndConditions = lazyloading(import("pages/TermsAndConditions"));
const TokenPage = lazyloading(import("pages/TokenPage"));
const TvHomepage = lazyloading(import("pages/TvHomepage"));
const KeyStore = lazyloading(import("pages/UnlockWallet/KeyStore"));
const Mnemonics = lazyloading(import("pages/UnlockWallet/Mnemonics"));
const PrivateKey = lazyloading(import("pages/UnlockWallet/PrivateKey"));
const Validator = lazyloading(import("pages/Validator"));
const Home = lazyloading(import("pages/Dashboard/Home"));
const HomePage = lazyloading(import("pages/HomePage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <ScrollToTop />
        <ConnectWalletModal />
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
      </Suspense>
    </Router>
  );
}

export default App;
