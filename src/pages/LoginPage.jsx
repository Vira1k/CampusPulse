
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function LoginPage() {
  return (
    <main className="auth-page">

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

          <button className="auth-submit" type="submit">
            Login
          </button>

        </form>

        <p className="auth-switch">
          New to CampusPulse?{" "}
          <Link to="/register">
            Create an account
          </Link>
        </p>

        <Link to="/" className="auth-back">
          Back to Home
        </Link>

      </section>

    </main>
  );
}
