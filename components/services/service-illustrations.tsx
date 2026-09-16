'use client';

import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

const G = ({ id, from, to }: { id: string; from: string; to: string }) => (
  <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor={from} />
    <stop offset="100%" stopColor={to} />
  </linearGradient>
);

/* Shared isometric helpers */
function IsoPanel({ x, y, w, h, fill, stroke }: { x: number; y: number; w: number; h: number; fill: string; stroke?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} stroke={stroke} strokeWidth={stroke ? 1.2 : 0} />;
}

/* Paralegal Support — workspace reviewing patent/trademark docs */
export function ParalegalIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="pa-g" from="#2F6BFF" to="#4F46E5" />
        <G id="pa-g-warm" from="#06B6D4" to="#2F6BFF" />
      </defs>
      <path d="M60 250 L210 210 L360 250 L210 290 Z" fill="#F4EFE6" />
      <ellipse cx="210" cy="232" rx="88" ry="14" fill="#081522" opacity="0.05" />
      <motion.g initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOut }}>
        <IsoPanel x={120} y={70} w={180} h={120} fill="white" stroke="#E5E7EB" />
        <rect x="120" y="70" width="180" height="16" rx="8" fill="url(#pa-g)" opacity="0.9" />
        <circle cx="132" cy="78" r="2.5" fill="white" opacity="0.8" />
        <circle cx="140" cy="78" r="2.5" fill="white" opacity="0.5" />
        <rect x="132" y="94" width="156" height="84" rx="6" fill="#F8F9FC" />
        {[0, 1, 2, 3].map((i) => (
          <motion.line key={i} x1="144" y1={110 + i * 17} x2={276 - i * 12} y2={110 + i * 17}
            stroke={i === 1 ? '#5EC8FF' : '#CBD5E1'} strokeWidth="2" strokeOpacity={i === 1 ? 0.9 : 1}
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }} />
        ))}
        <motion.circle cx="262" cy="158" r="11" fill="none" stroke="url(#pa-g)" strokeWidth="2"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, type: 'spring', stiffness: 200 }} />
        <motion.path d="M256 158 l4 4 l8 -8" stroke="url(#pa-g)" strokeWidth="2.2" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.4 }} />
        <path d="M200 190 L200 210 M180 210 L220 210" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <IsoPanel x={60} y={120} w={44} h={58} fill="white" stroke="#E5E7EB" />
        <rect x="60" y="120" width="44" height="8" rx="4" fill="url(#pa-g-warm)" />
        <line x1="70" y1="140" x2="94" y2="140" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="70" y1="150" x2="90" y2="150" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="66" y="160" width="14" height="10" rx="2" fill="url(#pa-g-warm)" opacity="0.5" />
      </motion.g>
      <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
        <IsoPanel x={320} y={110} w={44} h={58} fill="white" stroke="#E5E7EB" />
        <rect x="320" y="110" width="44" height="8" rx="4" fill="url(#pa-g)" />
        <line x1="330" y1="130" x2="354" y2="130" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="330" y1="140" x2="350" y2="140" stroke="#CBD5E1" strokeWidth="2" />
        <circle cx="340" cy="156" r="5" fill="url(#pa-g)" opacity="0.6" />
      </motion.g>
      <motion.g initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.3, type: 'spring', stiffness: 220 }}>
        <circle cx="300" cy="82" r="13" fill="#06B6D4" />
        <path d="M294 82 l4 4 l8 -9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
      <circle cx="210" cy="130" r="80" fill="url(#pa-g)" opacity="0.08" />
      <circle cx="300" cy="82" r="40" fill="#06B6D4" opacity="0.06" />
    </svg>
  );
}

