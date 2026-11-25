import { XmbCategory } from '../types';

// Crisp, authentic PS3-styled monochrome SVG icons
export const SVG_ICONS = {
  settings: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`,

  profile: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,

  skills: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/></svg>`,

  education: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,

  experience: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,

  projects: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,

  contact: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>`,

  disc: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>`,

  folder: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,

  trophy: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>`,

  code: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,

  external: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,

  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,

  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,

  email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,

  // Distinct Monochrome Settings Icons (24x24)
  palette: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
  typography: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></svg>`,
  wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2 12c2.5-5 5.5-5 8 0s5.5 5 8 0 2.5-2.5 4-2.5"/><path d="M2 17c2.5-4 5.5-4 8 0s5.5 4 8 0 2.5-2 4-2" opacity="0.55"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.1 6.2L20 10l-5.9 1.8L12 18l-2.1-6.2L4 10l5.9-1.8L12 2zm7 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z"/></svg>`,
  speaker: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  power: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.05.88-3.9 2.59-5.41L6.17 5.17A8.932 8.932 0 0 0 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>`,

  // Custom PS3-style Emblem Tiles (48x48)
  profileAvatar: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#101827" stroke="rgba(147,197,253,0.65)" stroke-width="1.5"/><circle cx="24" cy="24" r="15" fill="rgba(59,130,246,0.16)" stroke="rgba(255,255,255,0.28)" stroke-width="1.2"/><text x="24" y="30" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="16" letter-spacing="1">AK</text><circle cx="37" cy="37" r="4.5" fill="#22C55E" stroke="#101827" stroke-width="2"/></svg>`,
  skillLanguages: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0F172A" stroke="rgba(56,189,248,0.65)" stroke-width="1.5"/><path d="M19 16l-8 8 8 8M29 16l8 8-8 8M26 13l-4 22" stroke="#38BDF8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  skillAutomation: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#1A140A" stroke="rgba(245,158,11,0.65)" stroke-width="1.5"/><path d="M26 9L14 26h9l-1 13 12-17h-9l1-13z" fill="rgba(245,158,11,0.25)" stroke="#FBBF24" stroke-width="2" stroke-linejoin="round"/></svg>`,
  skillFullstack: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#131026" stroke="rgba(167,139,250,0.65)" stroke-width="1.5"/><path d="M24 11l14 7-14 7-14-7 14-7z" fill="rgba(167,139,250,0.25)" stroke="#C4B5FD" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 24l14 7 14-7M10 30l14 7 14-7" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  skillEnterprise: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0B1E1A" stroke="rgba(45,212,191,0.65)" stroke-width="1.5"/><ellipse cx="24" cy="15" rx="11" ry="4.5" fill="rgba(45,212,191,0.22)" stroke="#5EEAD4" stroke-width="1.8"/><path d="M13 15v9c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-9M13 24v9c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-9" stroke="#2DD4BF" stroke-width="1.8"/></svg>`,
  certBadge: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#1C1608" stroke="rgba(250,204,21,0.65)" stroke-width="1.5"/><circle cx="24" cy="20" r="9" fill="rgba(250,204,21,0.2)" stroke="#FACC15" stroke-width="2"/><path d="M19 28l-2 10 7-3.5L31 38l-2-10" stroke="#FDE047" stroke-width="1.8" stroke-linejoin="round"/><path d="M20.5 20l2.5 2.5 4.8-5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  contactEmail: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#111C2D" stroke="rgba(96,165,250,0.65)" stroke-width="1.5"/><rect x="10" y="14" width="28" height="20" rx="3" fill="rgba(96,165,250,0.18)" stroke="#93C5FD" stroke-width="1.8"/><path d="M11 16l13 10 13-10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  contactGithub: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#111318" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/><path d="M24 11c-7.18 0-13 5.82-13 13 0 5.75 3.72 10.62 8.89 12.34.65.12.89-.28.89-.63 0-.31-.01-1.13-.02-2.21-3.62.79-4.38-1.74-4.38-1.74-.59-1.5-1.44-1.9-1.44-1.9-1.18-.81.09-.79.09-.79 1.3.09 1.99 1.34 1.99 1.34 1.16 1.99 3.04 1.41 3.78 1.08.12-.84.45-1.41.82-1.74-2.89-.33-5.92-1.44-5.92-6.43 0-1.42.51-2.58 1.34-3.49-.13-.33-.58-1.65.13-3.44 0 0 1.09-.35 3.58 1.33a12.4 12.4 0 0 1 6.51 0c2.48-1.68 3.57-1.33 3.57-1.33.71 1.79.26 3.11.13 3.44.83.91 1.34 2.07 1.34 3.49 0 5-3.04 6.1-5.94 6.42.47.4.88 1.2.88 2.41 0 1.74-.02 3.14-.02 3.57 0 .35.23.75.9.62A13 13 0 0 0 37 24c0-7.18-5.82-13-13-13z" fill="#FFFFFF"/></svg>`,
  contactLinkedin: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0B1F3A" stroke="rgba(59,130,246,0.7)" stroke-width="1.5"/><path d="M16.5 19.5v14M16.5 14.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM23 33.5v-8.2c0-2.5 1.7-4.3 4.2-4.3 2.4 0 3.8 1.6 3.8 4.3v8.2M23 19.5v14" stroke="#60A5FA" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  contactMessage: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0E2219" stroke="rgba(52,211,153,0.65)" stroke-width="1.5"/><path d="M11 14h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H19l-8 6V16a2 2 0 0 1 2-2z" fill="rgba(52,211,153,0.2)" stroke="#34D399" stroke-width="1.8" stroke-linejoin="round"/><path d="M17 21h14M17 26h9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/></svg>`,

  uottawa: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#6E0014" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/><path d="M10 11h28v15c0 8.5-6.2 13.8-14 16.5C16.2 39.8 10 34.5 10 26V11z" fill="#8F001A" stroke="rgba(255,255,255,0.75)" stroke-width="1.4"/><text x="24" y="29" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-weight="700" font-size="16" letter-spacing="-0.5">uO</text></svg>`,

  songsnap: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0C1F14" stroke="rgba(29,185,84,0.65)" stroke-width="1.5"/><circle cx="24" cy="24" r="14" fill="#1DB954" fill-opacity="0.18" stroke="#1DB954" stroke-width="1.6"/><path d="M16 20c5-1.6 11-1.3 15.8.8M17.5 25c4.2-1.2 9.2-1 13.2.7M19 29.8c3.2-.8 7-.6 10 .5" stroke="#1DB954" stroke-width="2.4" stroke-linecap="round"/><circle cx="34" cy="14" r="3.5" fill="#1DB954"/></svg>`,

  trivia: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0B192C" stroke="rgba(56,189,248,0.65)" stroke-width="1.5"/><path d="M9 32l7-8 6 5 8-13 5 4 4-6" stroke="#38BDF8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M35 14h4v4" stroke="#F59E0B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="22" cy="29" r="2.5" fill="#F59E0B"/><circle cx="30" cy="16" r="2.5" fill="#38BDF8"/></svg>`,

  jobRecommender: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0F1B33" stroke="rgba(96,165,250,0.6)" stroke-width="1.5"/><rect x="11" y="10" width="18" height="24" rx="3" fill="rgba(96,165,250,0.18)" stroke="#93C5FD" stroke-width="1.6"/><path d="M15 16h10M15 21h8M15 26h6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/><circle cx="31" cy="29" r="6" fill="#0F1B33" stroke="#60A5FA" stroke-width="2.2"/><path d="M35.5 33.5L39 37" stroke="#60A5FA" stroke-width="2.6" stroke-linecap="round"/></svg>`,

  medx: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#230E18" stroke="rgba(244,63,94,0.65)" stroke-width="1.5"/><path d="M21 11h6v10h10v6H27v10h-6V27H11v-6h10V11z" fill="rgba(244,63,94,0.25)" stroke="#FB7185" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 24h6l2.5-5 3.5 10 2.5-5H36" stroke="#34D399" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  cycling: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#0B2217" stroke="rgba(61,220,132,0.65)" stroke-width="1.5"/><circle cx="15" cy="30" r="6.5" stroke="#3DDC84" stroke-width="2.2"/><circle cx="33" cy="30" r="6.5" stroke="#3DDC84" stroke-width="2.2"/><path d="M15 30l7-11h7l4 11M22 19l-2-4h-3M29 19l2-4h3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  uiux: `<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="2" width="44" height="44" rx="11" fill="#1C1230" stroke="rgba(167,139,250,0.65)" stroke-width="1.5"/><rect x="10" y="11" width="28" height="8" rx="2.5" fill="rgba(167,139,250,0.3)" stroke="#C4B5FD" stroke-width="1.5"/><rect x="10" y="23" width="12" height="14" rx="2.5" fill="rgba(167,139,250,0.18)" stroke="#A78BFA" stroke-width="1.5"/><rect x="26" y="23" width="12" height="14" rx="2.5" fill="rgba(244,114,182,0.22)" stroke="#F472B6" stroke-width="1.5"/></svg>`
};

