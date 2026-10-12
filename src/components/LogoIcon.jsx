export default function LogoIcon({ size = 30, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 45 172 172"
      width={size}
      height={size}
      fill="none"
      className={`cp-logo-svg ${className}`}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="cpLogoVibrantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="25%" stopColor="#06b6d4" />
          <stop offset="70%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Main Pulse Wave & P Bowl */}
      <path
        d="M 36 108 L 68 108 L 68 132 L 62 178 L 86 64 L 142 64 C 174 64 196 84 196 114 C 196 144 174 164 142 164 L 112 164 L 112 142 L 140 142 C 160 142 174 130 174 114 C 174 98 160 86 140 86 L 104 86 L 62 198 L 62 108 Z"
        fill="url(#cpLogoVibrantGrad)"
      />

      {/* Inner Heartbeat Pulse Spike */}
      <path
        d="M 80 174 L 116 88 L 122 164 L 108 164 L 104 118 L 80 174 Z"
        fill="url(#cpLogoVibrantGrad)"
      />
    </svg>
  );
}
