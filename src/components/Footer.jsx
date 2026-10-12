import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="cp-footer" id="contact">
      <div className="cp-footer-left">
        <Logo size="md" variant="dark" to="/" />
      </div>

      <p className="cp-footer-center">
        A better campus begins with a problem reported.
      </p>

      <span className="cp-copyright">
        © {new Date().getFullYear()} CampusPulse
      </span>
    </footer>
  );
}