/* Docketing — calendar with deadlines */
export function DocketingIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="do-g" from="#2F6BFF" to="#06B6D4" />
      </defs>
      <motion.g initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOut }}>
        <IsoPanel x={80} y={50} w={260} h={200} fill="white" stroke="#E5E7EB" />
        <rect x="80" y="50" width="260" height="40" rx="10" fill="url(#do-g)" opacity="0.95" />
        <circle cx="98" cy="62" r="2.5" fill="white" opacity="0.8" />
        <circle cx="108" cy="62" r="2.5" fill="white" opacity="0.5" />
        <rect x="80" y="78" width="260" height="12" fill="#F8F9FC" />
        <text x="210" y="76" textAnchor="middle" fontSize="13" fontWeight="600" fill="white" fontFamily="Manrope, sans-serif">Deadline Calendar</text>
        {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
          <text key={i} x={108 + i * 48} y="112" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="Manrope, sans-serif">{d}</text>
        ))}
        {Array.from({ length: 15 }).map((_, i) => {
          const col = i % 5, row = Math.floor(i / 5);
          const x = 96 + col * 48, y = 122 + row * 40;
          const isDeadline = i === 3 || i === 8 || i === 11;
          return (
            <motion.rect key={i} x={x} y={y} width="36" height="32" rx="6"
              fill={isDeadline ? 'url(#do-g)' : '#F2F0EA'} opacity={isDeadline ? 0.18 : 1}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: isDeadline ? 0.18 : 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} />
          );
        })}
        {[3, 8, 11].map((idx, k) => {
          const col = idx % 5, row = Math.floor(idx / 5);
          const cx = 96 + col * 48 + 18, cy = 122 + row * 40 + 16;
          return (
            <motion.circle key={idx} cx={cx} cy={cy} r="5" fill="url(#do-g)"
              animate={{ scale: [1, 1.7, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: k * 0.7, ease: 'easeInOut' }} />
          );
        })}
        <motion.path d="M150 138 C 170 168, 200 188, 228 198" stroke="url(#do-g)" strokeWidth="1.4" strokeDasharray="3 3" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 1 }} />
      </motion.g>
      <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="320" y="30" width="76" height="26" rx="13" fill="white" stroke="#E5E7EB" />
        <circle cx="334" cy="43" r="4" fill="url(#do-g)" />
        <text x="346" y="47" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Reminder</text>
      </motion.g>
      <circle cx="210" cy="150" r="90" fill="url(#do-g)" opacity="0.05" />
    </svg>
  );
}

/* Renewals — circular workflow */
export function RenewalsIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="re-g" from="#06B6D4" to="#2F6BFF" />
      </defs>
      <circle cx="210" cy="150" r="96" fill="url(#re-g)" opacity="0.05" />
      <circle cx="210" cy="150" r="92" stroke="#E5E7EB" strokeWidth="10" />
      <motion.circle cx="210" cy="150" r="92" stroke="url(#re-g)" strokeWidth="10" strokeLinecap="round" fill="none"
        strokeDasharray="578" transform="rotate(-90 210 150)"
        initial={{ strokeDashoffset: 578 }} whileInView={{ strokeDashoffset: 145 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: easeOut }} />
      <motion.g style={{ transformOrigin: '210px 150px' }} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
        <circle cx="210" cy="58" r="8" fill="url(#re-g)" />
        <circle cx="210" cy="58" r="3" fill="white" />
      </motion.g>
      <circle cx="210" cy="150" r="58" fill="white" />
      <text x="210" y="146" textAnchor="middle" fontSize="30" fontWeight="700" fill="#2F6BFF" fontFamily="Manrope, sans-serif">75%</text>
      <text x="210" y="168" textAnchor="middle" fontSize="10" fill="#6B7280" fontFamily="Manrope, sans-serif">on track</text>
      {['Monitor', 'Remind', 'Pay', 'Confirm'].map((label, i) => {
        const angle = (i * 90 - 45) * (Math.PI / 180);
        const x = 210 + Math.cos(angle) * 116, y = 150 + Math.sin(angle) * 116;
        return (
          <motion.g key={label} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.14 }}>
            <rect x={x - 36} y={y - 13} width="72" height="26" rx="13" fill="white" stroke="#E5E7EB" />
            <circle cx={x - 24} cy={y} r="3" fill="url(#re-g)" />
            <text x={x + 6} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">{label}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* Administrative — document management workspace */
export function AdministrativeIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="ad-g" from="#2F6BFF" to="#4F46E5" />
      </defs>
      <rect x="40" y="210" width="340" height="6" rx="3" fill="#E5E7EB" />
      <motion.rect x="40" y="210" width="340" height="6" rx="3" fill="url(#ad-g)" opacity="0.35"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ transformOrigin: '40px 213px' }} />
      <circle cx="40" cy="213" r="9" fill="white" stroke="#E5E7EB" />
      <circle cx="380" cy="213" r="9" fill="white" stroke="#E5E7EB" />
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: [0, 250, 320], opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: 'easeInOut' }}>
          <rect x="70" y="158" width="48" height="50" rx="7" fill="white" stroke="#E5E7EB" strokeWidth="1.2" />
          <rect x="70" y="158" width="48" height="8" rx="4" fill="url(#ad-g)" opacity="0.7" />
          <line x1="80" y1="178" x2="108" y2="178" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="80" y1="188" x2="104" y2="188" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="80" y1="198" x2="106" y2="198" stroke="#CBD5E1" strokeWidth="2" />
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        <rect x="176" y="86" width="56" height="56" rx="10" fill="white" stroke="url(#ad-g)" strokeWidth="2" />
        <motion.circle cx="204" cy="114" r="13" fill="none" stroke="url(#ad-g)" strokeWidth="2"
          animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '204px 114px' }} />
        <path d="M204 101 v6 M204 121 v6 M191 114 h6 M211 114 h6" stroke="url(#ad-g)" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring' }}>
        <circle cx="350" cy="156" r="13" fill="url(#ad-g)" />
        <path d="M344 156 l4 4 l8 -9" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
      <text x="70" y="148" fontSize="9" fill="#94A3B8" fontFamily="Manrope, sans-serif">Input</text>
      <text x="346" y="142" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Done</text>
      <circle cx="204" cy="114" r="70" fill="url(#ad-g)" opacity="0.05" />
    </svg>
  );
}

