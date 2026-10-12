
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/role-dashboard.css";

function AdminDashboard() {
  const [reports, setReports] = useState([
    {
      id: "CP-1024",
      title: "Broken classroom fan",
      department: "Electrical",
      priority: "High",
      status: "In Progress",
      staff: "Rahul",
    },
    {
      id: "CP-1023",
      title: "Water leakage",
      department: "Plumbing",
      priority: "Medium",
      status: "Pending",
      staff: "Not Assigned",
    },
    {
      id: "CP-1022",
      title: "Dustbins need cleaning",
      department: "Cleanliness",
      priority: "Low",
      status: "Resolved",
      staff: "Amit",
    },
    {
      id: "CP-1021",
      title: "Wi-Fi not working",
      department: "IT Support",
      priority: "High",
      status: "Pending",
      staff: "Not Assigned",
    },
  ]);

  function assignStaff(id, staffName) {
    const updatedReports = reports.map((report) => {
      if (report.id === id) {
        return { ...report, staff: staffName };
      }
      return report;
    });

    setReports(updatedReports);
  }

  function updateStatus(id, newStatus) {
    const updatedReports = reports.map((report) => {
      if (report.id === id) {
        return { ...report, status: newStatus };
      }
      return report;
    });

    setReports(updatedReports);
  }

  const total = reports.length;
  const pending = reports.filter((report) => report.status === "Pending").length;
  const progress = reports.filter(
    (report) => report.status === "In Progress"
  ).length;
  const resolved = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  return (
    <div className="role-page">
      <aside className="role-sidebar">
        <Link to="/" className="role-brand">
          <span className="role-logo">CP</span>
          <span>CampusPulse</span>
        </Link>

        <p className="role-menu-title">MANAGEMENT</p>

        <Link to="/admin-dashboard" className="role-menu-active">
          Dashboard
        </Link>

        <a href="#all-reports" className="role-menu-link">
          All Complaints
        </a>

        <a href="#departments" className="role-menu-link">
          Departments
        </a>

        <a href="#staff-management" className="role-menu-link">
          Staff Management
        </a>

        <Link to="/" className="role-menu-link">
          Back to Home
        </Link>

        <div className="role-sidebar-image">
          <p>One campus. One team. Better solutions.</p>
        </div>
      </aside>

      <main className="role-main">
        <header className="role-topbar">
          <div>
            <span className="role-small-label">CAMPUSPULSE / MANAGEMENT</span>
            <h1>Admin Dashboard</h1>
          </div>

          <div className="role-user">
            <div className="role-avatar">AD</div>
            <div>
              <strong>Administrator</strong>
              <span>Management Team</span>
            </div>
          </div>
        </header>

        <section className="role-hero">
          <div>
            <span className="role-small-label">CAMPUS OVERVIEW</span>
            <h2>Make better decisions for your campus.</h2>
            <p>
              Review complaints, assign staff and monitor resolution progress.
            </p>
          </div>
          <img src="/campus-building.png" alt="College campus" />
        </section>

        <section className="role-stats">
          <div className="role-stat-card">
            <span>Total Reports</span>
            <strong>{total}</strong>
          </div>
          <div className="role-stat-card">
            <span>Pending</span>
            <strong>{pending}</strong>
          </div>
          <div className="role-stat-card">
            <span>In Progress</span>
            <strong>{progress}</strong>
          </div>
          <div className="role-stat-card">
            <span>Resolved</span>
            <strong>{resolved}</strong>
          </div>
        </section>

        <section className="role-panel" id="all-reports">
          <div className="role-panel-heading">
            <div>
              <h2>Complaint Management</h2>
              <p>Assign a staff member and update complaint status.</p>
            </div>
            <span className="role-demo-badge">DEMO DATA</span>
          </div>

          <div className="role-table-wrap">
            <table className="role-table">
              <thead>
                <tr>
                  <th>Complaint</th>
                  <th>Department</th>
                  <th>Priority</th>
                  <th>Assigned Staff</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <strong>{report.title}</strong>
                      <span>{report.id}</span>
                    </td>
                    <td>{report.department}</td>
                    <td>
                      <span
                        className={`role-priority ${report.priority.toLowerCase()}`}
                      >
                        {report.priority}
                      </span>
                    </td>
                    <td>
                      <select
                        aria-label={`Assign staff for ${report.id}`}
                        value={report.staff}
                        onChange={(event) =>
                          assignStaff(report.id, event.target.value)
                        }
                      >
                        <option>Not Assigned</option>
                        <option>Rahul</option>
                        <option>Amit</option>
                        <option>Priya</option>
                      </select>
                    </td>
                    <td>
                      <select
                        aria-label={`Update status for ${report.id}`}
                        value={report.status}
                        onChange={(event) =>
                          updateStatus(report.id, event.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="role-demo-note">
            Sample complaints only. Changes are not saved to a database.
          </p>
        </section>

        <section className="role-panel" id="departments">
          <h2>Department Overview</h2>
          <div className="role-department-grid">
            <div><strong>Electrical</strong><span>Lighting, fans and wiring</span></div>
            <div><strong>Plumbing</strong><span>Water supply and leakage</span></div>
            <div><strong>Cleanliness</strong><span>Campus hygiene and waste</span></div>
            <div><strong>IT Support</strong><span>Wi-Fi and computer labs</span></div>
          </div>
        </section>

        <section className="role-panel" id="staff-management">
          <h2>Staff Management</h2>
          <p>Sample staff directory for the frontend demonstration.</p>
          <div className="role-staff-list">
            <div><strong>Rahul</strong><span>Electrical Department</span></div>
            <div><strong>Amit</strong><span>Cleanliness Department</span></div>
            <div><strong>Priya</strong><span>IT Support</span></div>
          </div>
        </section>

        <footer className="role-footer">
          CampusPulse · Admin Portal · Frontend Demo
        </footer>
      </main>
    </div>
  );
}

export default AdminDashboard;
