// Tipos generales de eclipses
export const SOLAR_ECLIPSE = 'Solar Eclipses'
export const LUNAR_ECLIPSE = 'Lunar Eclipses'

// Solar eclipse types
export const SOLAR_ECLIPSE_TOTAL = 'Total Solar Eclipse'
export const SOLAR_ECLIPSE_PARTIAL = 'Partial Solar Eclipse'
export const SOLAR_ECLIPSE_ANNULAR = 'Annular Solar Eclipse'

// Lunar eclipse types
export const LUNAR_ECLIPSE_TOTAL = 'Total Lunar Eclipse'
export const LUNAR_ECLIPSE_PARTIAL = 'Partial Lunar Eclipse'
export const LUNAR_ECLIPSE_PENUMBRAL = 'Penumbral Lunar Eclipse'

export const LUNAR_ECLIPSE_TYPES = {
  Nb: 'Eclipse Penumbral Total',
  N: 'Eclipse Penumbral',
  P: 'Eclipse Parcial',
  T: 'Eclipse Total',
  'T+': 'Eclipse Total +',
  'T-': 'Eclipse Total -',
  Nx: 'Eclipse Penumbral Extra',
}

export const SOLAR_ECLIPSE_TYPES = {
  Pb: 'Eclipse  Parcial con Besseliano',
  P: 'Eclipse  Parcial',
  Ts: 'Eclipse  Total con Sombra de la Tierra',
  Am: 'Eclipse  Anular con Magnitud Máxima',
  A: 'Eclipse  Anular',
  Pe: 'Eclipse  Parcial Extra',
  T: 'Eclipse Total',
  H: 'Eclipse Híbrido',
}
export const Headers = [
  { original: 'Fecha y Hora', abbreviation: 'FyH' },
  { original: 'Ascensión Recta', abbreviation: 'AR' },
  { original: 'Declinación', abbreviation: 'Dec' },
  { original: 'Magnitud Aparente del Sol', abbreviation: 'Mag Sol' },
  { original: 'Brillo Superficial del Sol', abbreviation: 'Brillo Sol' },
  { original: 'Distancia Aparente al Objetivo', abbreviation: 'Distancia' },
  {
    original: 'Tasa de Cambio de Distancia al Objetivo',
    abbreviation: 'Tasa Cambio',
  },
  { original: 'Ángulo de Elongación Solar', abbreviation: 'Ángulo Elongación' },
  {
    original: 'Ángulo Solar-Objetivo-Observador',
    abbreviation: 'Ángulo S-O-O',
  },
  { original: 'Constelación', abbreviation: 'Const' },
]
