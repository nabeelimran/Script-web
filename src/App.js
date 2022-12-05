import ScrollToTop from "components/ScrollToTop";
import UnlockWalletPageLayout from "layouts/UnlockWalletPageLayout";
import Calculator from "pages/Calculator";
import CookiesPolicy from "pages/CookiesPolicy";
import Explorer from "pages/Explorer";
import FAQ from "pages/FAQ";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Register from "pages/Regsiter";
import Research from "pages/Research";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/validator" element={<Validator />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/research" element={<Research />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/faq" element={<FAQ />} />

        {/* TV ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tv" element={<TvHomepage />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="stake" element={<Stake />} />
        <Route path="/unlock-wallet" element={<UnlockWalletPageLayout />}>
          <Route path="key-store" element={<KeyStore />} />
          <Route path="mnemonics" element={<Mnemonics />} />
          <Route path="private-key" element={<PrivateKey />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