/* Drawings — technical patent drawing being drafted */
export function DrawingsIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="dr-g" from="#2F6BFF" to="#06B6D4" />
      </defs>

      <motion.g initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOut }}>
        <IsoPanel x={70} y={50} w={280} h={200} fill="white" stroke="#E5E7EB" />
        <rect x="70" y="50" width="280" height="34" rx="10" fill="url(#dr-g)" opacity="0.95" />
        <circle cx="88" cy="67" r="2.5" fill="white" opacity="0.8" />
        <circle cx="98" cy="67" r="2.5" fill="white" opacity="0.5" />
        <text x="210" y="72" textAnchor="middle" fontSize="12" fontWeight="600" fill="white" fontFamily="Manrope, sans-serif">Drawing Draft — Fig. 1</text>

        <rect x="86" y="98" width="248" height="136" rx="6" fill="#F8F9FC" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={102 + i * 32} y1="98" x2={102 + i * 32} y2="234" stroke="#E2E8F0" strokeWidth="1" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1="86" y1={112 + i * 28} x2="334" y2={112 + i * 28} stroke="#E2E8F0" strokeWidth="1" />
        ))}

        <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }}>
          <motion.rect x="168" y="128" width="84" height="52" rx="4" fill="none" stroke="url(#dr-g)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.9 }} />
          <motion.circle cx="210" cy="154" r="16" fill="none" stroke="url(#dr-g)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 0.6 }} />
          <motion.path d="M168 128 L142 108 M252 128 L278 108" stroke="url(#dr-g)" strokeWidth="1.4" strokeDasharray="2 2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.5 }} />
        </motion.g>

        {[
          { x: 142, y: 100, num: '10' },
          { x: 278, y: 100, num: '12' },
          { x: 210, y: 200, num: '14' },
        ].map((c, i) => (
          <motion.g key={c.num} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 + i * 0.15, type: 'spring', stiffness: 220 }}>
            <circle cx={c.x} cy={c.y} r="10" fill="white" stroke="url(#dr-g)" strokeWidth="1.4" />
            <text x={c.x} y={c.y + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#2F6BFF" fontFamily="Manrope, sans-serif">{c.num}</text>
          </motion.g>
        ))}
      </motion.g>

      <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="316" y="26" width="86" height="26" rx="13" fill="white" stroke="#E5E7EB" />
        <circle cx="330" cy="39" r="4" fill="url(#dr-g)" />
        <text x="342" y="43" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">USPTO-ready</text>
      </motion.g>

      <circle cx="210" cy="150" r="92" fill="url(#dr-g)" opacity="0.05" />
    </svg>
  );
}

export const serviceIllustrations = [
  ParalegalIso,
  DocketingIso,
  RenewalsIso,
  AdministrativeIso,
  DrawingsIso,
];
