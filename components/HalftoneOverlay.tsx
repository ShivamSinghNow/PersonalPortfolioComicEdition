export default function HalftoneOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      aria-hidden="true"
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="halftone"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1" fill="#000000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" opacity="0.05" />
      </svg>
    </div>
  );
}
