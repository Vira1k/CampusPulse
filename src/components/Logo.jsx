import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

export default function Logo({
  size = "md",
  variant = "light",
  showText = true,
  to = "/",
  className = "",
}) {
  const sizeMap = {
    sm: { icon: 22, text: "text-sm" },
    md: { icon: 28, text: "text-lg" },
    lg: { icon: 34, text: "text-xl" },
    xl: { icon: 42, text: "text-2xl" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div className={`cp-brand-logo cp-brand-${variant} ${className}`}>
      <div className="cp-brand-logo-badge">
        <LogoIcon size={currentSize.icon} />
      </div>

      {showText && (
        <span className={`cp-brand-title ${currentSize.text}`}>
          Campus<span className="cp-brand-pulse">Pulse</span>
        </span>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="cp-brand-link" aria-label="CampusPulse Home">
        {content}
      </Link>
    );
  }

  return content;
}
