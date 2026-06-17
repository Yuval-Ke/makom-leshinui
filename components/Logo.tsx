interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 90, className = "" }: LogoProps) {
  const height = (size / 100) * 130;
  return (
    <svg
      viewBox="0 0 100 130"
      width={size}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="מקום לשינוי — לוגו המרפאה להיפנוזה"
      className={className}
    >
      {/* Brushy outer ring — almost-closed circle */}
      <path
        d="M 50 8
           C 73 8, 91 26, 91 50
           C 91 74, 73 92, 50 92
           C 27 92, 9 74, 9 50
           C 9 26, 27 8, 48 8"
        fill="none"
        stroke="#2D4A3E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Head profile silhouette (facing right) — soft fill */}
      <path
        d="M 48 22
           C 57 20, 69 26, 71 39
           C 72 47, 70 52, 68 57
           C 66 60, 66 64, 65 68
           C 64 73, 61 77, 57 79
           C 53 81, 49 79, 47 76
           C 44 72, 43 66, 43 59
           C 43 51, 44 44, 44 36
           C 44 28, 44 24, 48 22 Z"
        fill="#6B9E8F"
        fillOpacity="0.15"
        stroke="#2D4A3E"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Internal spiral */}
      <path
        d="M 57 51
           C 59 50, 62 51, 63 54
           C 64 57, 62 60, 59 61
           C 56 62, 53 60, 52 57
           C 51 53, 53 49, 57 48
           C 62 47, 67 50, 68 55
           C 69 61, 65 67, 59 68"
        fill="none"
        stroke="#6B9E8F"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Primary text */}
      <text
        x="50"
        y="107"
        textAnchor="middle"
        fontFamily="Assistant, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="#2D4A3E"
      >
        מקום לשינוי
      </text>

      {/* Secondary text */}
      <text
        x="50"
        y="121"
        textAnchor="middle"
        fontFamily="Assistant, sans-serif"
        fontSize="8"
        fill="#6B9E8F"
      >
        מרפאה להיפנוזה
      </text>
    </svg>
  );
}
