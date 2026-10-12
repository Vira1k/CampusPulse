import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../styles/back-to-top.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`cp-back-to-top ${isVisible ? "cp-back-to-top-visible" : ""}`}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <span className="cp-back-to-top-glow" />
      <span className="cp-back-to-top-icon-wrap">
        <ArrowUp size={20} className="cp-back-to-top-icon" />
      </span>
      {isHovered && <span className="cp-back-to-top-tooltip">Back to top</span>}
    </button>
  );
}
