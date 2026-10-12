
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import BackToTop from "../components/BackToTop";
import { ArrowLeft, Lock, Mail, ArrowRight } from "lucide-react";
import "../styles/login.css";
<<<<<<< HEAD
=======

export default function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Backend integration is required for login. Student credentials verified on submission.");
  }
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

export default function LoginPage() {
  return (
    <main className="auth-page">
<<<<<<< HEAD

      <section className="auth-card">

        <h1>Welcome Back</h1>

        <p>
          Login to your CampusPulse student account.
        </p>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Backend integration is required for login.");
          }}
        >

          <label htmlFor="email">
            College Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your college email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
=======
      <div className="auth-bg-blob auth-bg-blob-1" />
      <div className="auth-bg-blob auth-bg-blob-2" />

      <section className="auth-card">
        <div className="auth-logo-center">
          <Logo size="lg" />
        </div>

        <h1>Welcome Back</h1>
        <p>Login to your CampusPulse student account to track and report issues.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span>College Email</span>
          </label>
          <div className="auth-input-wrapper">
            <Mail size={18} className="auth-input-icon" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. rollno@college.edu"
              autoComplete="email"
              required
            />
          </div>

          <div className="auth-label-row">
            <label htmlFor="password">Password</label>
            <a href="#forgot" className="auth-forgot" onClick={(e) => { e.preventDefault(); alert("Please contact college administration to reset your password."); }}>
              Forgot password?
            </a>
          </div>
          <div className="auth-input-wrapper">
            <Lock size={18} className="auth-input-icon" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your secure password"
              autoComplete="current-password"
              required
            />
          </div>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

          <button className="auth-submit" type="submit">
            <span>Sign In</span>
            <ArrowRight size={17} className="auth-btn-arrow" />
          </button>

        </form>

        <p className="auth-switch">
<<<<<<< HEAD
          New to CampusPulse?{" "}
          <Link to="/register">
            Create an account
          </Link>
=======
          New to CampusPulse? <Link to="/register">Create a student account</Link>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
        </p>

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
