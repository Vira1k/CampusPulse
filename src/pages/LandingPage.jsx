
import "../styles/landing.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../App.css";

import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Users,
  ChartNoAxesCombined,
  Leaf,
  ArrowRight,
  MapPin,
  QrCode,
  FileText,
  Settings,
  CheckCircle2,
  Building2,
  Menu,
  Eye,
  ClipboardCheck,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="cp-page">

      {/* NAVBAR HAI YE */}
      <header className="cp-header">

        <Link to="/" className="cp-logo">
          <span className="cp-logo-icon">
            <ShieldCheck size={25} />
          </span>

          <span className="cp-logo-text">
            Campus<span>Pulse</span>
          </span>
        </Link>

        <nav className="cp-navigation">
          <a className="cp-nav-active" href="#home">Home</a>
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
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="cp-menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => {
            document
              .querySelector(".cp-mobile-navigation")
              ?.classList.toggle("cp-mobile-navigation-open");
          }}
        >
          <Menu size={25} />
        </button>

        <nav className="cp-mobile-navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </nav>

      </header>

      <main>

        {/* HERO SECTION PART  */}
        <section className="cp-hero" id="home">

          <img
            className="cp-hero-background"
            src="/campus-building.png"
            alt="Campus building illuminated by warm lights"
          />

          <div className="cp-hero-shade"></div>

          <div className="cp-hero-content">

            <div className="cp-tagline">
              REPORT <span>✦</span> RESOLVE <span>✦</span> A BETTER CAMPUS
            </div>

            <h1>
              A Cleaner,
              <br />
              Safer, Better
              <br />
              Campus — <span>Together.</span>
            </h1>

            <p className="cp-hero-description">
              Report campus issues in seconds. Scan a QR code
              or log in to submit a problem. Help us make our
              campus a better place for everyone.
            </p>

            <div className="cp-hero-actions">

              <Link to="/login" className="cp-report-button">
                <FileText size={18} />
                Report a Problem
                <ArrowRight size={17} />
              </Link>

              <a href="#how-it-works" className="cp-learn-button">
                Learn More
              </a>

            </div>

            {/* FOUR HERO FEATURES */}
            <div className="cp-hero-features">

              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon">
                  <ShieldCheck />
                </div>

                <div className="cp-hero-feature-text">
                  <h3>Easy Reporting</h3>
                  <p>Scan QR or log in</p>
                </div>
              </div>

              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon">
                  <Users />
                </div>

                <div className="cp-hero-feature-text">
                  <h3>Quick Resolution</h3>
                  <p>Right department</p>
                </div>
              </div>

              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon">
                  <ChartNoAxesCombined />
                </div>

                <div className="cp-hero-feature-text">
                  <h3>Track Progress</h3>
                  <p>Stay updated</p>
                </div>
              </div>

              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon">
                  <Leaf />
                </div>

                <div className="cp-hero-feature-text">
                  <h3>Better Campus</h3>
                  <p>For everyone</p>
                </div>
              </div>

            </div>
          </div>

          <div className="cp-campus-label">

            <div className="cp-campus-label-icon">
              <MapPin size={22} />
            </div>

            <div>
              <h3>Our Campus</h3>
              <p>
                A place to learn, grow and build a better tomorrow.
              </p>
            </div>

          </div>

        </section>

        {/* ABOUT / PURPOSE SECTION */}
        <section className="cp-about-section" id="about">

          <div className="cp-purpose-layout">

            <div className="cp-purpose-content">

              <div className="cp-purpose-label">
                <span></span>
                WHY CAMPUSPULSE EXISTS
              </div>

              <h2>
                Every campus problem deserves a{" "}
                <span>solution.</span>
              </h2>

              <p className="cp-purpose-description">
                Campus issues can get lost in informal messages
                and lack clear ownership or follow-up. CampusPulse
                provides a structured way to report problems and
                follow their progress towards resolution.
              </p>

              <Link to="/login" className="cp-purpose-button">
                Make your voice count
                <ArrowRight size={17} />
              </Link>

              <div className="cp-purpose-note">
                <ShieldCheck size={18} />
                <span>
                  Your reports help build a better campus.
                </span>
              </div>

            </div>

            {/* THREE PURPOSE CARDS */}
            <div className="cp-purpose-cards">

              <article className="cp-purpose-card">

                <div className="cp-purpose-card-icon">
                  <ClipboardCheck />
                </div>

                <div className="cp-purpose-card-content">

                  <div className="cp-purpose-card-heading">
                    <h3>Report with clarity</h3>
                    <span>01</span>
                  </div>

                  <p>
                    Submit campus issues through a structured
                    reporting process.
                  </p>

                </div>
              </article>

              <article className="cp-purpose-card">

                <div className="cp-purpose-card-icon">
                  <ChartNoAxesCombined />
                </div>

                <div className="cp-purpose-card-content">

                  <div className="cp-purpose-card-heading">
                    <h3>Track every update</h3>
                    <span>02</span>
                  </div>

                  <p>
                    Understand whether an issue is pending,
                    in progress or resolved.
                  </p>

                </div>
              </article>

              <article className="cp-purpose-card">

                <div className="cp-purpose-card-icon">
                  <Eye />
                </div>

                <div className="cp-purpose-card-content">

                  <div className="cp-purpose-card-heading">
                    <h3>Build transparency</h3>
                    <span>03</span>
                  </div>

                  <p>
                    Follow approved public updates and see how
                    campus issues progress.
                  </p>

                </div>
              </article>

            </div>
          </div>

        </section>

        {/* HOW IT WORKS SECTION */}
        <section
          className="cp-process-section"
          id="how-it-works"
        >

          <div className="cp-process-heading">

            <div className="cp-process-title">

              <span className="cp-heading-accent"></span>

              <div>
                <h2>How It Works</h2>
                <p>
                  From reporting to resolution, CampusPulse makes it simple.
                </p>
              </div>

            </div>

            <Link to="/login" className="cp-process-link">
              Report an Issue <ArrowRight size={16} />
            </Link>

          </div>

          {/* FOUR PROCESS CARDS */}
          <div className="cp-process-grid">

            <article className="cp-process-card">

              <div className="cp-process-card-top">
                <div className="cp-process-icon">
                  <QrCode />
                </div>

                <span className="cp-step-number">01</span>
              </div>

              <h3>Scan or Login</h3>

              <p>
                Scan the QR code at the location or log in
                with your college email.
              </p>

            </article>

            <article className="cp-process-card">

              <div className="cp-process-card-top">
                <div className="cp-process-icon">
                  <FileText />
                </div>

                <span className="cp-step-number">02</span>
              </div>

              <h3>Report the Problem</h3>

              <p>
                Fill in the details with description,
                category and optional photo.
              </p>

            </article>

            <article className="cp-process-card">

              <div className="cp-process-card-top">
                <div className="cp-process-icon">
                  <Settings />
                </div>

                <span className="cp-step-number">03</span>
              </div>

              <h3>Assigned &amp; Resolved</h3>

              <p>
                Management assigns the issue to the right
                department and staff.
              </p>

            </article>

            <article className="cp-process-card">

              <div className="cp-process-card-top">
                <div className="cp-process-icon">
                  <CheckCircle2 />
                </div>

                <span className="cp-step-number">04</span>
              </div>

              <h3>Track the Update</h3>

              <p>
                Get status updates and verify the resolution.
              </p>

            </article>

          </div>

        </section>

        {/* CAMPUS BENEFITS SECTION */}
        <section
          className="cp-benefits-section"
          id="features"
        >

          <div className="cp-benefits-strip">

            <article className="cp-benefit">

              <div className="cp-benefit-icon">
                <Building2 />
              </div>

              <div>
                <h3>Cleaner Campus</h3>
                <p>Through your support</p>
              </div>

            </article>

            <article className="cp-benefit">

              <div className="cp-benefit-icon">
                <ShieldCheck />
              </div>

              <div>
                <h3>Safer Environment</h3>
                <p>For all students</p>
              </div>

            </article>

            <article className="cp-benefit">

              <div className="cp-benefit-icon">
                <ChartNoAxesCombined />
              </div>

              <div>
                <h3>Better Facilities</h3>
                <p>Together we improve</p>
              </div>

            </article>

            <article className="cp-benefit">

              <div className="cp-benefit-icon">
                <Users />
              </div>

              <div>
                <h3>Stronger Community</h3>
                <p>Small actions, big impact</p>
              </div>

            </article>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="cp-footer" id="contact">

        <Link to="/" className="cp-logo cp-footer-logo">

          <span className="cp-logo-icon">
            <ShieldCheck size={23} />
          </span>

          <span className="cp-logo-text">
            Campus<span>Pulse</span>
          </span>

        </Link>

        <p>
          A better campus begins with a problem reported.
        </p>

        <span className="cp-copyright">
          © {new Date().getFullYear()} CampusPulse
        </span>

      </footer>

    </div>
  );
}