export const XMB_CATEGORIES: XmbCategory[] = [
  // 1. SETTINGS
  {
    id: 'settings',
    label: 'Settings',
    iconSvg: SVG_ICONS.settings,
    items: [
      {
        id: 'setting-theme',
        title: 'Background Color & Theme',
        subtitle: 'Theme Settings',
        description: 'Cycle real-time WebGL wave themes: Midnight Obsidian, Ruby Crimson, PlayStation Cobalt, Aurora Emerald, Royal Gold, Regal Violet, or Dynamic Monthly.',
        iconSvg: SVG_ICONS.palette,
        action: { type: 'setting', payload: 'theme-picker' }
      },
      {
        id: 'setting-font',
        title: 'Display Font & Legibility',
        subtitle: 'Typography Settings',
        description: 'Switch between XMB typography presets: Rajdhani, PS3 Rodin Clean (Plus Jakarta Sans), High-Contrast Inter, and Console Geometric (Exo 2).',
        iconSvg: SVG_ICONS.typography,
        action: { type: 'setting', payload: 'font-picker' }
      },
      {
        id: 'setting-wave-speed',
        title: 'Wave Motion Speed',
        subtitle: 'Visual Effects',
        description: 'Adjust the WebGL silk wave simulation speed (Static, Slow, Normal, Fast).',
        iconSvg: SVG_ICONS.wave,
        action: { type: 'setting', payload: 'wave-speed-toggle' }
      },
      {
        id: 'setting-particles',
        title: 'Particle Effects',
        subtitle: 'Display Settings',
        description: 'Toggle floating ambient PS3 dust particles and glowing motes across the viewport.',
        iconSvg: SVG_ICONS.sparkles,
        action: { type: 'setting', payload: 'particle-toggle' }
      },
      {
        id: 'setting-sound',
        title: 'Sound Effects Volume',
        subtitle: 'Audio Settings',
        description: 'Step through Web Audio UI sound levels (Muted, 35%, 70%, 100%).',
        iconSvg: SVG_ICONS.speaker,
        action: { type: 'setting', payload: 'sound-toggle' }
      },
      {
        id: 'setting-clock',
        title: 'Time & Date Format',
        subtitle: 'System Date Utility',
        description: 'Switch between 12-Hour (AM/PM) and 24-Hour digital clock display in the top-right HUD.',
        iconSvg: SVG_ICONS.clock,
        action: { type: 'setting', payload: 'clock-toggle' }
      },
      {
        id: 'setting-reboot',
        title: 'Restart System',
        subtitle: 'System Power Utility',
        description: 'Replay the midnight fade-in startup sequence.',
        iconSvg: SVG_ICONS.power,
        badge: 'Reboot',
        action: { type: 'reboot' }
      }
    ]
  },

  // 2. PROFILE
  {
    id: 'profile',
    label: 'Profile',
    iconSvg: SVG_ICONS.profile,
    items: [
      {
        id: 'profile-main',
        title: 'Ashvin Kethiswaran',
        subtitle: 'Computer Engineering • University of Ottawa • Open to 2027 New Grad Roles',
        description: 'Fourth-year Computer Engineering student at the University of Ottawa focused on software engineering, data pipelines, and system automation.',
        iconSvg: SVG_ICONS.profileAvatar,
        badge: 'uOttawa',
        date: 'Class of 2026',
        tags: ['Python', 'R', 'SQL', 'TypeScript', 'Java', 'ETL & Automation'],
        action: { type: 'modal' },
        details: {
          role: 'BASc Computer Engineering (Co-op)',
          organization: 'University of Ottawa • Ajax / Ottawa, ON',
          gradeOrMetric: '4th Year',
          overview: 'I’m a fourth-year Computer Engineering student at the University of Ottawa with a strong foundation in software development, data analytics, and system automation. I build reliable backend services, automated ETL pipelines, and full-stack apps that eliminate manual work and make life easier for teams.',
          highlights: [
            'Curtiss-Wright Defense Solutions: Engineered Python/pandas ETL pipelines cutting manual QC reporting time by 80% (15+ hrs/week saved) and led SAP ECC → S/4HANA schema validation.',
            'Public Service Commission of Canada: Built Power Automate workflows & SharePoint data models improving data accuracy by 30% and cutting turnaround times by 25%+.',
            'Statistics Canada: Migrated 5 legacy SAS ETL workflows into modern R & Python pipelines, accelerating securities data acquisition by 50% across Oracle & SQL Server.',
            'Languages: English (Native), Tamil (Native), French (Limited Working).'
          ],
          extraInfo: {
            'Location': 'Ajax / Ottawa, Ontario, Canada',
            'Availability': 'Open to 2027 New Grad SWE & Data Roles',
            'Focus': 'Software Engineering, Data Pipelines & Automation',
            'Languages': 'English, Tamil, French (Limited Working)'
          }
        }
      },
      {
        id: 'profile-about-site',
        title: 'About This Site',
        subtitle: 'PS3 XMB Homage & Architecture',
        description: 'An interactive developer portfolio built as a homage to the iconic PlayStation 3 XrossMediaBar (XMB), complete with real-time WebGL silk waves and procedural audio.',
        iconSvg: SVG_ICONS.disc,
        badge: 'Homage',
        date: '2026',
        tags: ['TypeScript', 'WebGL', 'GLSL', 'Web Audio API', 'Vite'],
        action: { type: 'modal' },
        details: {
          role: 'Interactive Console Portfolio',
          organization: 'Homage to PlayStation 3 XMB',
          overview: 'This portfolio is a tribute to the timeless PlayStation 3 XrossMediaBar (XMB) — one of the cleanest, most recognizable console interfaces ever designed. Built from scratch using modern web technologies, it reimagines the dual-axis horizontal and vertical navigation into a living, interactive resume.',
          highlights: [
            'Real-Time WebGL Wave Background: Custom GLSL fragment shaders simulate the flowing PS3 silk ribbons at 60 FPS with switchable color themes.',
            'Ambient Particle Field: Subtle drifting dust motes layered over the wave shader for authentic depth.',
            'Synthesized UI Audio: Web Audio API procedural navigation ticks, confirm chirps, and cancel tones with zero external audio bloat.',
            'Customizable Experience: Head to Settings to switch background themes, wave speed, ambient particles, clock format, and display fonts.'
          ],
          skillsUsed: ['TypeScript', 'WebGL', 'GLSL Shaders', 'Canvas API', 'Web Audio API', 'Vite', 'CSS3']
        }
      },
      {
        id: 'profile-resume',
        title: 'Save Data Utility (Resume / CV)',
        subtitle: 'System Storage • PDF',
        description: 'Download the official curriculum vitae and verified professional credentials of Ashvin Kethiswaran.',
        iconSvg: SVG_ICONS.folder,
        badge: 'PDF',
        action: { type: 'download', payload: '/resume.pdf' }
      },
      {
        id: 'profile-trophies',
        title: 'Trophy Collection',
        subtitle: 'Track Unlocked Portfolio Trophies',
        description: 'View all trophies unlocked while exploring the XMB portfolio.',
        iconSvg: SVG_ICONS.trophy,
        badge: '0 / 5',
        action: { type: 'modal' },
        details: {
          role: 'Exploration Trophies',
          organization: 'Portfolio Network',
          overview: 'Explore the XMB portfolio to unlock hidden PlayStation-style trophies.'
        }
      }
    ]
  },

  // 3. SKILLS
  {
    id: 'skills',
    label: 'Skills',
    iconSvg: SVG_ICONS.skills,
    items: [
      {
        id: 'skill-languages',
        title: 'Programming Languages',
        subtitle: 'Core Development & Analytics',
        description: 'Python, R, SQL, SAS, C/C++, Java, TypeScript, JavaScript, HTML5, CSS3.',
        iconSvg: SVG_ICONS.skillLanguages,
        badge: '7 Core',
        tags: ['Python', 'R', 'SQL', 'TypeScript', 'Java', 'C/C++', 'SAS'],
        action: { type: 'modal' },
        details: {
          role: 'Languages & Paradigms',
          overview: 'Production experience across backend automation, statistical computing, mobile apps, and full-stack web engineering.',
          highlights: [
            'Python: Automated ETL pipelines (pandas, NumPy, scikit-learn), Flask apps, Selenium scrapers, and PyMuPDF parsing.',
            'R & SAS: Migrated 5 legacy SAS ETL workflows into modern R (tidyverse) & Python pipelines at Statistics Canada.',
            'SQL: Complex analytical queries across Oracle, SQL Server, and PostgreSQL (Neon) validating billion-dollar datasets.',
            'TypeScript, Java & C/C++: Full-stack Next.js/Remix/Node.js apps, native Android apps, and systems coursework.'
          ]
        }
      },
      {
        id: 'skill-automation',
        title: 'Data Pipelines & Process Automation',
        subtitle: 'ETL, BI & Power Platform',
        description: 'ETL Pipelines, pandas, scikit-learn, Power BI, Tableau, Microsoft Power Automate, Power Apps, Excel, SharePoint.',
        iconSvg: SVG_ICONS.skillAutomation,
        badge: 'Top Skill',
        tags: ['ETL Pipelines', 'pandas', 'Power Automate', 'Power BI', 'Tableau', 'TF-IDF'],
        action: { type: 'modal' },
        details: {
          role: 'Data & Automation',
          overview: 'Specializing in eliminating manual bottlenecks by connecting enterprise data sources into reliable, validated automated workflows.',
          highlights: [
            'Manufacturing ETL: Cut manual QC reporting by 80% (15+ hrs/week saved) across Agile PLM, FactoryLogix MES, and SAP ERP.',
            'Microsoft Power Platform: Deployed Power Automate workflows and custom Power Apps improving accuracy by 30% and cutting turnaround by 25%+.',
            'Analytics & ML: Built hybrid TF-IDF cosine similarity + skill-gap ranking in scikit-learn and interactive dashboards in Power BI & Tableau.'
          ]
        }
      },
      {
        id: 'skill-fullstack',
        title: 'Full-Stack, WebGL & Mobile',
        subtitle: 'Web Apps, APIs & Android',
        description: 'React, Next.js, Remix, Node.js, Express, WebSockets, Flask, Prisma, WebGL/GLSL, Web Audio API, Android Studio, Firebase.',
        iconSvg: SVG_ICONS.skillFullstack,
        badge: 'Web & Mobile',
        tags: ['React', 'Next.js', 'Node.js', 'WebSockets', 'WebGL / GLSL', 'Flask', 'Firebase'],
        action: { type: 'modal' },
        details: {
          role: 'Application Engineering',
          overview: 'Building interactive, user-focused full-stack web apps, real-time multiplayer systems, and native mobile applications.',
          highlights: [
            'Real-Time Web Apps: Monorepo architecture with Node.js/Express WebSockets, Prisma ORM, Neon PostgreSQL, and Next.js.',
            'Creative Web & Audio: Custom WebGL GLSL silk-wave shaders and zero-asset Web Audio API synthesis (this portfolio & SongSnap).',
            'AI & Third-Party APIs: OpenAI API, Google Maps Places API, and Gadget full-stack platform (MedX).',
            'Mobile Development: Native Java Android apps backed by Firebase in Android Studio.'
          ]
        }
      },
      {
        id: 'skill-enterprise',
        title: 'Enterprise Systems, Cloud & Databases',
        subtitle: 'ERP, Azure, Databases & DevOps',
        description: 'PostgreSQL, Oracle, SQL Server, Microsoft Azure, Agile PLM, FactoryLogix MES, SAP ECC / S/4HANA, Git, CI/CD, Agile/Scrum.',
        iconSvg: SVG_ICONS.skillEnterprise,
        badge: 'ERP & Cloud',
        tags: ['PostgreSQL', 'Oracle', 'SQL Server', 'Azure', 'SAP S/4HANA', 'CI/CD'],
        action: { type: 'modal' },
        details: {
          role: 'Infrastructure & Enterprise',
          overview: 'Experienced working inside cross-functional aerospace/defense manufacturing and federal government engineering teams.',
          highlights: [
            'Enterprise Migrations: Led data quality verification and schema mapping for SAP ECC → SAP S/4HANA migration at Curtiss-Wright.',
            'Databases & Cloud: Oracle, SQL Server, PostgreSQL (Neon), Firebase, Microsoft Azure (Data Factory & Azure DevOps).',
            'DevOps & Delivery: Git/GitHub, CI/CD pipelines, Vercel, Netlify, Railway, and Agile/Scrum collaboration.'
          ]
        }
      }
    ]
  },

  // 4. EDUCATION
  {
    id: 'education',
    label: 'Education',
    iconSvg: SVG_ICONS.education,
    items: [
      {
        id: 'edu-uottawa',
        title: 'University of Ottawa',
        subtitle: 'BASc, Computer Engineering (Co-op) • Sept 2022 – Dec 2026',
        description: 'Bachelor of Applied Science in Computer Engineering — software development, databases, AI, and system automation.',
        image: '/logos/uottawa.png',
        iconSvg: SVG_ICONS.uottawa,
        badge: 'BASc',
        date: 'Sept 2022 – Dec 2026',
        tags: ['Computer Engineering', 'Co-op', 'uOttawa'],
        action: { type: 'modal' },
        details: {
          role: 'BASc, Computer Engineering (Co-op)',
          organization: 'University of Ottawa • Ottawa, Ontario',
          gradeOrMetric: '4th Year • Expected Graduation: Dec 2026',
          overview: 'Pursuing a Bachelor of Applied Science in Computer Engineering at the University of Ottawa, combining software/systems engineering fundamentals with 20+ months of co-op experience in aerospace manufacturing and federal government technology.',
          courses: [
            'CSI 2110: Data Structures & Algorithms',
            'CSI 2132: Databases I',
            'CSI 4106: Intro to Artificial Intelligence',
            'SEG 2105: Intro to Software Engineering',
            'SEG 3125: Analysis & Design of User Interfaces',
            'GNG 2101 / Probability & Statistics for Engineers'
          ],
          highlights: [
            'Completed co-op work terms at Curtiss-Wright Defense Solutions, Public Service Commission of Canada, and Statistics Canada.',
            'Built MedX at uOttaHack 2025 — an AI health assistant powered by Gadget, Remix, and OpenAI.',
            'Shipped projects spanning real-time multiplayer web apps, Android/Firebase mobile apps, and Python NLP tools.'
          ]
        }
      },
      {
        id: 'edu-pickering',
        title: 'Pickering High School',
        subtitle: 'Ontario Secondary School Diploma • 2018 – 2022',
        description: 'Ontario Secondary School Diploma with early foundations in software development and interactive media.',
        image: '/logos/pickering-hs.png',
        iconSvg: SVG_ICONS.education,
        badge: 'OSSD',
        date: '2018 – 2022',
        tags: ['STEM', 'High School Diploma'],
        action: { type: 'modal' },
        details: {
          role: 'Ontario Secondary School Diploma',
          organization: 'Pickering High School • Ajax, Ontario',
          gradeOrMetric: 'Graduated 2022',
          overview: 'Completed secondary education with a focus on computer science, mathematics, and engineering preparation.',
          highlights: [
            'Completed early technical training in software programming and interactive web design.',
            'Selected for Durham College Computer Programmer & Interactive Media Developer placement (June 2021).'
          ]
        }
      },
      {
        id: 'edu-certifications',
        title: 'Certifications & Accreditations',
        subtitle: 'DataCamp • Python & R Data Analytics',
        description: 'Intermediate R, Introduction to Importing Data in R, Introduction to R, and Introduction to Python.',
        iconSvg: SVG_ICONS.certBadge,
        badge: '4 Verified',
        tags: ['Python', 'R', 'Data Importing', 'DataCamp'],
        action: { type: 'modal' },
        details: {
          role: 'Verified Data Analytics Certifications',
          organization: 'DataCamp',
          overview: 'Completed certifications strengthening statistical programming, data ingestion, and analytical software fundamentals:',
          highlights: [
            'Intermediate R — DataCamp',
            'Introduction to Importing Data in R — DataCamp',
            'Introduction to R — DataCamp',
            'Introduction to Python — DataCamp'
          ]
        }
      }
    ]
  },

  // 5. EXPERIENCE
  {
    id: 'experience',
    label: 'Experience',
    iconSvg: SVG_ICONS.experience,
    items: [
      {
        id: 'exp-curtiss-wright',
        title: 'Curtiss-Wright Defense Solutions',
        subtitle: 'Process Automation & Quality Co-op • May 2026 – Aug 2026',
        description: 'Engineered Python/pandas ETL pipelines cutting manual QC reporting by 80% (15+ hrs/wk saved) and led SAP ECC → S/4HANA data validation.',
        image: '/logos/curtiss-wright.png',
        iconSvg: SVG_ICONS.experience,
        badge: 'Co-op • 4 Mo',
        date: 'May 2026 – Aug 2026',
        tags: ['Python', 'pandas', 'ETL', 'Agile PLM', 'FactoryLogix MES', 'SAP S/4HANA'],
        action: { type: 'modal' },
        details: {
          role: 'Process Automation & Quality Engineering (Co-op)',
          organization: 'Curtiss-Wright Defense Solutions • Ottawa, Ontario',
          gradeOrMetric: '80% Faster QC Reporting • 15+ hrs/wk Saved',
          overview: 'Engineered automated data pipelines, cross-platform enterprise integrations, and quality-control analytics workflows for aerospace and defense manufacturing operations.',
          highlights: [
            'Engineered automated data pipelines and analytical reporting workflows in Python and pandas, eliminating 80% of manual processing and saving 15+ hours weekly.',
            'Integrated and modeled cross-platform enterprise datasets across Agile PLM, FactoryLogix MES, and SAP ERP, delivering actionable data quality dashboards to client departments.',
            'Led systematic data quality verification and schema mapping during the enterprise migration from SAP ECC to SAP S/4HANA.'
          ],
          skillsUsed: ['Python', 'pandas', 'ETL Pipelines', 'Agile PLM', 'FactoryLogix MES', 'SAP ERP', 'SAP S/4HANA']
        }
      },
      {
        id: 'exp-psc',
        title: 'Public Service Commission of Canada',
        subtitle: 'Administrative Technology Advisor (Co-op) • Sept 2025 – Dec 2025',
        description: 'Automated President’s Office workflows with Power Platform & SharePoint, boosting data accuracy by 30% and cutting turnaround times by 25%+.',
        image: '/logos/psc-canada.jpg',
        imageScale: 1.24,
        iconSvg: SVG_ICONS.experience,
        badge: 'Gov • 4 Mo',
        date: 'Sept 2025 – Dec 2025',
        tags: ['Power Automate', 'Power Apps', 'SharePoint', 'Excel'],
        action: { type: 'modal' },
        details: {
          role: 'Administrative Technology Advisor (Co-op)',
          organization: 'Public Service Commission of Canada — President’s Office • Gatineau, QC',
          gradeOrMetric: '+30% Data Accuracy • -25%+ Turnaround Time',
          overview: 'Partnered with business units in the President’s Office to replace paper-based operations with Microsoft Power Platform automation and validated SharePoint data models.',
          highlights: [
            'Translated client business needs into automated technical workflows and structured data models across SharePoint, Excel, and Power Platform, improving overall data quality and accuracy by 30%.',
            'Built a custom internal Power App replacing paper-based infrastructure and eliminating duplicate data entry.',
            'Deployed automated data dissemination and reporting solutions reducing turnaround times by 25%+, while presenting technical concepts clearly to technical and non-technical stakeholders.'
          ],
          skillsUsed: ['Microsoft Power Automate', 'Microsoft Power Apps', 'SharePoint', 'Microsoft Excel', 'Process Automation']
        }
      },
      {
        id: 'exp-statcan',
        title: 'Statistics Canada | Statistique Canada',
        subtitle: 'Junior Programmer (Co-op) • May 2024 – Apr 2025 (1 yr)',
        description: 'Migrated 5 legacy SAS ETL workflows to R & Python (+50% faster acquisition) and queried Oracle & SQL Server to validate billion-dollar trade datasets.',
        image: '/logos/statcan.png',
        imageScale: 1.85,
        iconSvg: SVG_ICONS.experience,
        badge: 'Gov • 1 Yr',
        date: 'May 2024 – Apr 2025',
        tags: ['R', 'Python', 'SQL', 'Oracle', 'SQL Server', 'SAS'],
        action: { type: 'modal' },
        details: {
          role: 'Junior Programmer (Co-op)',
          organization: 'Statistics Canada — International Accounts & Trade Division • Ottawa, ON',
          gradeOrMetric: '5 SAS Pipelines Migrated • +50% Faster Acquisition',
          overview: 'Built automated data pipelines and analytical solutions for the Foreign Direct Investment Team supporting national macroeconomic and international trade reporting.',
          highlights: [
            'Migrated 5 legacy SAS ETL workflows into modern R and Python pipelines, accelerating stockholder/securities data acquisition by 50%.',
            'Designed and executed complex SQL queries across large-scale Oracle and SQL Server databases to extract, model, and validate macroeconomic datasets — resolving discrepancies worth billions.',
            'Collaborated within Agile product teams alongside economists and IT partners to translate analytical needs into interactive dashboards and data visualizations.'
          ],
          skillsUsed: ['R (tidyverse)', 'Python', 'SQL', 'Oracle', 'SQL Server', 'SAS', 'Agile']
        }
      },
      {
        id: 'exp-durham',
        title: 'Durham College',
        subtitle: 'Computer Programmer & Interactive Media Developer • June 2021',
        description: 'Collaborated on web programming and interactive media design, proposing and implementing website UI/UX improvements.',
        image: '/logos/durham-college.png',
        imageScale: 1.08,
        iconSvg: SVG_ICONS.experience,
        badge: 'Program',
        date: 'June 2021',
        tags: ['UI/UX', 'Web Design', 'Technical Reporting'],
        action: { type: 'modal' },
        details: {
          role: 'Computer Programmer & Interactive Media Developer',
          organization: 'Durham College • Oshawa, Ontario',
          overview: 'Explored software development and interactive media design in a collaborative team environment focused on practical UI/UX enhancements.',
          highlights: [
            'Evaluated existing web interfaces with a development team and implemented targeted UI/UX usability improvements.',
            'Authored structured technical findings and design reports documenting user-experience recommendations.'
          ],
          skillsUsed: ['UI/UX Design', 'Web Development', 'Technical Reporting']
        }
      }
    ]
  },

  // 6. PROJECTS (Pinned Repositories from github.com/ashketh21 — Chronological 2026 → 2024)
  {
    id: 'projects',
    label: 'Projects',
    iconSvg: SVG_ICONS.projects,
    items: [
      {
        id: 'proj-songsnap',
        title: 'SongSnap',
        subtitle: 'Solo & Multiplayer Spotify Guessing Game',
        description: 'Competitive solo & multiplayer music guessing game powered by your own public Spotify playlists with progressive 0.1s–10s audio clips and synchronized lobbies.',
        iconSvg: SVG_ICONS.songsnap,
        badge: 'Live Demo',
        date: '2026',
        tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Node.js'],
        demoUrl: 'https://songsnap.up.railway.app',
        githubUrl: 'https://github.com/ashketh21/SongSnap',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A competitive solo and multiplayer music guessing game powered by public Spotify playlists — no Spotify API keys or user allowlists required. Players guess tracks as early as possible across progressive audio clips (0.1s → 0.5s → 1s → 2s → 5s → 10s).',
          highlights: [
            'Sample-Accurate Progressive Audio: Decodes previews client-side via Web Audio API, automatically trims leading silence (-40 dB), and applies smooth fade-outs so 0.1s clips always contain music.',
            'Public Spotify Playlist Import: Paste any public Spotify playlist URL (25+ playable songs) or pick from built-in curated presets (2010s Hits, 2000s Throwbacks, Classic Anthems).',
            'Synchronized Multiplayer Lobbies (up to 12 players): 5-character room codes, shareable invite links, lock-in countdowns, live progress sidebar, and final podium.',
            'Smart Answer Matching: Deduplicated global autocomplete and server-side verification handling Remastered/Deluxe editions, diacritics, and multi-artist credits.'
          ],
          skillsUsed: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Node.js', 'Railway']
        }
      },
      {
        id: 'proj-adaptive-trivia',
        title: 'Volatility Engine',
        subtitle: 'Real-Time Multiplayer Trivia & Competitive Wagering',
        description: 'Adaptive trivia game where players act as investors wagering on questions with dynamic volatility score multipliers across a shared Host screen and phone Controllers.',
        iconSvg: SVG_ICONS.trivia,
        badge: 'Live Demo',
        date: '2026',
        tags: ['TypeScript', 'Next.js', 'Node.js', 'WebSockets', 'Prisma', 'PostgreSQL'],
        demoUrl: 'https://adaptive-trivia-game-host.vercel.app',
        githubUrl: 'https://github.com/ashketh21/Adaptive-Trivia-Game',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Developer',
          organization: 'Pinned GitHub Project',
          overview: 'An adaptive multiplayer trivia game styled as a Global Trivia Exchange. Players wager on trivia questions with dynamic score multipliers driven by global question difficulty ("volatility"), played across a shared Host TV/desktop screen and individual phone Controllers.',
          highlights: [
            'Monorepo architecture with a Node.js/Express WebSocket backend, Prisma ORM, and Neon PostgreSQL database.',
            'Separate Next.js web applications for the main Host display (apps/host) and mobile player Controllers (apps/controller).',
            'Seeded with OpenTDB trivia questions and real-time volatility-based wagering mechanics.',
            'Deployed live on Vercel for instant browser play.'
          ],
          skillsUsed: ['TypeScript', 'Next.js', 'Node.js', 'Express', 'WebSockets', 'Prisma', 'PostgreSQL']
        }
      },
      {
        id: 'proj-job-recommender',
        title: 'Smart Job Recommender',
        subtitle: 'Resume Matcher & Live Job Scraper',
        description: 'Local-first Flask app that parses PDF resumes, scrapes live Canadian tech listings from Indeed, and ranks matches via hybrid TF-IDF cosine similarity + skill gap analysis.',
        iconSvg: SVG_ICONS.jobRecommender,
        badge: 'Python / NLP',
        date: '2026',
        tags: ['Python', 'Flask', 'scikit-learn', 'pandas', 'Selenium', 'PyMuPDF'],
        githubUrl: 'https://github.com/ashketh21/job-recommender',
        action: { type: 'modal' },
        details: {
          role: 'Creator & Backend Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A privacy-first, local Flask web application that extracts text from your PDF resume, scrapes live tech job listings, and ranks the best-fitting roles using hybrid TF-IDF cosine similarity and tech skill-gap analysis — with zero external LLM APIs required.',
          highlights: [
            'PDF Resume Parsing: Extracts text using PyMuPDF (fitz) and auto-deletes uploaded files immediately after processing.',
            'Live Indeed Scraping with Offline Fallback: Scrapes ca.indeed.com via headless Chrome (Selenium) with 15-minute in-memory caching and graceful offline fallback.',
            'Granular Filters: Filter by keywords, Canadian city or remote-only, date posted (24h–14d), and seniority level (Intern/Co-op through Senior).',
            'Matched & Missing Skill Badges: Detects 100+ tech skills locally and highlights skill gaps and detected years of experience on every job card.'
          ],
          skillsUsed: ['Python', 'Flask', 'scikit-learn', 'pandas', 'Selenium', 'PyMuPDF', 'TF-IDF']
        }
      },
      {
        id: 'proj-medx',
        title: 'MedX — AI Health Assistant',
        subtitle: 'uOttaHack 2025 Submission',
        description: 'AI-powered health assistant built for uOttaHack 2025 using Gadget, Remix, React, OpenAI, and Google Maps Places API.',
        iconSvg: SVG_ICONS.medx,
        badge: 'uOttaHack',
        date: '2025',
        tags: ['TypeScript', 'React', 'Remix', 'Gadget', 'OpenAI API', 'Tailwind CSS'],
        githubUrl: 'https://github.com/ashketh21/MedX',
        action: { type: 'modal' },
        details: {
          role: 'Full-Stack Hackathon Developer',
          organization: 'uOttaHack 2025 • Pinned GitHub Project',
          overview: 'Built during uOttaHack 2025, MedX is an interactive AI health assistant combining conversational triage with location-aware healthcare lookup.',
          highlights: [
            'Powered by Gadget full-stack platform with Remix, React 18, TypeScript, and Vite.',
            'Integrated OpenAI API for intelligent health guidance and symptom Q&A.',
            'Connected Google Maps API and Places Autocomplete to help users locate nearby care.',
            'Styled with Tailwind CSS and accessible Radix UI components.'
          ],
          skillsUsed: ['TypeScript', 'React', 'Remix', 'Gadget', 'OpenAI API', 'Google Maps API', 'Tailwind CSS']
        }
      },
      {
        id: 'proj-seg3125',
        title: 'SEG 3125 UI/UX Portfolio',
        subtitle: 'UI/UX Design Case Study • uOttawa',
        description: 'Interactive portfolio design project created for SEG 3125 to explore user-centered UI/UX design principles and responsive web layout.',
        iconSvg: SVG_ICONS.uiux,
        badge: 'Live Demo',
        date: '2025',
        tags: ['HTML5', 'CSS3', 'UI/UX Design', 'Netlify'],
        demoUrl: 'https://ashvinkuiuxportfolio.netlify.app',
        githubUrl: 'https://github.com/ashketh21/SEG-3125-Portfolio-Project',
        action: { type: 'modal' },
        details: {
          role: 'UI/UX Designer & Developer',
          organization: 'University of Ottawa (SEG 3125)',
          overview: 'A UI/UX design learning project built for uOttawa’s Analysis and Design of User Interfaces course (SEG 3125), focused on visual hierarchy, usability, and clean responsive design.',
          highlights: [
            'Applied core HCI and UI/UX design heuristics to structure project case studies and navigation.',
            'Crafted clean, lightweight semantic HTML/CSS layouts.',
            'Deployed and hosted live on Netlify.'
          ],
          skillsUsed: ['HTML5', 'CSS3', 'UI/UX Design', 'HCI Principles', 'Netlify']
        }
      },
      {
        id: 'proj-cycling-club',
        title: 'Cycling Club Android App',
        subtitle: 'Native Android Mobile Application',
        description: 'Native Android cycling club management app built in Java with Android Studio and backed by Firebase.',
        iconSvg: SVG_ICONS.cycling,
        badge: 'Android',
        date: '2024',
        tags: ['Java', 'Android Studio', 'Firebase', 'Mobile UI'],
        githubUrl: 'https://github.com/ashketh21/Cycling-Club-Android-App',
        action: { type: 'modal' },
        details: {
          role: 'Android Developer',
          organization: 'Pinned GitHub Project',
          overview: 'A native Android mobile application engineered in Java using Android Studio and Firebase for managing cycling club events, profiles, and participant registration.',
          highlights: [
            'Built native Android activities and intuitive mobile navigation flows in Java.',
            'Integrated Firebase backend for real-time authentication, club event data persistence, and synchronization.',
            'Designed role-based flows for administrators, cycling clubs, and participants.'
          ],
          skillsUsed: ['Java', 'Android Studio', 'Firebase', 'XML Layouts', 'Mobile Development']
        }
      }
    ]
  },

  // 7. CONTACT
  {
    id: 'contact',
    label: 'Contact',
    iconSvg: SVG_ICONS.contact,
    items: [
      {
        id: 'contact-email',
        title: 'Electronic Mail',
        subtitle: 'ashvinkethiswaran@gmail.com • Press Enter to Copy',
        description: 'Direct email communication. Press Enter to copy ashvinkethiswaran@gmail.com to your clipboard.',
        iconSvg: SVG_ICONS.contactEmail,
        badge: 'Copy',
        linkUrl: 'mailto:ashvinkethiswaran@gmail.com',
        action: { type: 'copy', payload: 'ashvinkethiswaran@gmail.com' }
      },
      {
        id: 'contact-github',
        title: 'GitHub Profile',
        subtitle: 'github.com/ashketh21',
        description: 'Explore my pinned repositories, hackathon builds, and software engineering projects.',
        iconSvg: SVG_ICONS.contactGithub,
        badge: 'GitHub',
        linkUrl: 'https://github.com/ashketh21',
        action: { type: 'link', payload: 'https://github.com/ashketh21' }
      },
      {
        id: 'contact-linkedin',
        title: 'LinkedIn Network',
        subtitle: 'linkedin.com/in/ashvinkethiswaran',
        description: 'Connect with Ashvin Kethiswaran professionally on LinkedIn for engineering opportunities and collaborations.',
        iconSvg: SVG_ICONS.contactLinkedin,
        badge: 'Connect',
        linkUrl: 'https://www.linkedin.com/in/ashvinkethiswaran',
        action: { type: 'link', payload: 'https://www.linkedin.com/in/ashvinkethiswaran' }
      },
      {
        id: 'contact-message',
        title: 'Send Message',
        subtitle: 'Interactive Message Composer',
        description: 'Compose and dispatch a message directly to Ashvin through the console interface.',
        iconSvg: SVG_ICONS.contactMessage,
        badge: 'Compose',
        action: { type: 'modal' },
        details: {
          role: 'Direct Message',
          organization: 'Ajax / Ottawa, ON',
          overview: 'Ready to collaborate or discuss a 2027 New Grad software engineering, data, or automation role? Compose a message below:',
          extraInfo: {
            'Email': 'ashvinkethiswaran@gmail.com',
            'Location': 'Ajax / Ottawa, Ontario',
            'Roles': 'SWE, Data Pipelines & Automation'
          }
        }
      }
    ]
  }
];
