const lights = [[40, 92], [100, 106], [160, 97], [220, 84], [280, 80], [340, 84]]
const gold = [[90, 190], [90, 230], [90, 270], [90, 310], [310, 190], [310, 230], [310, 270], [310, 310], [104, 150], [296, 150], [140, 123], [260, 123], [200, 110]]
const rose = [[90, 210], [90, 250], [90, 290], [310, 210], [310, 250], [310, 290], [170, 114], [230, 114]]

// Placeholder illustration. Replace with a real event photo later.
export default function HeroArt() {
  return (
    <svg viewBox="0 0 400 460" className="w-full rounded-3xl shadow-2xl" role="img" aria-label="Illustration of a flower-garlanded wedding stage with string lights">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2A0A55" />
          <stop offset="1" stopColor="#7A1736" />
        </linearGradient>
        <radialGradient id="glow" cx=".5" cy=".55" r=".5">
          <stop offset="0" stopColor="#F59E0B" stopOpacity=".55" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="460" fill="url(#sky)" />
      <rect width="400" height="460" fill="url(#glow)" />
      <path d="M0 70 Q100 120 200 80 T400 70" fill="none" stroke="#FDE68A" strokeOpacity=".6" strokeWidth="1.5" />
      {lights.map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" fill="#FDE68A" />)}
      <path d="M90 400 V200 Q90 110 200 110 Q310 110 310 200 V400" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
      <path d="M110 400 V205 Q110 132 200 132 Q290 132 290 205 V400" fill="#fff" fillOpacity=".07" />
      {gold.map(([x, y]) => <circle key={`g${x}-${y}`} cx={x} cy={y} r="9" fill="#F59E0B" />)}
      {rose.map(([x, y]) => <circle key={`r${x}-${y}`} cx={x} cy={y} r="7" fill="#FB7185" />)}
      <rect x="130" y="340" width="140" height="60" rx="10" fill="#9F1239" />
      <rect x="140" y="320" width="120" height="30" rx="14" fill="#F59E0B" />
      <rect y="400" width="400" height="60" fill="#14081f" fillOpacity=".55" />
    </svg>
  )
}