import React from 'react';

/* ============================================================
   Original SVG illustrations for the Steel Soul community site.
   All graphics are hand-drawn, not copied from any third party.
   ============================================================ */

/* --- Top-down hexagonal arena with grid overlay ------------------ */
export function ArenaHexGrid({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <rect width="400" height="400" rx={16} fill="url(#hexBg)" />

      {/* Hexagonal boundary */}
      <polygon
        points="200,40 346,120 346,280 200,360 54,280 54,120"
        stroke="rgba(34,211,238,0.35)"
        strokeWidth={2}
        fill="rgba(34,211,238,0.04)"
      />
      <polygon
        points="200,64 326,134 326,266 200,336 74,266 74,134"
        stroke="rgba(34,211,238,0.15)"
        strokeWidth={1}
        fill="none"
      />

      {/* Grid lines */}
      <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(34,211,238,0.09)" strokeWidth={1} />
      <line x1="54" y1="200" x2="346" y2="200" stroke="rgba(34,211,238,0.09)" strokeWidth={1} />
      <line x1="127" y1="120" x2="127" y2="280" stroke="rgba(34,211,238,0.06)" strokeWidth={1} />
      <line x1="273" y1="120" x2="273" y2="280" stroke="rgba(34,211,238,0.06)" strokeWidth={1} />

      {/* Center ring */}
      <circle cx="200" cy="200" r={44} stroke="rgba(34,211,238,0.2)" strokeWidth={1.5} fill="none" />
      <circle cx="200" cy="200" r={16} stroke="rgba(246,183,60,0.25)" strokeWidth={2} fill="none" />

      {/* Corner markers */}
      {[[200,40],[346,120],[346,280],[200,360],[54,280],[54,120]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={3} fill="rgba(34,211,238,0.4)" />
      ))}

      {/* Glow spot in center */}
      <circle cx="200" cy="200" r={60} fill="url(#centerGlow)" opacity={0.3} />

      <defs>
        <radialGradient id="hexBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a1a2e" />
          <stop offset="100%" stopColor="#05070d" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.6)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* --- Battle robot side profile ----------------------------------- */
