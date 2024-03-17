import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import { Helmet } from "react-helmet-async";
import CommunityPage from "./pages/CommunityPage";
import CommunityWritePage from "./pages/CommunityWritePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";

function App() {
  return (
    <>
      <Helmet>
        <title>금오공과대학교 멋쟁이사자처럼</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<RegisterPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/write" element={<CommunityWritePage />} />
        <Route path="/detail" element={<CommunityDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
