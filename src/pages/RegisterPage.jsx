
import { Link } from "react-router-dom";
import "../styles/register.css";

export default function RegisterPage() {
  return (
    <main className="auth-page">

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

          {/* SUBMIT BUTTON */}
          <button className="auth-submit" type="submit">
            Create Account
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="auth-switch">
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </p>

        {/* HOME LINK */}
        <Link to="/" className="auth-back">
          Back to Home
        </Link>

      </section>

    </main>
  );
}
