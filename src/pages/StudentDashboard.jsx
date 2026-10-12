
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
import Logo from "../components/Logo";
import BackToTop from "../components/BackToTop";

import "../styles/student-dashboard.css";

const complaints = [
  {
    id: "CP-1024",
    title: "Broken classroom fan",
    category: "Electrical",
    location: "Block A, Room 204",
    status: "In Progress",
    date: "Oct 08, 2026",
  },
  {
    id: "CP-1023",
    title: "Water leakage near washroom",
    category: "Plumbing",
    location: "Block B, Ground Floor",
    status: "Pending",
    date: "Oct 07, 2026",
  },
  {
    id: "CP-1022",
    title: "Dustbins need cleaning",
    category: "Cleanliness",
    location: "Central Garden",
    status: "Resolved",
    date: "Oct 05, 2026",
  },
];

const stats = [
  {
    title: "Total Complaints",
    value: "12",
    note: "Complaints submitted",
    icon: ClipboardList,
    type: "total",
  },
  {
    title: "Pending",
    value: "03",
    note: "Awaiting action",
    icon: Clock3,
    type: "pending",
  },
  {
    title: "In Progress",
    value: "04",
    note: "Currently being handled",
    icon: CircleAlert,
    type: "progress",
  },
  {
    title: "Resolved",
    value: "05",
    note: "Successfully completed",
    icon: CheckCircle2,
    type: "resolved",
  },
];

function StudentDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredComplaints =
    activeFilter === "All"
      ? complaints
      : complaints.filter(
          (complaint) => complaint.status === activeFilter
        );

  return (
    <div className="sd-page">
      <aside className={`sd-sidebar ${menuOpen ? "sd-sidebar-open" : ""}`}>
        <div className="sd-brand-wrapper">
          <Logo size="md" />
        </div>

        <p className="sd-menu-label">MAIN MENU</p>

        <nav className="sd-sidebar-nav">
          <Link to="/dashboard" className="sd-nav-link sd-nav-active">
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          <Link to="/report" className="sd-nav-link">
            <FilePlus2 size={19} />
            Report a Problem
          </Link>

          <Link to="/my-complaints" className="sd-nav-link">
            <ClipboardList size={19} />
            My Complaints
          </Link>

          <Link to="/profile" className="sd-nav-link">
            <CircleUserRound size={19} />
            My Profile
          </Link>
        </nav>

        <div className="sd-sidebar-bottom">
          <div className="sd-help-card">
            <div className="sd-help-icon">
              <ShieldCheck size={22} />
            </div>
            <h3>Make a difference</h3>
            <p>Your report can help improve the campus for everyone.</p>
            <Link to="/report">
              Report an issue <ArrowRight size={15} />
            </Link>
          </div>

          <Link to="/" className="sd-logout">
            <LogOut size={18} />
            Back to Home
          </Link>
        </div>
      </aside>

      {menuOpen && (
        <button
          type="button"
          className="sd-mobile-overlay"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="sd-main">
        <header className="sd-topbar">
          <button
            type="button"
            className="sd-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
                alert("Notifications will be available in a future update.")
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

        <div className="sd-content">
          <section className="sd-welcome">
            <div>
              <span className="sd-eyebrow">
                STUDENT PORTAL
              </span>
              <h1>Welcome back, Student!</h1>
              <p>
                Track your complaints and help make your campus a better place.
              </p>
            </div>

            <Link to="/report" className="sd-primary-button">
              <FilePlus2 size={18} />
              Report a Problem
              <ArrowRight size={17} />
            </Link>
          </section>

          <section className="sd-stats-grid" aria-label="Complaint statistics">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  className={`sd-stat-card sd-stat-${stat.type}`}
                  key={stat.title}
                >
                  <div className="sd-stat-top">
                    <span>{stat.title}</span>
                    <span className="sd-stat-icon">
                      <Icon size={21} />
                    </span>
                  </div>

                  <strong className="sd-stat-value">{stat.value}</strong>
                  <p>{stat.note}</p>
                </article>
              );
            })}
          </section>

          <section className="sd-quick-section">
            <div className="sd-section-heading">
              <div>
                <h2>Quick Actions</h2>
                <p>Get things done in just a few clicks.</p>
              </div>
            </div>

            <div className="sd-quick-grid">
              <Link to="/report" className="sd-quick-card">
                <span className="sd-quick-icon sd-quick-gold">
                  <FilePlus2 size={23} />
                </span>
                <span className="sd-quick-copy">
                  <strong>Report a Problem</strong>
                  <span>Submit a new campus complaint.</span>
                </span>
                <ArrowRight size={18} className="sd-quick-arrow" />
              </Link>

              <Link to="/my-complaints" className="sd-quick-card">
                <span className="sd-quick-icon sd-quick-blue">
                  <ClipboardList size={23} />
                </span>
                <span className="sd-quick-copy">
                  <strong>Track Complaints</strong>
                  <span>Check the status of your reports.</span>
                </span>
                <ArrowRight size={18} className="sd-quick-arrow" />
              </Link>

              <Link to="/profile" className="sd-quick-card">
                <span className="sd-quick-icon sd-quick-green">
                  <CircleUserRound size={23} />
                </span>
                <span className="sd-quick-copy">
                  <strong>My Profile</strong>
                  <span>View your student account details.</span>
                </span>
                <ArrowRight size={18} className="sd-quick-arrow" />
              </Link>
            </div>
          </section>

          <section className="sd-complaints-section">
            <div className="sd-section-heading sd-complaints-heading">
              <div>
                <h2>Recent Complaints</h2>
                <p>Keep an eye on the latest reported issues.</p>
              </div>

              <Link to="/my-complaints" className="sd-view-all">
                View all <ArrowRight size={16} />
              </Link>
            </div>

            <div className="sd-filter-row">
              {["All", "Pending", "In Progress", "Resolved"].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`sd-filter-button ${
                    activeFilter === filter ? "sd-filter-active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

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
                  {filteredComplaints.map((complaint) => (
                    <tr key={complaint.id}>
                      <td>
                        <div className="sd-complaint-title">
                          <strong>{complaint.title}</strong>
                          <span>
                            {complaint.id} · {complaint.category}
                          </span>
                        </div>
                      </td>

                      <td>
                        <span className="sd-location">
                          <MapPin size={14} />
                          {complaint.location}
                        </span>
                      </td>

                      <td className="sd-date">{complaint.date}</td>

                      <td>
                        <span
                          className={`sd-status sd-status-${complaint.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {filteredComplaints.length === 0 && (
                    <tr>
                      <td colSpan={4} className="sd-empty-state">
                        No complaints found for this status.
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

          <footer className="sd-footer">
            <span>© {new Date().getFullYear()} CampusPulse</span>
            <span>Building a better campus, together.</span>
          </footer>
        </div>
      </main>

      <BackToTop />
    </div>
  );
}

export default StudentDashboard;
