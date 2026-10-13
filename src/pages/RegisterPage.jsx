
import { Link } from "react-router-dom";
import "../styles/register.css";

function RegisterPage() {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Registration backend is not connected yet.");
  }

  return (
    <div className="register-page">

      {/* Registration Card */}
      <div className="register-card">

        {/* Logo */}
        <Link to="/" className="register-logo">
          Campus<span>Pulse</span>
        </Link>

        {/* Heading */}
        <h1>Create Account</h1>

        <p className="register-description">
          Register with your college credentials to join CampusPulse.
        </p>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />

          <label htmlFor="email">College Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your college email"
            autoComplete="email"
            required
          />

          <label htmlFor="rollNumber">
            College Roll Number / Student ID
          </label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            placeholder="Enter your roll number"
            required
          />

          <label htmlFor="password">Create Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            autoComplete="new-password"
            minLength={8}
            required
          />

          {/* Submit Button */}
          <button type="submit">
            Create Student Account →
          </button>

        </form>

        {/* Login Link */}
        <p className="register-login">
          Already registered? <Link to="/login">Sign In</Link>
        </p>

        {/* Home Link */}
        <Link to="/" className="register-back">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default RegisterPage;
