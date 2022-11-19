import HomePage from "pages/HomePage";
import TokenPage from "pages/TokenPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
