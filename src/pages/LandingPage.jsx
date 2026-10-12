<<<<<<< HEAD

import "../styles/landing.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../App.css";

=======
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
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
  Eye,
  ClipboardCheck,
} from "lucide-react";

<<<<<<< HEAD
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
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import "../App.css";
import "../styles/landing.css";

export default function LandingPage() {
  const heroFeatures = [
    {
      icon: <QrCode size={22} />,
      title: "Easy Reporting",
      description: "Scan QR or log in",
    },
    {
      icon: <Users size={22} />,
      title: "Quick Resolution",
      description: "Right department",
    },
    {
      icon: <ChartNoAxesCombined size={22} />,
      title: "Track Progress",
      description: "Stay updated live",
    },
    {
      icon: <Leaf size={22} />,
      title: "Better Campus",
      description: "For everyone",
    },
  ];

  const purposeFeatures = [
    {
      number: "01",
      tag: "Guided Reporting",
      icon: <ClipboardCheck size={23} />,
      title: "Report with clarity",
      description:
        "Submit campus issues through a structured, category-guided reporting flow with photos and precise location.",
    },
    {
      number: "02",
      tag: "Real-Time Pipeline",
      icon: <ChartNoAxesCombined size={23} />,
      title: "Track every update",
      description:
        "Watch live progress as issues move from pending to in-progress, resolution, and student verification.",
    },
    {
      number: "03",
      tag: "Public Accountability",
      icon: <Eye size={23} />,
      title: "Build transparency",
      description:
        "Follow approved campus updates and see administration and facility staff take real, verifiable action.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <QrCode size={24} />,
      title: "Scan or Login",
      description:
        "Scan the location-based QR code on campus or sign in with your college email.",
    },
    {
      number: "02",
      icon: <FileText size={24} />,
      title: "Report the Problem",
      description:
        "Provide details with automated category suggestions and proof photo upload.",
    },
    {
      number: "03",
      icon: <Settings size={24} />,
      title: "Assigned & Resolved",
      description:
        "Management assigns tasks to staff who fix the problem and provide closure proof.",
    },
    {
      number: "04",
      icon: <CheckCircle2 size={24} />,
      title: "Verify the Outcome",
      description:
        "Students review the fix to verify completion or reopen if further action is needed.",
    },
  ];

  const campusBenefits = [
    {
      icon: <Building2 size={24} />,
      title: "Cleaner Campus",
      description: "Fast turnaround on sanitation & maintenance",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Safer Environment",
      description: "Prompt fixes for electrical & hazard issues",
    },
    {
      icon: <ChartNoAxesCombined size={24} />,
      title: "Better Facilities",
      description: "Data-driven improvements and accountability",
    },
    {
      icon: <Users size={24} />,
      title: "Stronger Community",
      description: "Collaborative campus voice with tangible results",
    },
  ];

  return (
    <div className="cp-page">
      {/* NAVBAR */}
      <Navbar />
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

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
              <span className="cp-tagline-dot" />
              <span>CAMPUSPULSE</span>
              <span className="cp-dot">•</span>
              <span>REPORT</span>
              <span className="cp-dot">•</span>
              <span>RESOLVE</span>
            </div>

            <h1>
              A Cleaner,
              <br />
              Safer, Better
              <br />
              Campus — <span className="cp-hero-highlight">Together.</span>
            </h1>

            <p className="cp-hero-description">
              Report campus issues in seconds. Scan a QR code or log in to submit a
              problem. Follow live progress from assignment to verified resolution.
            </p>

            <div className="cp-hero-actions">

              <Link to="/login" className="cp-report-button">
                <span>Report a Problem</span>
                <ArrowRight size={17} className="cp-btn-arrow" />
              </Link>

              <a href="#how-it-works" className="cp-learn-button">
                <span>Learn How It Works</span>
              </a>

            </div>

            {/* FOUR HERO FEATURES */}
            <div className="cp-hero-features">
<<<<<<< HEAD

              <div className="cp-hero-feature">
                <div className="cp-hero-feature-icon">
                  <ShieldCheck />
=======
              {heroFeatures.map((feature) => (
                <div className="cp-hero-feature" key={feature.title}>
                  <div className="cp-hero-feature-icon">{feature.icon}</div>
                  <div className="cp-hero-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
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
              <Building2 size={22} />
            </div>
            <div>
              <h3>Smart Campus Portal</h3>
              <p>Transparent problem tracking and verified fixes.</p>
            </div>

          </div>

        </section>

        {/* ABOUT / PURPOSE SECTION */}
        <section className="cp-about-section" id="about">

          <div className="cp-purpose-layout">

            <div className="cp-purpose-content">
<<<<<<< HEAD

              <div className="cp-purpose-label">
                <span></span>
                WHY CAMPUSPULSE EXISTS
=======
              <div className="cp-purpose-badge">
                <span className="cp-purpose-badge-dot" />
                <span className="cp-purpose-badge-text">WHY CAMPUSPULSE EXISTS</span>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
              </div>

              <h2>
                Every campus problem deserves a{" "}
                <span className="cp-gradient-text">solution.</span>
              </h2>

              <p className="cp-purpose-description">
                Campus issues can get lost in informal chat messages and lack clear ownership
                or follow-up. CampusPulse provides a traceable workflow from instant reporting
                to verified closure.
              </p>

<<<<<<< HEAD
              <Link to="/login" className="cp-purpose-button">
                Make your voice count
                <ArrowRight size={17} />
              </Link>
=======
              <div className="cp-purpose-pillars">
                <div className="cp-pillar-item">
                  <CheckCircle2 size={15} className="cp-pillar-check" />
                  <span>Zero Lost Reports</span>
                </div>
                <div className="cp-pillar-item">
                  <CheckCircle2 size={15} className="cp-pillar-check" />
                  <span>Direct Dept. Routing</span>
                </div>
                <div className="cp-pillar-item">
                  <CheckCircle2 size={15} className="cp-pillar-check" />
                  <span>Student Verification</span>
                </div>
              </div>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

              <div className="cp-purpose-action-row">
                <Link to="/register" className="cp-purpose-button">
                  <span>Make your voice count</span>
                  <ArrowRight size={17} className="cp-btn-arrow" />
                </Link>

                <div className="cp-purpose-trust-box">
                  <ShieldCheck size={18} className="cp-trust-icon" />
                  <span>Accountable & Verified</span>
                </div>
              </div>

            </div>

            {/* THREE PURPOSE CARDS */}
            <div className="cp-purpose-cards">
<<<<<<< HEAD

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
=======
              {purposeFeatures.map((feature) => (
                <article className="cp-purpose-card" key={feature.number}>
                  <div className="cp-purpose-card-icon-wrap">
                    <div className="cp-purpose-card-icon">{feature.icon}</div>
                  </div>

                  <div className="cp-purpose-card-content">
                    <div className="cp-purpose-card-heading">
                      <div className="cp-purpose-card-title-group">
                        <h3>{feature.title}</h3>
                        <span className="cp-card-tag">{feature.tag}</span>
                      </div>
                      <span className="cp-card-num-badge">0{feature.number.replace(/^0+/, "")}</span>
                    </div>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390

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

<<<<<<< HEAD
        {/* HOW IT WORKS SECTION */}
        <section
          className="cp-process-section"
          id="how-it-works"
        >

=======
        {/* HOW IT WORKS */}
        <section className="cp-process-section" id="how-it-works">
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
          <div className="cp-process-heading">

            <div className="cp-process-title">
<<<<<<< HEAD

              <span className="cp-heading-accent"></span>

=======
              <span className="cp-heading-accent" />
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
              <div>
                <h2>How It Works</h2>
                <p>From reporting to resolution, CampusPulse makes it seamless.</p>
              </div>

            </div>

            <Link to="/login" className="cp-process-link">
              <span>Report an Issue</span>
              <ArrowRight size={16} className="cp-btn-arrow" />
            </Link>

          </div>

          {/* FOUR PROCESS CARDS */}
          <div className="cp-process-grid">
<<<<<<< HEAD

            <article className="cp-process-card">

              <div className="cp-process-card-top">
                <div className="cp-process-icon">
                  <QrCode />
=======
            {processSteps.map((step) => (
              <article className="cp-process-card" key={step.number}>
                <div className="cp-process-card-top">
                  <div className="cp-process-icon">{step.icon}</div>
                  <span className="cp-step-number">{step.number}</span>
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
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

<<<<<<< HEAD
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

=======
        {/* CAMPUS BENEFITS */}
        <section className="cp-benefits-section" id="features">
          <div className="cp-benefits-strip">
            {campusBenefits.map((benefit) => (
              <article className="cp-benefit" key={benefit.title}>
                <div className="cp-benefit-icon">{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
          </div>

        </section>

      </main>

      {/* FOOTER */}
<<<<<<< HEAD
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

=======
      <Footer />

      {/* BACK TO TOP BUTTON */}
      <BackToTop />
>>>>>>> c9f4a162d4254eac4e2245a0b93144e0f8848390
    </div>
  );
}
