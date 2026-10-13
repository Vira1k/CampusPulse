import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  ChartNoAxesCombined,
  Leaf,
  ArrowRight,
  QrCode,
  FileText,
  Settings,
  CheckCircle2,
  Building2,
  Menu,
  Search,
  Send,
} from "lucide-react";

import "../styles/landing.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../App.css";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="cp-page" id="home">
      {/* ================= NAVBAR ================= */}
      <header className="cp-header">
        <Link to="/" className="cp-logo" aria-label="CampusPulse home">
          <span className="cp-logo-icon">
            <ShieldCheck size={25} />
          </span>
          <span className="cp-logo-text">
            Campus<span>Pulse</span>
          </span>
        </Link>

        <nav className="cp-navigation" aria-label="Main navigation">
          <a className="cp-nav-active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="cp-header-actions">
          <a className="cp-search-button" href="#features" aria-label="Search features">
            <Search size={20} />
          </a>
          <Link to="/login" className="cp-login">Login</Link>
          <Link to="/register" className="cp-get-started">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="cp-menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <Menu size={25} />
        </button>

        <nav
          className={`cp-mobile-navigation ${mobileMenuOpen ? "cp-mobile-navigation-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
        </nav>
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="cp-hero">
          <img
            className="cp-hero-background"
            src="/campus-building.png"
            alt="College campus building"
          />
          <div className="cp-hero-shade" />

          <div className="cp-hero-content">
            <div className="cp-tagline">
              <span className="cp-tagline-dot" />
              <span>Report</span>
              <span className="cp-dot">✦</span>
              <span>Resolve</span>
              <span className="cp-dot">✦</span>
              <span>A Better Campus</span>
            </div>

            <h1>
              A Cleaner,<br />
              Safer, Better<br />
              Campus — <span className="cp-hero-highlight">Together.</span>
            </h1>

            <p className="cp-hero-description">
              Report campus issues in seconds. Scan a QR code or log in to submit
              a problem. Help us make our campus a better place for everyone.
            </p>

            <div className="cp-hero-actions">
              <Link to="/login" className="cp-report-button">
                <Send size={17} />
                <span>Report a Problem</span>
                <ArrowRight size={17} className="cp-btn-arrow" />
              </Link>
              <a href="#how-it-works" className="cp-learn-button">
                <span>Learn More</span>
              </a>
            </div>

            <div className="cp-hero-features">
              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon"><ShieldCheck /></div>
                <div className="cp-hero-feature-text">
                  <h3>Easy Reporting</h3>
                  <p>Scan QR or log in</p>
                </div>
              </div>
              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon"><Users /></div>
                <div className="cp-hero-feature-text">
                  <h3>Quick Resolution</h3>
                  <p>Right department</p>
                </div>
              </div>
              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon"><ChartNoAxesCombined /></div>
                <div className="cp-hero-feature-text">
                  <h3>Track Progress</h3>
                  <p>Stay updated</p>
                </div>
              </div>
              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon"><Leaf /></div>
                <div className="cp-hero-feature-text">
                  <h3>Better Campus</h3>
                  <p>For everyone</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cp-campus-label">
            <div className="cp-campus-label-icon"><Building2 size={22} /></div>
            <div>
              <h3>Our Campus</h3>
              <p>A place to learn, grow and build a better tomorrow.</p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="cp-about-section" id="about">
          <div className="cp-purpose-layout">
            <div className="cp-purpose-content">
              <div className="cp-purpose-label"><span />WHY CAMPUSPULSE EXISTS</div>
              <h2>Every campus problem deserves a <span>solution.</span></h2>
              <p className="cp-purpose-description">
                Campus issues can get lost in informal chat messages and lack clear
                ownership or follow-up. CampusPulse provides a traceable workflow
                from reporting to verified closure.
              </p>
              <div className="cp-purpose-action-row">
                <Link to="/register" className="cp-purpose-button">
                  Make your voice count <ArrowRight size={17} className="cp-btn-arrow" />
                </Link>
                <div className="cp-purpose-trust-box">
                  <ShieldCheck size={18} className="cp-trust-icon" />
                  <span>Accountable &amp; Verified</span>
                </div>
              </div>
            </div>

            <div className="cp-purpose-cards">
              <article className="cp-purpose-card">
                <div className="cp-purpose-card-icon"><FileText /></div>
                <div className="cp-purpose-card-content">
                  <div className="cp-purpose-card-heading"><h3>Report with clarity</h3><span>01</span></div>
                  <p>Submit campus issues through a structured reporting process.</p>
                </div>
              </article>
              <article className="cp-purpose-card">
                <div className="cp-purpose-card-icon"><ChartNoAxesCombined /></div>
                <div className="cp-purpose-card-content">
                  <div className="cp-purpose-card-heading"><h3>Track every update</h3><span>02</span></div>
                  <p>Understand whether an issue is pending, in progress or resolved.</p>
                </div>
              </article>
              <article className="cp-purpose-card">
                <div className="cp-purpose-card-icon"><ShieldCheck /></div>
                <div className="cp-purpose-card-content">
                  <div className="cp-purpose-card-heading"><h3>Build transparency</h3><span>03</span></div>
                  <p>Follow approved public updates and see how campus issues progress.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="cp-process-section" id="how-it-works">
          <div className="cp-process-heading">
            <div className="cp-process-title">
              <span className="cp-heading-accent" />
              <div>
                <h2>How It Works</h2>
                <p>From reporting to resolution, CampusPulse makes it simple.</p>
              </div>
            </div>
            <Link to="/login" className="cp-process-link">
              See Detailed Process <ArrowRight size={16} className="cp-btn-arrow" />
            </Link>
          </div>

          <div className="cp-process-grid">
            <article className="cp-process-card">
              <div className="cp-process-card-top"><div className="cp-process-icon"><QrCode /></div><span className="cp-step-number">01</span></div>
              <h3>Scan or Login</h3>
              <p>Scan the QR code at the location or log in with your college email.</p>
            </article>
            <article className="cp-process-card">
              <div className="cp-process-card-top"><div className="cp-process-icon"><FileText /></div><span className="cp-step-number">02</span></div>
              <h3>Report the Problem</h3>
              <p>Fill in the details with description, category and optional photo.</p>
            </article>
            <article className="cp-process-card">
              <div className="cp-process-card-top"><div className="cp-process-icon"><Settings /></div><span className="cp-step-number">03</span></div>
              <h3>Assigned &amp; Resolved</h3>
              <p>Management assigns it to the right department and staff.</p>
            </article>
            <article className="cp-process-card">
              <div className="cp-process-card-top"><div className="cp-process-icon"><CheckCircle2 /></div><span className="cp-step-number">04</span></div>
              <h3>Track the Update</h3>
              <p>Get status updates and verify the resolution.</p>
            </article>
          </div>
        </section>

        {/* ================= FEATURES STRIP ================= */}
        <section className="cp-benefits-section" id="features">
          <div className="cp-benefits-strip">
            <article className="cp-benefit"><div className="cp-benefit-icon"><Building2 /></div><div><h3>Cleaner Campus</h3><p>Through your support</p></div></article>
            <article className="cp-benefit"><div className="cp-benefit-icon"><ShieldCheck /></div><div><h3>Safer Environment</h3><p>For all students</p></div></article>
            <article className="cp-benefit"><div className="cp-benefit-icon"><ChartNoAxesCombined /></div><div><h3>Better Facilities</h3><p>Together we improve</p></div></article>
            <article className="cp-benefit"><div className="cp-benefit-icon"><Users /></div><div><h3>Stronger Community</h3><p>Small actions, big impact</p></div></article>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="cp-footer" id="contact">
        <Link to="/" className="cp-logo cp-footer-logo">
          <span className="cp-logo-icon"><ShieldCheck size={23} /></span>
          <span className="cp-logo-text">Campus<span>Pulse</span></span>
        </Link>
        <p>A better campus begins with a problem reported.</p>
        <span className="cp-copyright">© {new Date().getFullYear()} CampusPulse</span>
      </footer>
    </div>
  );
}
