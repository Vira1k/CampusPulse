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

      <main>
        {/* HERO SECTION */}
        <section className="cp-hero" id="home">
          <img
            className="cp-hero-background"
            src="/campus-building.png"
            alt="Campus building illuminated by warm lights"
          />

          <div className="cp-hero-shade" />

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

            <div className="cp-hero-features">
              {heroFeatures.map((feature) => (
                <div className="cp-hero-feature" key={feature.title}>
                  <div className="cp-hero-feature-icon">{feature.icon}</div>
                  <div className="cp-hero-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
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

        {/* PURPOSE SECTION */}
        <section className="cp-about-section" id="about">
          <div className="cp-purpose-layout">
            <div className="cp-purpose-content">
              <div className="cp-purpose-badge">
                <span className="cp-purpose-badge-dot" />
                <span className="cp-purpose-badge-text">WHY CAMPUSPULSE EXISTS</span>
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

            <div className="cp-purpose-cards">
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

                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="cp-process-section" id="how-it-works">
          <div className="cp-process-heading">
            <div className="cp-process-title">
              <span className="cp-heading-accent" />
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

          <div className="cp-process-grid">
            {processSteps.map((step) => (
              <article className="cp-process-card" key={step.number}>
                <div className="cp-process-card-top">
                  <div className="cp-process-icon">{step.icon}</div>
                  <span className="cp-step-number">{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

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
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP BUTTON */}
      <BackToTop />
    </div>
  );
}
