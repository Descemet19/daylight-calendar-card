const SYNODIC_MONTH_DAYS = 29.530588853;
const KNOWN_NEW_MOON_UTC = Date.UTC(2000, 0, 6, 18, 14);

const MOON_PHASES = [
  { icon: 'mdi:moon-new', name: 'new moon' },
  { icon: 'mdi:moon-waxing-crescent', name: 'waxing crescent' },
  { icon: 'mdi:moon-first-quarter', name: 'first quarter' },
  { icon: 'mdi:moon-waxing-gibbous', name: 'waxing gibbous' },
  { icon: 'mdi:moon-full', name: 'full moon' },
  { icon: 'mdi:moon-waning-gibbous', name: 'waning gibbous' },
  { icon: 'mdi:moon-last-quarter', name: 'last quarter' },
  { icon: 'mdi:moon-waning-crescent', name: 'waning crescent' }
];

export function getMoonPhase(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return null;

  const daysSinceKnownNewMoon = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - KNOWN_NEW_MOON_UTC) / 86400000;
  const phase = ((daysSinceKnownNewMoon % SYNODIC_MONTH_DAYS) + SYNODIC_MONTH_DAYS) % SYNODIC_MONTH_DAYS;
  return MOON_PHASES[Math.floor((phase / SYNODIC_MONTH_DAYS) * MOON_PHASES.length + 0.5) % MOON_PHASES.length];
}