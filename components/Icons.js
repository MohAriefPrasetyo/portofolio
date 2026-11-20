// Ikon SVG geometris sederhana (stroke), digambar manual agar
// tidak bergantung pada library ikon apa pun.

const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export function SocialIcon({ name }) {
  switch (name) {
    case 'github':
      // git-branch: simpul + garis cabang
      return (
        <svg {...S}>
          <circle cx="6" cy="5.5" r="2.3" />
          <circle cx="6" cy="18.5" r="2.3" />
          <circle cx="18" cy="7.5" r="2.3" />
          <path d="M6 7.8v8.4" />
          <path d="M18 9.8c0 4.5-5.4 4.6-9.2 6" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...S}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
          <text x="12" y="16.4" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Montserrat, sans-serif">
            in
          </text>
        </svg>
      );
    case 'instagram':
      return (
        <svg {...S}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="3.8" />
          <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" />
        </svg>
      );
    default: // mail
      return (
        <svg {...S}>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M4 7.5l8 6 8-6" />
        </svg>
      );
  }
}

export function HobbyIcon({ name }) {
  switch (name) {
    case 'code':
      return (
        <svg {...S}>
          <path d="M8 7l-4.5 5L8 17" />
          <path d="M16 7l4.5 5L16 17" />
          <path d="M13.5 5l-3 14" />
        </svg>
      );
    case 'ar':
      // kacamata AR
      return (
        <svg {...S}>
          <rect x="2.5" y="8" width="8" height="7" rx="2" />
          <rect x="13.5" y="8" width="8" height="7" rx="2" />
          <path d="M10.5 10.5h3" />
          <path d="M5 8V6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5V8" />
        </svg>
      );
    case 'server':
      return (
        <svg {...S}>
          <rect x="3.5" y="4" width="17" height="7" rx="1.6" />
          <rect x="3.5" y="13" width="17" height="7" rx="1.6" />
          <circle cx="7" cy="7.5" r="0.7" fill="currentColor" />
          <circle cx="7" cy="16.5" r="0.7" fill="currentColor" />
        </svg>
      );
    default: // chip
      return (
        <svg {...S}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <rect x="10.2" y="10.2" width="3.6" height="3.6" rx="0.8" />
          <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
        </svg>
      );
  }
}
