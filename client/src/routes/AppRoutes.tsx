import { Routes, Route } from "react-router-dom";

// Landing
import LandingPage from "../pages/landing/LandingPage";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Interview
import CreateInterview from "../pages/interview/CreateInterview";
import Interview from "../pages/interview/Interview";
import InterviewResult from "../pages/interview/InterviewResult";
import InterviewDetails from "../pages/interview/InterviewDetails";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";



// Profile
import Profile from "../pages/profile/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Interview Flow */}
      <Route
        path="/create-interview"
        element={<CreateInterview />}
      />

      {/* Optional shortcut from sidebar */}
      <Route
        path="/interview"
        element={<CreateInterview />}
      />

      <Route
        path="/interview/:id"
        element={<Interview />}
      />

      <Route
        path="/result"
        element={<InterviewResult />}
      />

      <Route
        path="/interview/details/:id"
        element={<InterviewDetails />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route path="/resume" element={<ResumeAnalyzer />} />
      

    </Routes>
  );
}