
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/role-dashboard.css";

function StaffDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: "CP-1024",
      title: "Broken classroom fan",
      location: "Block A, Room 204",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "CP-1023",
      title: "Water leakage",
      location: "Block B, Ground Floor",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: "CP-1022",
      title: "Clean garden dustbins",
      location: "Central Garden",
      priority: "Low",
      status: "Resolved",
    },
  ]);

  function updateStatus(id, newStatus) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const pending = tasks.filter((task) => task.status === "Pending").length;
  const progress = tasks.filter((task) => task.status === "In Progress").length;
  const resolved = tasks.filter((task) => task.status === "Resolved").length;

  return (
    <div className="role-page">
      <aside className="role-sidebar">
        <Link to="/" className="role-brand">
          <span className="role-logo">CP</span>
          <span>CampusPulse</span>
        </Link>

        <p className="role-menu-title">STAFF PORTAL</p>

        <Link to="/staff-dashboard" className="role-menu-active">
          Dashboard
        </Link>

        <a href="#assigned-tasks" className="role-menu-link">
          My Assigned Tasks
        </a>

        <a href="#work-history" className="role-menu-link">
          Work History
        </a>

        <Link to="/" className="role-menu-link">
          Back to Home
        </Link>

        <div className="role-sidebar-image">
          <p>Working together for a better campus.</p>
        </div>
      </aside>

      <main className="role-main">
        <header className="role-topbar">
          <div>
            <span className="role-small-label">CAMPUSPULSE / STAFF</span>
            <h1>Staff Dashboard</h1>
          </div>

          <div className="role-user">
            <div className="role-avatar">ST</div>
            <div>
              <strong>Staff Member</strong>
              <span>Maintenance Team</span>
            </div>
          </div>
        </header>

        <section className="role-hero">
          <div>
            <span className="role-small-label">STAFF WORKSPACE</span>
            <h2>Manage your assigned tasks.</h2>
            <p>
              Review campus issues, update progress and keep students informed.
            </p>
          </div>
          <img src="/campus-building.png" alt="College campus" />
        </section>

        <section className="role-stats">
          <div className="role-stat-card">
            <span>Total Assigned</span>
            <strong>{tasks.length}</strong>
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

        <section className="role-panel" id="assigned-tasks">
          <div className="role-panel-heading">
            <div>
              <h2>My Assigned Tasks</h2>
              <p>Update a task when its status changes.</p>
            </div>
          </div>

          <div className="role-task-list">
            {tasks.map((task) => (
              <article className="role-task" key={task.id}>
                <div className="role-task-details">
                  <span className="role-task-id">{task.id}</span>
                  <h3>{task.title}</h3>
                  <p>Location: {task.location}</p>
                  <span className={`role-priority ${task.priority.toLowerCase()}`}>
                    {task.priority} Priority
                  </span>
                </div>

                <div className="role-task-update">
                  <label htmlFor={`status-${task.id}`}>Update status</label>
                  <select
                    id={`status-${task.id}`}
                    value={task.status}
                    onChange={(event) =>
                      updateStatus(task.id, event.target.value)
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                  <span className="role-current-status">{task.status}</span>
                </div>
              </article>
            ))}
          </div>

          <p className="role-demo-note">
            Demo data only. Changes are temporary and will reset on refresh.
          </p>
        </section>

        <section className="role-panel" id="work-history">
          <h2>Work Summary</h2>
          <p>
            You have completed {resolved} of your {tasks.length} sample tasks.
          </p>
          <div className="role-progress-track">
            <div
              className="role-progress-fill"
              style={{
                width: `${tasks.length ? (resolved / tasks.length) * 100 : 0}%`,
              }}
            />
          </div>
        </section>

        <footer className="role-footer">
          CampusPulse · Staff Portal · Frontend Demo
        </footer>
      </main>
    </div>
  );
}

export default StaffDashboard;
