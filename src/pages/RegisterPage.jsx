
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import BackToTop from "../components/BackToTop";
import { ArrowLeft, User, Mail, Hash, Lock, ArrowRight } from "lucide-react";
import "../styles/register.css";
<<<<<<< HEAD
=======

export default function RegisterPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Backend integration is required for registration. College email will be verified.");
  }
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

export default function RegisterPage() {
  return (
    <main className="auth-page">
<<<<<<< HEAD

      <section className="auth-card">

        <h1>Create Account</h1>

        <p>
          Register your student account on CampusPulse.
        </p>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Backend integration is required for registration.");
          }}
        >

          {/* FULL NAME */}
          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />

          {/* COLLEGE EMAIL */}
          <label htmlFor="college-email">
            College Email
          </label>

          <input
            id="college-email"
            name="email"
            type="email"
            placeholder="Enter your college email"
            autoComplete="email"
            required
          />

          {/* ROLL NUMBER */}
          <label htmlFor="roll-number">
            College Roll Number
          </label>

          <input
            id="roll-number"
            name="rollNumber"
            type="text"
            placeholder="Enter your roll number"
            required
          />

          {/* PASSWORD */}
          <label htmlFor="new-password">
            Create Password
          </label>

          <input
            id="new-password"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            autoComplete="new-password"
            minLength={8}
            required
          />
=======
      <div className="auth-bg-blob auth-bg-blob-1" />
      <div className="auth-bg-blob auth-bg-blob-2" />

      <section className="auth-card">
        <div className="auth-logo-center">
          <Logo size="lg" />
        </div>

        <h1>Create Account</h1>
        <p>Register with your approved college credentials to join CampusPulse.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <div className="auth-input-wrapper">
            <User size={18} className="auth-input-icon" />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Alex Johnson"
              autoComplete="name"
              required
            />
          </div>

          <label htmlFor="college-email">College Email</label>
          <div className="auth-input-wrapper">
            <Mail size={18} className="auth-input-icon" />
            <input
              id="college-email"
              name="email"
              type="email"
              placeholder="e.g. student@college.edu"
              autoComplete="email"
              required
            />
          </div>

          <label htmlFor="roll-number">College Roll Number / Student ID</label>
          <div className="auth-input-wrapper">
            <Hash size={18} className="auth-input-icon" />
            <input
              id="roll-number"
              name="rollNumber"
              type="text"
              placeholder="e.g. 21CS042"
              required
            />
          </div>

          <label htmlFor="new-password">Create Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} className="auth-input-icon" />
            <input
              id="new-password"
              name="password"
              type="password"
              placeholder="Minimum 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

          {/* SUBMIT BUTTON */}
          <button className="auth-submit" type="submit">
            <span>Create Student Account</span>
            <ArrowRight size={17} className="auth-btn-arrow" />
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="auth-switch">
<<<<<<< HEAD
          Already registered?{" "}
          <Link to="/login">Login</Link>
=======
          Already registered? <Link to="/login">Sign in here</Link>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
        </p>

        {/* HOME LINK */}
        <Link to="/" className="auth-back">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

      </section>

<<<<<<< HEAD
=======
      <BackToTop />
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
    </main>
  );
}
