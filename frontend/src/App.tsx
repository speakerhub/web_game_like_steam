import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screen/home";
import Store from "./screen/store/store";
import Library from "./screen/library/library";
import Community from "./screen/comunity/community";
import LearnMore from "./screen/learnMore";
import Login from "./screen/login/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/library" element={<Library />} />
        <Route path="/community" element={<Community />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
