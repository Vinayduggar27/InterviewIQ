import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Interview from "../pages/interview/Interview";
import InterviewResult from "../pages/interview/InterviewResult";
import CreateInterview from "../pages/interview/CreateInterview";
import InterviewDetails from "../pages/interview/InterviewDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview/:id" element={<Interview />} />
      <Route path="/result" element={<InterviewResult />} />
      <Route
  path="/interview/details/:id"
  element={<InterviewDetails />}
/>
      <Route
    path="/create-interview"
    element={<CreateInterview />}
/>
    </Routes>
  );
}