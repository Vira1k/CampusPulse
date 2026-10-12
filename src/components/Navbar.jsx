import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import "../styles/navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="cp-header">
      <Logo size="md" />

      <nav className="cp-navigation">
        <a className="cp-nav-active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="cp-header-actions">
        <Link to="/login" className="cp-login">
          Login
        </Link>

        <Link to="/register" className="cp-get-started">
          <span>Get Started</span>
          <ArrowRight size={16} className="cp-btn-arrow" />
        </Link>
      </div>

      <button
        className="cp-menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Drawer */}
      <nav className={`cp-mobile-navigation ${mobileOpen ? "cp-mobile-navigation-open" : ""}`}>
        <a href="#home" onClick={closeMobileMenu}>Home</a>
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#how-it-works" onClick={closeMobileMenu}>How It Works</a>
        <a href="#features" onClick={closeMobileMenu}>Features</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <div className="cp-mobile-divider" />
        <Link to="/login" className="cp-mobile-login" onClick={closeMobileMenu}>
          Login
        </Link>
        <Link to="/register" className="cp-mobile-get-started" onClick={closeMobileMenu}>
          Get Started <ArrowRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
