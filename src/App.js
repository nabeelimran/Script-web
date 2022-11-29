import ScrollToTop from "components/ScrollToTop";
import Calculator from "pages/Calculator";
import CookiesPolicy from "pages/CookiesPolicy";
import FAQ from "pages/FAQ";
import HomePage from "pages/HomePage";
import Login from "pages/Login";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Research from "pages/Research";
import Technology from "pages/Technology";
import TermsAndConditions from "pages/TermsAndConditions";
import TokenPage from "pages/TokenPage";
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
      </Routes>
    </Router>
  );
}

export default App;
