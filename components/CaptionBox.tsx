interface CaptionBoxProps {
  text: string;
  variant?: "yellow" | "red" | "blue" | "black";
  position?: "top" | "bottom";
  className?: string;
}

const palette: Record<string, { bg: string; color: string }> = {
  yellow: { bg: "#FFD700", color: "#000000" },
  red:    { bg: "#FF3333", color: "#fffef0" },
  blue:   { bg: "#00D4FF", color: "#000000" },
  black:  { bg: "#000000", color: "#FFD700" },
};

export default function CaptionBox({
  text,
  variant = "yellow",
  position = "top",
  className = "",
}: CaptionBoxProps) {
  const { bg, color } = palette[variant];
  const border =
    position === "top"
      ? { borderBottom: "3px solid #000" }
      : { borderTop: "3px solid #000" };

  return (
    <div
      className={`font-bangers text-xs md:text-sm tracking-wide leading-snug px-3 py-1.5 flex-shrink-0 ${className}`}
      style={{ background: bg, color, ...border }}
    >
      {text}
    </div>
  );
}