export function BattleBotSide({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" fill="none" className={className} aria-hidden="true">
      {/* Body / chassis */}
      <rect x={90} y={100} width={220} height={70} rx={12} stroke="rgba(34,211,238,0.5)" strokeWidth={2.5} fill="url(#botBody)" />

      {/* Armor plates */}
      <rect x={100} y={110} width={60} height={50} rx={6} stroke="rgba(246,183,60,0.3)" strokeWidth={1.5} fill="rgba(246,183,60,0.06)" />
      <rect x={170} y={110} width={60} height={50} rx={6} stroke="rgba(34,211,238,0.2)" strokeWidth={1} fill="rgba(34,211,238,0.04)" />
      <rect x={240} y={110} width={60} height={50} rx={6} stroke="rgba(246,183,60,0.3)" strokeWidth={1.5} fill="rgba(246,183,60,0.06)" />

      {/* Weapon module on front */}
      <path d="M310 120 L350 135 L350 155 L310 170 Z" stroke="rgba(249,115,22,0.6)" strokeWidth={2} fill="rgba(249,115,22,0.08)" />
      <path d="M350 140 L380 135 L380 155 L350 150 Z" stroke="rgba(249,115,22,0.5)" strokeWidth={1.5} fill="rgba(249,115,22,0.06)" />

      {/* Wheels (3 pairs) */}
      {[120, 180, 250].map((x, i) => (
        <g key={i}>
          <rect x={x - 6} y={150} width={12} height={32} rx={4} stroke="rgba(125,211,252,0.3)" strokeWidth={1.5} fill="rgba(125,211,252,0.06)" />
          <rect x={x - 2} y={158} width={4} height={16} rx={2} fill="rgba(34,211,238,0.15)" />
        </g>
      ))}

      {/* Top turret / dome */}
      <ellipse cx={200} cy={95} rx={36} ry={14} stroke="rgba(34,211,238,0.3)" strokeWidth={1.5} fill="rgba(34,211,238,0.04)" />
      <line x1={200} y1={81} x2={200} y2={95} stroke="rgba(34,211,238,0.2)" strokeWidth={1} />

      {/* Ground line */}
      <line x1={60} y1={260} x2={340} y2={260} stroke="rgba(34,211,238,0.08)" strokeWidth={1} strokeDasharray="4 4" />

      {/* Speed lines */}
      <line x1={30} y1={140} x2={62} y2={140} stroke="rgba(34,211,238,0.15)" strokeWidth={1} />
      <line x1={18} y1={155} x2={62} y2={155} stroke="rgba(34,211,238,0.1)" strokeWidth={1} />
      <line x1={36} y1={170} x2={62} y2={170} stroke="rgba(34,211,238,0.15)" strokeWidth={1} />

      <defs>
        <linearGradient id="botBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(16,29,50,0.7)" />
          <stop offset="100%" stopColor="rgba(7,17,31,0.9)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* --- Club emblem / shield ---------------------------------------- */
export function ClubEmblem({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 360" fill="none" className={className} aria-hidden="true">
      {/* Shield shape */}
      <path
        d="M160 30 L290 80 L290 200 C290 270 240 310 160 340 C80 310 30 270 30 200 L30 80 Z"
        stroke="rgba(246,183,60,0.35)"
        strokeWidth={2.5}
        fill="url(#shieldGrad)"
      />

      {/* Inner border */}
      <path
        d="M160 50 L270 92 L270 195 C270 255 225 290 160 318 C95 290 50 255 50 195 L50 92 Z"
        stroke="rgba(34,211,238,0.15)"
        strokeWidth={1}
        fill="none"
      />

      {/* Central gear icon */}
      <circle cx={160} cy={170} r={40} stroke="rgba(34,211,238,0.3)" strokeWidth={2} fill="none" />
      {[0,45,90,135].map((angle,i) => (
        <rect
          key={i}
          x={156} y={124} width={8} height={20} rx={2}
          fill="rgba(34,211,238,0.15)"
          transform={`rotate(${angle} 160 170)`}
        />
      ))}
      {[22,67,112,157].map((angle,i) => (
        <rect
          key={i + 4}
          x={156} y={124} width={8} height={18} rx={2}
          fill="rgba(34,211,238,0.08)"
          transform={`rotate(${angle} 160 170)`}
        />
      ))}

      {/* Center rivet */}
      <circle cx={160} cy={170} r={8} stroke="rgba(246,183,60,0.25)" strokeWidth={1.5} fill="rgba(246,183,60,0.06)" />
      <circle cx={160} cy={170} r={3} fill="rgba(246,183,60,0.3)" />

      {/* Bottom text area */}
      <path d="M100 280 Q160 300 220 280" stroke="rgba(246,183,60,0.2)" strokeWidth={1} fill="none" />

      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(16,29,50,0.5)" />
          <stop offset="100%" stopColor="rgba(7,17,31,0.7)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* --- Trophy / medal ---------------------------------------------- */
export function TrophyIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 320" fill="none" className={className} aria-hidden="true">
      {/* Cup body */}
      <path
        d="M80 80 L60 40 C50 20 60 10 80 10 L160 10 C180 10 190 20 180 40 L160 80"
        stroke="rgba(246,183,60,0.4)"
        strokeWidth={2.5}
        fill="url(#cupGrad)"
      />

      {/* Cup bowl */}
      <path
        d="M60 40 L180 40 L170 100 C170 140 130 160 120 170 C110 160 70 140 70 100 Z"
        stroke="rgba(246,183,60,0.35)"
        strokeWidth={2}
        fill="rgba(246,183,60,0.04)"
      />

      {/* Handles */}
      <path d="M60 60 Q20 60 30 90 Q40 120 70 100" stroke="rgba(246,183,60,0.25)" strokeWidth={2} fill="none" />
      <path d="M180 60 Q220 60 210 90 Q200 120 170 100" stroke="rgba(246,183,60,0.25)" strokeWidth={2} fill="none" />

      {/* Star on cup */}
      <polygon
        points="120,80 126,96 144,96 130,108 136,126 120,116 104,126 110,108 96,96 114,96"
        fill="rgba(246,183,60,0.2)"
        stroke="rgba(246,183,60,0.3)"
        strokeWidth={1}
      />

      {/* Base */}
      <rect x={100} y={170} width={40} height={12} rx={3} stroke="rgba(246,183,60,0.25)" strokeWidth={1.5} fill="rgba(246,183,60,0.04)" />
      <rect x={85} y={182} width={70} height={8} rx={3} stroke="rgba(246,183,60,0.2)" strokeWidth={1} fill="none" />

      {/* Pedestal lines */}
      <line x1={120} y1={190} x2={120} y2={210} stroke="rgba(246,183,60,0.1)" strokeWidth={1} />

      <defs>
        <linearGradient id="cupGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(246,183,60,0.2)" />
          <stop offset="100%" stopColor="rgba(246,183,60,0.02)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* --- Weapon modules collage -------------------------------------- */
export function WeaponCollage({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" fill="none" className={className} aria-hidden="true">
      {/* Flipper arm */}
      <g transform="translate(40,60)">
        <rect x={0} y={20} width={80} height={12} rx={4} stroke="rgba(34,211,238,0.4)" strokeWidth={1.5} fill="rgba(34,211,238,0.04)" />
        <path d="M80 14 L110 0 L110 52 L80 38 Z" stroke="rgba(34,211,238,0.35)" strokeWidth={1.5} fill="rgba(34,211,238,0.04)" />
        <circle cx={8} cy={26} r={6} stroke="rgba(34,211,238,0.2)" strokeWidth={1} fill="none" />
      </g>

      {/* Wedge / ram plate */}
      <g transform="translate(180,80)">
        <polygon points="0,40 60,40 80,0 20,0" stroke="rgba(249,115,22,0.4)" strokeWidth={1.5} fill="rgba(249,115,22,0.04)" />
        <line x1={40} y1={0} x2={40} y2={40} stroke="rgba(249,115,22,0.15)" strokeWidth={1} />
      </g>

      {/* Armor plate */}
      <g transform="translate(290,70)">
        <rect x={0} y={0} width={70} height={50} rx={6} stroke="rgba(125,211,252,0.35)" strokeWidth={1.5} fill="rgba(125,211,252,0.03)" />
        {[14, 28, 42, 56].map((x, i) => (
          <circle key={i} cx={x} cy={14} r={2.5} fill="rgba(125,211,252,0.15)" />
        ))}
        {[14, 28, 42, 56].map((x, i) => (
          <circle key={i + 4} cx={x} cy={36} r={2.5} fill="rgba(125,211,252,0.1)" />
        ))}
      </g>

      {/* Speed / impact marks */}
      <line x1={240} y1={50} x2={260} y2={50} stroke="rgba(34,211,238,0.1)" strokeWidth={1} />
      <line x1={230} y1={60} x2={265} y2={60} stroke="rgba(34,211,238,0.08)" strokeWidth={1} />
    </svg>
  );
}

/* --- Front-facing robot head (for hero sections) ----------------- */
export function RobotHeadFront({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 340" fill="none" className={className} aria-hidden="true">
      {/* Head shape */}
      <rect x={40} y={30} width={200} height={180} rx={24} stroke="rgba(34,211,238,0.35)" strokeWidth={2.5} fill="url(#headGrad)" />

      {/* Visor / eyes */}
      <rect x={65} y={80} width={70} height={42} rx={12} stroke="rgba(34,211,238,0.4)" strokeWidth={2} fill="rgba(34,211,238,0.04)" />
      <rect x={145} y={80} width={70} height={42} rx={12} stroke="rgba(34,211,238,0.4)" strokeWidth={2} fill="rgba(34,211,238,0.04)" />
      <rect x={80} y={94} width={40} height={14} rx={4} fill="rgba(34,211,238,0.15)" />
      <rect x={160} y={94} width={40} height={14} rx={4} fill="rgba(34,211,238,0.15)" />

      {/* Visor glow */}
      <rect x={70} y={86} width={60} height={30} rx={8} fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.1)" strokeWidth={1} />
      <rect x={150} y={86} width={60} height={30} rx={8} fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.1)" strokeWidth={1} />

      {/* Mouth / vent */}
      <rect x={90} y={150} width={100} height={14} rx={4} stroke="rgba(34,211,238,0.15)" strokeWidth={1} fill="rgba(34,211,238,0.02)" />
      <line x1={110} y1={155} x2={170} y2={155} stroke="rgba(34,211,238,0.08)" strokeWidth={1} />

      {/* Antenna */}
      <rect x={132} y={8} width={16} height={22} rx={4} stroke="rgba(246,183,60,0.3)" strokeWidth={1.5} fill="rgba(246,183,60,0.04)" />
      <circle cx={140} cy={8} r={5} stroke="rgba(246,183,60,0.3)" strokeWidth={1.5} fill="rgba(246,183,60,0.06)" />
      <circle cx={140} cy={8} r={2} fill="rgba(246,183,60,0.2)" />

      {/* Ear panels */}
      <rect x={16} y={60} width={24} height={60} rx={6} stroke="rgba(34,211,238,0.2)" strokeWidth={1.5} fill="rgba(34,211,238,0.02)" />
      <rect x={240} y={60} width={24} height={60} rx={6} stroke="rgba(34,211,238,0.2)" strokeWidth={1.5} fill="rgba(34,211,238,0.02)" />

      {/* Neck connector */}
      <rect x={100} y={210} width={80} height={30} rx={6} stroke="rgba(34,211,238,0.15)" strokeWidth={1.5} fill="rgba(34,211,238,0.02)" />
      {[120, 140, 160].map((x, i) => (
        <circle key={i} cx={x} cy={225} r={3} fill="rgba(34,211,238,0.08)" />
      ))}

      <defs>
        <linearGradient id="headGrad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(16,29,50,0.5)" />
          <stop offset="100%" stopColor="rgba(7,17,31,0.7)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* --- Small arena indicator (for cards) --------------------------- */
export function MiniArena({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <rect width={120} height={120} rx={12} fill="rgba(7,17,31,0.5)" stroke="rgba(34,211,238,0.15)" strokeWidth={1} />
      <polygon points="60,16 96,38 96,82 60,104 24,82 24,38" stroke="rgba(34,211,238,0.25)" strokeWidth={1.5} fill="rgba(34,211,238,0.03)" />
      <circle cx={60} cy={60} r={16} stroke="rgba(246,183,60,0.15)" strokeWidth={1} fill="none" />
      <circle cx={60} cy={60} r={6} stroke="rgba(246,183,60,0.2)" strokeWidth={1} fill="none" />
      {/* Corner dots */}
      {[[60,16],[96,38],[96,82],[60,104],[24,82],[24,38]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={2} fill="rgba(34,211,238,0.2)" />
      ))}
    </svg>
  );
}