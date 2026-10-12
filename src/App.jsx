import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import StudentDashboard from "./pages/StudentDashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";

// Temporary placeholder pages
function ReportPage() {
  return <h1>Report a Problem</h1>;
}

function MyComplaintsPage() {
  return <h1>My Complaints</h1>;
}

function ProfilePage() {
  return <h1>My Profile</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student pages */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/my-complaints" element={<MyComplaintsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Staff and Admin pages */}
        <Route
          path="/staff-dashboard"
          element={<StaffDashboard />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Existing routes */}
        <Route path="/complaints" element={<LandingPage />} />
        <Route path="/progress" element={<LandingPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;