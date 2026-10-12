import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  LayoutDashboard,
  FilePlus2,
  ClipboardList,
  CircleUserRound,
  Bell,
  Clock3,
  CheckCircle2,
  CircleAlert,
  ArrowRight,
  MapPin,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import "../styles/student-dashboard.css";

function StudentDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="sd-page">
      {/* SIDEBAR */}
      <aside
        className={`sd-sidebar ${
          menuOpen ? "sd-sidebar-open" : ""
        }`}
      >
        <Link to="/" className="sd-brand" onClick={closeMenu}>
          <span className="sd-brand-icon">
            <ShieldCheck size={24} />
          </span>

          <span>
            Campus<span>Pulse</span>
          </span>
        </Link>

        <p className="sd-menu-label">MAIN MENU</p>

        <nav className="sd-sidebar-nav">
          <Link
            to="/dashboard"
            className="sd-nav-link sd-nav-active"
            onClick={closeMenu}
          >
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          <Link
            to="/report"
            className="sd-nav-link"
            onClick={closeMenu}
          >
            <FilePlus2 size={19} />
            Report a Problem
          </Link>

          <Link
            to="/my-complaints"
            className="sd-nav-link"
            onClick={closeMenu}
          >
            <ClipboardList size={19} />
            My Complaints
          </Link>

          <Link
            to="/profile"
            className="sd-nav-link"
            onClick={closeMenu}
          >
            <CircleUserRound size={19} />
            My Profile
          </Link>
        </nav>

        <div className="sd-sidebar-bottom">
          <div className="sd-help-card">
            <div className="sd-help-icon">
              <ShieldCheck size={21} />
            </div>

            <h3>Make a difference</h3>

            <p>
              Your report can help improve the campus for everyone.
            </p>

            <Link to="/report" onClick={closeMenu}>
              Report an issue <ArrowRight size={15} />
            </Link>
          </div>

          <Link
            to="/"
            className="sd-logout"
            onClick={closeMenu}
          >
            <LogOut size={18} />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <button
          type="button"
          className="sd-mobile-overlay"
          aria-label="Close navigation"
          onClick={closeMenu}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="sd-main">
        {/* TOPBAR */}
        <header className="sd-topbar">
          <button
            type="button"
            className="sd-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="sd-breadcrumb">
            <span>CampusPulse</span>
            <span className="sd-breadcrumb-separator">/</span>
            <strong>Dashboard</strong>
          </div>

          <div className="sd-topbar-actions">
            <button
              type="button"
              className="sd-notification"
              aria-label="Notifications"
              onClick={() =>
                alert(
                  "Notifications will be available in a future update."
                )
              }
            >
              <Bell size={20} />
              <span />
            </button>

            <div className="sd-user-mini">
              <div className="sd-avatar">ST</div>

              <div className="sd-user-mini-text">
                <strong>Student User</strong>
                <span>Student Account</span>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="sd-content">
          {/* WELCOME SECTION */}
          <section className="sd-welcome">
       <div>
        <span className="sd-eyebrow">STUDENT PORTAL</span>

        <h1>Welcome back, Student!</h1>

        <p>
          Track your complaints and help make your campus
          a better place.
        </p>
      </div>

      <Link to="/report" className="sd-primary-button">
        <FilePlus2 size={18} />
        Report a Problem
        <ArrowRight size={17} />
      </Link>
    </section>

    <div className="sd-campus-image">
      <img
        src="/campus-building.png"
        alt="College campus"
      />
    </div>

          {/* STATISTICS */}
          <section
            className="sd-stats-grid"
            aria-label="Complaint statistics"
          >
            <article className="sd-stat-card sd-stat-total">
              <div className="sd-stat-top">
                <span>Total Complaints</span>

                <span className="sd-stat-icon">
                  <ClipboardList size={21} />
                </span>
              </div>

              <strong className="sd-stat-value">12</strong>
              <p>Complaints submitted</p>
            </article>

            <article className="sd-stat-card sd-stat-pending">
              <div className="sd-stat-top">
                <span>Pending</span>

                <span className="sd-stat-icon">
                  <Clock3 size={21} />
                </span>
              </div>

              <strong className="sd-stat-value">03</strong>
              <p>Awaiting action</p>
            </article>

            <article className="sd-stat-card sd-stat-progress">
              <div className="sd-stat-top">
                <span>In Progress</span>

                <span className="sd-stat-icon">
                  <CircleAlert size={21} />
                </span>
              </div>

              <strong className="sd-stat-value">04</strong>
              <p>Currently being handled</p>
            </article>

            <article className="sd-stat-card sd-stat-resolved">
              <div className="sd-stat-top">
                <span>Resolved</span>

                <span className="sd-stat-icon">
                  <CheckCircle2 size={21} />
                </span>
              </div>

              <strong className="sd-stat-value">05</strong>
              <p>Successfully completed</p>
            </article>
          </section>

          {/* QUICK ACTIONS */}
          <section className="sd-quick-section">
            <div className="sd-section-heading">
              <div>
                <h2>Quick Actions</h2>
                <p>Get things done in just a few clicks.</p>
              </div>
            </div>

            <div className="sd-quick-grid">
              <Link
                to="/report"
                className="sd-quick-card"
                onClick={closeMenu}
              >
                <span className="sd-quick-icon sd-quick-gold">
                  <FilePlus2 size={23} />
                </span>

                <span className="sd-quick-copy">
                  <strong>Report a Problem</strong>
                  <span>Submit a new campus complaint.</span>
                </span>

                <ArrowRight
                  size={18}
                  className="sd-quick-arrow"
                />
              </Link>

              <Link
                to="/my-complaints"
                className="sd-quick-card"
                onClick={closeMenu}
              >
                <span className="sd-quick-icon sd-quick-blue">
                  <ClipboardList size={23} />
                </span>

                <span className="sd-quick-copy">
                  <strong>Track Complaints</strong>
                  <span>Check the status of your reports.</span>
                </span>

                <ArrowRight
                  size={18}
                  className="sd-quick-arrow"
                />
              </Link>

              <Link
                to="/profile"
                className="sd-quick-card"
                onClick={closeMenu}
              >
                <span className="sd-quick-icon sd-quick-green">
                  <CircleUserRound size={23} />
                </span>

                <span className="sd-quick-copy">
                  <strong>My Profile</strong>
                  <span>View your student account details.</span>
                </span>

                <ArrowRight
                  size={18}
                  className="sd-quick-arrow"
                />
              </Link>
            </div>
          </section>

          {/* RECENT COMPLAINTS */}
          <section className="sd-complaints-section">
            <div className="sd-section-heading sd-complaints-heading">
              <div>
                <h2>Recent Complaints</h2>
                <p>
                  Keep an eye on the latest reported issues.
                </p>
              </div>

              <Link
                to="/my-complaints"
                className="sd-view-all"
                onClick={closeMenu}
              >
                View all <ArrowRight size={16} />
              </Link>
            </div>

            {/* FILTER BUTTONS */}
            <div className="sd-filter-row">
              <button
                type="button"
                className={`sd-filter-button ${
                  activeFilter === "All"
                    ? "sd-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>

              <button
                type="button"
                className={`sd-filter-button ${
                  activeFilter === "Pending"
                    ? "sd-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter("Pending")}
              >
                Pending
              </button>

              <button
                type="button"
                className={`sd-filter-button ${
                  activeFilter === "In Progress"
                    ? "sd-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter("In Progress")}
              >
                In Progress
              </button>

              <button
                type="button"
                className={`sd-filter-button ${
                  activeFilter === "Resolved"
                    ? "sd-filter-active"
                    : ""
                }`}
                onClick={() => setActiveFilter("Resolved")}
              >
                Resolved
              </button>
            </div>

            {/* COMPLAINTS TABLE */}
            <div className="sd-table-wrapper">
              <table className="sd-complaints-table">
                <thead>
                  <tr>
                    <th>Complaint</th>
                    <th>Location</th>
                    <th>Date Reported</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {(activeFilter === "All" ||
                    activeFilter === "In Progress") && (
                    <tr>
                      <td>
                        <div className="sd-complaint-title">
                          <strong>
                            Broken classroom fan
                          </strong>
                          <span>CP-1024 · Electrical</span>
                        </div>
                      </td>

                      <td>
                        <span className="sd-location">
                          <MapPin size={14} />
                          Block A, Room 204
                        </span>
                      </td>

                      <td className="sd-date">
                        Oct 08, 2026
                      </td>

                      <td>
                        <span className="sd-status sd-status-in-progress">
                          In Progress
                        </span>
                      </td>
                    </tr>
                  )}

                  {(activeFilter === "All" ||
                    activeFilter === "Pending") && (
                    <tr>
                      <td>
                        <div className="sd-complaint-title">
                          <strong>
                            Water leakage near washroom
                          </strong>
                          <span>CP-1023 · Plumbing</span>
                        </div>
                      </td>

                      <td>
                        <span className="sd-location">
                          <MapPin size={14} />
                          Block B, Ground Floor
                        </span>
                      </td>

                      <td className="sd-date">
                        Oct 07, 2026
                      </td>

                      <td>
                        <span className="sd-status sd-status-pending">
                          Pending
                        </span>
                      </td>
                    </tr>
                  )}

                  {(activeFilter === "All" ||
                    activeFilter === "Resolved") && (
                    <tr>
                      <td>
                        <div className="sd-complaint-title">
                          <strong>
                            Dustbins need cleaning
                          </strong>
                          <span>CP-1022 · Cleanliness</span>
                        </div>
                      </td>

                      <td>
                        <span className="sd-location">
                          <MapPin size={14} />
                          Central Garden
                        </span>
                      </td>

                      <td className="sd-date">
                        Oct 05, 2026
                      </td>

                      <td>
                        <span className="sd-status sd-status-resolved">
                          Resolved
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p className="sd-demo-note">
              These are sample complaints for frontend demonstration only.
            </p>
          </section>

          {/* FOOTER */}
          <footer className="sd-footer">
            <span>
              © {new Date().getFullYear()} CampusPulse
            </span>

            <span>
              Building a better campus, together.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;