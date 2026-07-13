import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Interview from "../pages/interview/Interview";
import InterviewResult from "../pages/interview/InterviewResult";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/result" element={<InterviewResult />} />
    </Routes>
  );
}