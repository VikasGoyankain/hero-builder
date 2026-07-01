/**
 * Fully-animated SVG hero scene for The Court Room.
 * Uses transform/opacity keyframes only → GPU-composited, easily 60fps on mobile.
 */
export function HeroScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 600 600"
        className="block h-auto w-full"
        aria-labelledby="heroTitle"
        role="img"
      >
        <title id="heroTitle">
          Court Room animated scene: courthouse over a stack of CLAT law books, scales of justice, floating graduation caps and pages
        </title>

        <defs>
          <linearGradient id="skyBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.985 0.008 85)" />
            <stop offset="100%" stopColor="oklch(0.955 0.012 85)" />
          </linearGradient>
          <radialGradient id="halo" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="oklch(0.88 0.09 55 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.88 0.09 55 / 0)" />
          </radialGradient>
          <linearGradient id="marble" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4ead6" />
            <stop offset="100%" stopColor="#e6d6b3" />
          </linearGradient>
          <linearGradient id="brass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e9c37a" />
            <stop offset="100%" stopColor="#a67b2c" />
          </linearGradient>
          <linearGradient id="bookRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b3a2a" />
            <stop offset="100%" stopColor="#5a2118" />
          </linearGradient>
          <linearGradient id="bookNavy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22303c" />
            <stop offset="100%" stopColor="#0f1a22" />
          </linearGradient>
          <linearGradient id="bookGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5646" />
            <stop offset="100%" stopColor="#1e2f26" />
          </linearGradient>
          <linearGradient id="bookBrown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7a4a26" />
            <stop offset="100%" stopColor="#3f2612" />
          </linearGradient>
          <linearGradient id="temple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5e9c9" />
            <stop offset="100%" stopColor="#d8bf8a" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dy="4" />
            <feComponentTransfer><feFuncA type="linear" slope="0.25" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="600" height="600" fill="url(#skyBg)" />
        <circle cx="300" cy="270" r="260" fill="url(#halo)" className="tcr-pulse" />

        {/* Orbit ring */}
        <circle
          cx="300"
          cy="300"
          r="240"
          fill="none"
          stroke="oklch(0.42 0.14 20 / 0.25)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="tcr-orbit"
          style={{ transformOrigin: "300px 300px" }}
        />

        {/* Floating paper (top-left) */}
        <g className="tcr-float-a" style={{ transformOrigin: "150px 130px" }}>
          <rect x="130" y="110" width="46" height="34" rx="2" fill="#fbf4e2" stroke="#d9c58f" />
          <line x1="138" y1="120" x2="168" y2="120" stroke="#c6a558" strokeWidth="1" />
          <line x1="138" y1="126" x2="168" y2="126" stroke="#c6a558" strokeWidth="1" />
          <line x1="138" y1="132" x2="160" y2="132" stroke="#c6a558" strokeWidth="1" />
        </g>

        {/* Floating grad cap (left) */}
        <g className="tcr-float-b" style={{ transformOrigin: "125px 260px" }}>
          <polygon points="95,258 155,246 155,264 95,276" fill="#1b1b1b" />
          <rect x="118" y="262" width="14" height="10" fill="#1b1b1b" />
          <line x1="125" y1="272" x2="140" y2="286" stroke="#c9a24a" strokeWidth="2" />
          <circle cx="141" cy="288" r="3" fill="#c9a24a" />
        </g>

        {/* Floating grad cap (right) */}
        <g className="tcr-float-c" style={{ transformOrigin: "500px 180px" }}>
          <polygon points="475,180 535,168 535,186 475,198" fill="#1b1b1b" />
          <rect x="498" y="184" width="14" height="10" fill="#1b1b1b" />
          <line x1="505" y1="194" x2="520" y2="208" stroke="#c9a24a" strokeWidth="2" />
          <circle cx="521" cy="210" r="3" fill="#c9a24a" />
        </g>

        {/* Marble steps base */}
        <g filter="url(#softShadow)">
          <polygon points="130,540 470,540 500,565 100,565" fill="url(#marble)" />
          <polygon points="150,515 450,515 470,540 130,540" fill="url(#marble)" opacity="0.95" />
          <polygon points="170,490 430,490 450,515 150,515" fill="url(#marble)" opacity="0.9" />
        </g>

        {/* Book stack — parallax bob */}
        <g className="tcr-bob" style={{ transformOrigin: "300px 400px" }}>
          {/* Legal Reasoning — red */}
          <g>
            <rect x="175" y="420" width="250" height="34" rx="2" fill="url(#bookRed)" />
            <rect x="175" y="420" width="250" height="4" fill="#c98a5a" opacity="0.4" />
            <rect x="175" y="450" width="250" height="4" fill="#000" opacity="0.15" />
            <text x="300" y="442" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="13" fill="#e9c37a" letterSpacing="1.2">
              LEGAL REASONING
            </text>
          </g>
          {/* Logical Reasoning — navy */}
          <g>
            <rect x="182" y="386" width="236" height="34" rx="2" fill="url(#bookNavy)" />
            <rect x="182" y="386" width="236" height="4" fill="#4a6070" opacity="0.5" />
            <rect x="182" y="416" width="236" height="4" fill="#000" opacity="0.2" />
            <text x="300" y="408" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="13" fill="#e9c37a" letterSpacing="1.2">
              LOGICAL REASONING
            </text>
          </g>
          {/* English Language — brown */}
          <g>
            <rect x="188" y="352" width="224" height="34" rx="2" fill="url(#bookBrown)" />
            <rect x="188" y="352" width="224" height="4" fill="#b98551" opacity="0.5" />
            <rect x="188" y="382" width="224" height="4" fill="#000" opacity="0.2" />
            <text x="300" y="374" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="13" fill="#e9c37a" letterSpacing="1.2">
              ENGLISH LANGUAGE
            </text>
          </g>
          {/* Quantitative Aptitude — green */}
          <g>
            <rect x="195" y="318" width="210" height="34" rx="2" fill="url(#bookGreen)" />
            <rect x="195" y="318" width="210" height="4" fill="#6b8b78" opacity="0.5" />
            <rect x="195" y="348" width="210" height="4" fill="#000" opacity="0.2" />
            <text x="300" y="340" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="12" fill="#e9c37a" letterSpacing="1.2">
              QUANTITATIVE APTITUDE
            </text>
          </g>

          {/* Courthouse temple on top */}
          <g transform="translate(0,-2)">
            {/* base */}
            <rect x="215" y="300" width="170" height="14" fill="url(#temple)" />
            {/* columns */}
            {[0,1,2,3,4,5].map((i)=>(
              <rect key={i} x={225 + i*26} y="240" width="14" height="60" fill="url(#temple)" />
            ))}
            {/* entablature */}
            <rect x="215" y="228" width="170" height="14" fill="url(#temple)" />
            {/* pediment */}
            <polygon points="215,228 300,180 385,228" fill="url(#temple)" />
            {/* JUSTICE plaque */}
            <rect x="252" y="205" width="96" height="16" rx="1" fill="#f9edcc" />
            <text x="300" y="217" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="11" fill="#5a2118" letterSpacing="2">
              JUSTICE
            </text>
            {/* door */}
            <rect x="288" y="264" width="24" height="36" rx="2" fill="#6b3a1a" />
          </g>
        </g>

        {/* Scales of justice (right) — sway */}
        <g className="tcr-sway" style={{ transformOrigin: "470px 400px" }}>
          {/* stand */}
          <rect x="466" y="400" width="8" height="90" fill="url(#brass)" />
          <rect x="450" y="488" width="40" height="8" rx="1" fill="url(#brass)" />
          <rect x="444" y="496" width="52" height="10" rx="2" fill="url(#brass)" />
          {/* beam */}
          <rect x="410" y="396" width="120" height="4" rx="2" fill="url(#brass)" />
          <circle cx="470" cy="398" r="6" fill="url(#brass)" />
          {/* left pan */}
          <line x1="418" y1="398" x2="418" y2="418" stroke="#a67b2c" strokeWidth="1.5" />
          <path d="M402 418 Q418 434 434 418 Z" fill="url(#brass)" />
          {/* right pan */}
          <line x1="522" y1="398" x2="522" y2="418" stroke="#a67b2c" strokeWidth="1.5" />
          <path d="M506 418 Q522 434 538 418 Z" fill="url(#brass)" />
        </g>

        {/* Open notebook at base */}
        <g className="tcr-fade-in">
          <path d="M220 530 L380 530 L390 555 L210 555 Z" fill="#fbf4e2" stroke="#c8a95e" />
          <line x1="300" y1="530" x2="300" y2="555" stroke="#c8a95e" />
          <line x1="235" y1="540" x2="285" y2="540" stroke="#b58a3a" strokeWidth="1" />
          <line x1="235" y1="546" x2="285" y2="546" stroke="#b58a3a" strokeWidth="1" />
          <line x1="315" y1="540" x2="365" y2="540" stroke="#b58a3a" strokeWidth="1" />
          <line x1="315" y1="546" x2="360" y2="546" stroke="#b58a3a" strokeWidth="1" />
          {/* pen */}
          <rect x="330" y="524" width="46" height="4" rx="1" fill="#1b1b1b" transform="rotate(-8 330 524)" />
          <polygon points="330,524 320,528 330,528" fill="#c9a24a" transform="rotate(-8 330 524)" />
        </g>

        {/* Orbit labels */}
        <g fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11" fill="oklch(0.42 0.14 20)" letterSpacing="2">
          <text x="510" y="120" className="tcr-fade-in">NLU</text>
          <text x="70" y="200" className="tcr-fade-in">AILET</text>
          <text x="40" y="380" className="tcr-fade-in">CLAT</text>
          <text x="510" y="380" className="tcr-fade-in">DREAM</text>
        </g>
      </svg>

      <style>{`
        @keyframes tcrBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes tcrSway { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes tcrFloatA { 0%,100% { transform: translate(0,0) rotate(-6deg); } 50% { transform: translate(6px,-10px) rotate(2deg); } }
        @keyframes tcrFloatB { 0%,100% { transform: translate(0,0) rotate(-10deg); } 50% { transform: translate(-6px,8px) rotate(-4deg); } }
        @keyframes tcrFloatC { 0%,100% { transform: translate(0,0) rotate(8deg); } 50% { transform: translate(8px,10px) rotate(14deg); } }
        @keyframes tcrPulse { 0%,100% { opacity: 0.85; } 50% { opacity: 1; } }
        @keyframes tcrOrbit { to { transform: rotate(360deg); } }
        @keyframes tcrFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        .tcr-bob { animation: tcrBob 6s ease-in-out infinite; will-change: transform; }
        .tcr-sway { animation: tcrSway 4s ease-in-out infinite; will-change: transform; transform-box: fill-box; }
        .tcr-float-a { animation: tcrFloatA 7s ease-in-out infinite; will-change: transform; transform-box: fill-box; }
        .tcr-float-b { animation: tcrFloatB 8s ease-in-out infinite; will-change: transform; transform-box: fill-box; }
        .tcr-float-c { animation: tcrFloatC 9s ease-in-out infinite; will-change: transform; transform-box: fill-box; }
        .tcr-pulse { animation: tcrPulse 5s ease-in-out infinite; }
        .tcr-orbit { animation: tcrOrbit 60s linear infinite; transform-box: fill-box; }
        .tcr-fade-in { animation: tcrFadeIn 0.9s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .tcr-bob, .tcr-sway, .tcr-float-a, .tcr-float-b, .tcr-float-c, .tcr-pulse, .tcr-orbit {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
