const PATHS = {
  top: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10',
  about: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1-5 4.5-7 8-7s7 2 8 7',
  oryvo: 'M12 2l8.5 5v10L12 22l-8.5-5V7zM12 8v8M8.5 10l7 4M15.5 10l-7 4',
  support: 'M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z',
  projects: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  stack: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
  journey: 'M5 19a2 2 0 100-4 2 2 0 000 4zM19 9a2 2 0 100-4 2 2 0 000 4zM7 17h6a4 4 0 004-4V9M17 9',
  contact: 'M4 6h16v12H4zM4 7l8 6 8-6',
  rocket: 'M5 15c-1 1-2 4-2 6 2 0 5-1 6-2M12 15l-3-3c1-4 4-8 11-9 0 7-4 10-8 12zM15 9a1 1 0 100-2 1 1 0 000 2z',
  compass: 'M12 3a9 9 0 100 18 9 9 0 000-18zM15.5 8.5l-2 5-5 2 2-5z',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
  github: 'M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.500 6-.6.6-.6 1.200-.5 2V21',
  link: 'M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  down: 'M12 4v14M6 12l6 6 6-6',
  play: 'M8 5.5v13l11-6.5z',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  external: 'M8 16L17 7M9 7h8v8',
  chart: 'M4 19V5M4 19h16M8 15l3-4 3 2 5-6',
}

export default function Icon({ name, size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  )
}
