import Calculator from "pages/Calculator";
import HomePage from "pages/HomePage";
import Technology from "pages/Technology";
import TokenPage from "pages/TokenPage";
import Validator from "pages/Validator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/validator" element={<Validator />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
