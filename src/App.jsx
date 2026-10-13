
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import StudentDashboard from "./pages/StudentDashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./styles/report.css";

// Report a Problem
function ReportPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Electrical");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const complaint = {
      id: `CP-${Date.now()}`,
      title,
      category,
      location,
      description,
      status: "Pending",
      date: new Date().toLocaleDateString("en-IN"),
    };

    const saved = JSON.parse(
      localStorage.getItem("campuspulse_complaints") || "[]"
    );

    saved.push(complaint);

    localStorage.setItem(
      "campuspulse_complaints",
      JSON.stringify(saved)
    );

    alert("Complaint submitted successfully!");

    setTitle("");
    setCategory("Electrical");
    setLocation("");
    setDescription("");
  }

  return (
    <div className="cp-page">
      <div className="cp-page-container">
        <Link to="/dashboard" className="cp-back-link">
          ← Back to Dashboard
        </Link>

        <span className="cp-eyebrow">STUDENT PORTAL</span>
        <h1>Report a Problem</h1>
        <p className="cp-description">
          Help us improve your campus. Share the details of the issue below.
        </p>

        <form className="cp-form" onSubmit={handleSubmit}>
          <label htmlFor="complaint-title">Complaint Title</label>
          <input
            id="complaint-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Broken classroom fan"
            required
          />

          <label htmlFor="complaint-category">Category</label>
          <select
            id="complaint-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Electrical</option>
            <option>Cleanliness</option>
            <option>Plumbing</option>
            <option>Classroom</option>
            <option>Hostel</option>
            <option>Other</option>
          </select>

          <label htmlFor="complaint-location">Location</label>
          <input
            id="complaint-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Block A, Room 204"
            required
          />

          <label htmlFor="complaint-description">Description</label>
          <textarea
            id="complaint-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the problem..."
            rows={5}
            required
          />

          <button className="cp-submit-button" type="submit">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

// My Complaints
function MyComplaintsPage() {
  const [complaints, setComplaints] = useState(() =>
    JSON.parse(
      localStorage.getItem("campuspulse_complaints") || "[]"
    )
  );

  function refreshComplaints() {
    setComplaints(
      JSON.parse(
        localStorage.getItem("campuspulse_complaints") || "[]"
      )
    );
  }

  return (
    <div className="cp-page">
      <div className="cp-page-container cp-wide">
        <Link to="/dashboard" className="cp-back-link">
          ← Back to Dashboard
        </Link>

        <span className="cp-eyebrow">STUDENT PORTAL</span>
        <h1>My Complaints</h1>
        <p className="cp-description">
          Track your reported campus issues and their current status.
        </p>

        <div className="cp-list-heading">
          <h2>Your Reports ({complaints.length})</h2>
          <button
            className="cp-secondary-button"
            type="button"
            onClick={refreshComplaints}
          >
            Refresh
          </button>
        </div>

        {complaints.length === 0 ? (
          <div className="cp-empty-state">
            <h3>No complaints yet</h3>
            <p>Your submitted complaints will appear here.</p>
            <Link className="cp-submit-button cp-button-link" to="/report">
              Report a Problem
            </Link>
          </div>
        ) : (
          <div className="cp-complaint-list">
            {complaints.map((complaint) => (
              <article className="cp-complaint-card" key={complaint.id}>
                <div className="cp-complaint-top">
                  <div>
                    <span className="cp-complaint-id">{complaint.id}</span>
                    <h3>{complaint.title}</h3>
                  </div>

                  <span className="cp-status">
                    {complaint.status}
                  </span>
                </div>

                <p>{complaint.description}</p>

                <div className="cp-complaint-details">
                  <span>Category: {complaint.category}</span>
                  <span>Location: {complaint.location}</span>
                  <span>Date: {complaint.date}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        <Link to="/report" className="cp-bottom-link">
          + Report another problem
        </Link>
      </div>
    </div>
  );
}

// My Profile
function ProfilePage() {
  const [name, setName] = useState(
    localStorage.getItem("campuspulse_name") || "Student User"
  );
  const [email, setEmail] = useState(
    localStorage.getItem("campuspulse_email") || ""
  );
  const [college, setCollege] = useState(
    localStorage.getItem("campuspulse_college") || ""
  );

  function handleSave(event) {
    event.preventDefault();

    localStorage.setItem("campuspulse_name", name);
    localStorage.setItem("campuspulse_email", email);
    localStorage.setItem("campuspulse_college", college);

    alert("Profile saved successfully!");
  }

  return (
    <div className="cp-page">
      <div className="cp-page-container">
        <Link to="/dashboard" className="cp-back-link">
          ← Back to Dashboard
        </Link>

        <span className="cp-eyebrow">STUDENT PORTAL</span>
        <h1>My Profile</h1>
        <p className="cp-description">
          Manage your basic student information.
        </p>

        <div className="cp-profile-avatar">
          {name.trim().charAt(0).toUpperCase() || "S"}
        </div>

        <form className="cp-form" onSubmit={handleSave}>
          <label htmlFor="profile-name">Full Name</label>
          <input
            id="profile-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="profile-email">Email Address</label>
          <input
            id="profile-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@example.com"
          />

          <label htmlFor="profile-college">College</label>
          <input
            id="profile-college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            placeholder="Enter your college name"
          />

          <button className="cp-submit-button" type="submit">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

// Shared styles are in report.css

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/my-complaints" element={<MyComplaintsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/complaints" element={<LandingPage />} />
        <Route path="/progress" element={<LandingPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
