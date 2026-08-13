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
      </defs>
      {/* desk surface isometric */}
      <path d="M60 250 L210 210 L360 250 L210 290 Z" fill="#F2F0EA" />
      {/* monitor */}
      <motion.g initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOut }}>
        <IsoPanel x={120} y={70} w={180} h={120} fill="white" stroke="#E5E7EB" />
        <rect x="132" y="82" width="156" height="96" rx="6" fill="#F8F9FC" />
        {/* doc lines */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line key={i} x1="144" y1={98 + i * 18} x2={276 - i * 12} y2={98 + i * 18} stroke="#CBD5E1" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }} />
        ))}
        <motion.circle cx="262" cy="158" r="11" fill="none" stroke="url(#pa-g)" strokeWidth="2"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, type: 'spring', stiffness: 200 }} />
        <motion.path d="M256 158 l4 4 l8 -8" stroke="url(#pa-g)" strokeWidth="2.2" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.4 }} />
        {/* stand */}
        <path d="M200 190 L200 210 M180 210 L220 210" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* floating docs */}
      <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <IsoPanel x={60} y={120} w={44} h={58} fill="white" stroke="#E5E7EB" />
        <line x1="70" y1="134" x2="94" y2="134" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="70" y1="144" x2="90" y2="144" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="66" y="150" width="14" height="10" rx="2" fill="url(#pa-g)" opacity="0.3" />
      </motion.g>
      <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
        <IsoPanel x={320} y={110} w={44} h={58} fill="white" stroke="#E5E7EB" />
        <line x1="330" y1="124" x2="354" y2="124" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="330" y1="134" x2="350" y2="134" stroke="#CBD5E1" strokeWidth="2" />
        <circle cx="340" cy="150" r="5" fill="url(#pa-g)" opacity="0.4" />
      </motion.g>
      {/* glow */}
      <circle cx="210" cy="130" r="70" fill="url(#pa-g)" opacity="0.06" />
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
        {/* header */}
        <rect x="80" y="50" width="260" height="40" rx="10" fill="#F8F9FC" />
        <rect x="80" y="78" width="260" height="12" fill="#F8F9FC" />
        <text x="210" y="76" textAnchor="middle" fontSize="13" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Deadline Calendar</text>
        {/* day labels */}
        {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
          <text key={i} x={108 + i * 48} y="112" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="Manrope, sans-serif">{d}</text>
        ))}
        {/* cells */}
        {Array.from({ length: 15 }).map((_, i) => {
          const col = i % 5, row = Math.floor(i / 5);
          const x = 96 + col * 48, y = 122 + row * 40;
          const isDeadline = i === 3 || i === 8 || i === 11;
          return (
            <motion.rect key={i} x={x} y={y} width="36" height="32" rx="6"
              fill={isDeadline ? 'url(#do-g)' : '#F2F0EA'} opacity={isDeadline ? 0.16 : 1}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: isDeadline ? 0.16 : 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} />
          );
        })}
        {/* deadline pulses */}
        {[3, 8, 11].map((idx, k) => {
          const col = idx % 5, row = Math.floor(idx / 5);
          const cx = 96 + col * 48 + 18, cy = 122 + row * 40 + 16;
          return (
            <motion.circle key={idx} cx={cx} cy={cy} r="5" fill="url(#do-g)"
              animate={{ scale: [1, 1.7, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: k * 0.7, ease: 'easeInOut' }} />
          );
        })}
        {/* connecting dashed line */}
        <motion.path d="M150 138 C 170 168, 200 188, 228 198" stroke="url(#do-g)" strokeWidth="1.4" strokeDasharray="3 3" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 1 }} />
      </motion.g>
      {/* floating reminder chip */}
      <motion.g animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="320" y="30" width="76" height="26" rx="13" fill="white" stroke="#E5E7EB" />
        <circle cx="334" cy="43" r="4" fill="url(#do-g)" />
        <text x="346" y="47" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Reminder</text>
      </motion.g>
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
      <circle cx="210" cy="150" r="92" stroke="#E5E7EB" strokeWidth="10" />
      <motion.circle cx="210" cy="150" r="92" stroke="url(#re-g)" strokeWidth="10" strokeLinecap="round" fill="none"
        strokeDasharray="578" transform="rotate(-90 210 150)"
        initial={{ strokeDashoffset: 578 }} whileInView={{ strokeDashoffset: 145 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: easeOut }} />
      {/* rotating node */}
      <motion.g style={{ transformOrigin: '210px 150px' }} animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
        <circle cx="210" cy="58" r="7" fill="url(#re-g)" />
      </motion.g>
      {/* center */}
      <text x="210" y="146" textAnchor="middle" fontSize="30" fontWeight="700" fill="#081522" fontFamily="Instrument Serif, serif">75%</text>
      <text x="210" y="168" textAnchor="middle" fontSize="10" fill="#6B7280" fontFamily="Manrope, sans-serif">on track</text>
      {/* orbit labels */}
      {['Monitor', 'Remind', 'Pay', 'Confirm'].map((label, i) => {
        const angle = (i * 90 - 45) * (Math.PI / 180);
        const x = 210 + Math.cos(angle) * 116, y = 150 + Math.sin(angle) * 116;
        return (
          <motion.g key={label} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.14 }}>
            <rect x={x - 36} y={y - 13} width="72" height="26" rx="13" fill="white" stroke="#E5E7EB" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">{label}</text>
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
      {/* conveyor */}
      <rect x="40" y="210" width="340" height="6" rx="3" fill="#E5E7EB" />
      <motion.rect x="40" y="210" width="340" height="6" rx="3" fill="url(#ad-g)" opacity="0.3"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ transformOrigin: '40px 213px' }} />
      <circle cx="40" cy="213" r="9" fill="white" stroke="#E5E7EB" />
      <circle cx="380" cy="213" r="9" fill="white" stroke="#E5E7EB" />
      {/* moving docs */}
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: [0, 250, 320], opacity: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: 'easeInOut' }}>
          <rect x="70" y="158" width="48" height="50" rx="7" fill="white" stroke="#E5E7EB" strokeWidth="1.2" />
          <line x1="80" y1="172" x2="108" y2="172" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="80" y1="182" x2="104" y2="182" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="80" y1="192" x2="106" y2="192" stroke="#CBD5E1" strokeWidth="2" />
        </motion.g>
      ))}
      {/* processing station */}
      <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        <rect x="176" y="86" width="56" height="56" rx="10" fill="white" stroke="url(#ad-g)" strokeWidth="2" />
        <motion.circle cx="204" cy="114" r="13" fill="none" stroke="url(#ad-g)" strokeWidth="2"
          animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '204px 114px' }} />
        <path d="M204 101 v6 M204 121 v6 M191 114 h6 M211 114 h6" stroke="url(#ad-g)" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* output check */}
      <motion.g initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring' }}>
        <circle cx="350" cy="156" r="13" fill="url(#ad-g)" />
        <path d="M344 156 l4 4 l8 -9" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
      <text x="70" y="148" fontSize="9" fill="#94A3B8" fontFamily="Manrope, sans-serif">Input</text>
      <text x="346" y="142" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Done</text>
    </svg>
  );
}

/* Records — secure cloud database */
export function RecordsIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="rm-g" from="#4F46E5" to="#06B6D4" />
      </defs>
      {/* cloud */}
      <motion.path d="M150 80 a34 34 0 0 1 60 -14 a28 28 0 0 1 50 12 a24 24 0 0 1 -6 46 H150 a26 26 0 0 1 -6 -44 z"
        fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        initial={{ opacity: 0, y: -12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      {/* database cylinders */}
      {[0, 1, 2].map((i) => {
        const y = 130 + i * 52;
        return (
          <motion.g key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, ease: easeOut }}>
            <ellipse cx="210" cy={y} rx="78" ry="15" fill="white" stroke="#E5E7EB" strokeWidth="1.2" />
            <path d={`M132 ${y} v22 a78 15 0 0 0 156 0 v-22`} fill="white" stroke="#E5E7EB" strokeWidth="1.2" />
            <ellipse cx="210" cy={y} rx="78" ry="15" fill="none" stroke="url(#rm-g)" strokeWidth="1.2" opacity="0.5" />
            <motion.line x1="152" y1={y + 5} x2="268" y2={y + 5} stroke="#CBD5E1" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.3 }} />
          </motion.g>
        );
      })}
      {/* verification checks */}
      {[130, 182, 234].map((y, i) => (
        <motion.g key={i} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.2, type: 'spring', stiffness: 200 }}>
          <circle cx="316" cy={y} r="10" fill="url(#rm-g)" />
          <path d={`M311 ${y} l3 3 l6 -6`} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      ))}
      {/* sync arrows */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '210px 80px' }}>
        <path d="M210 56 a24 24 0 1 1 -22 14" fill="none" stroke="url(#rm-g)" strokeWidth="2" strokeLinecap="round" />
        <path d="M188 70 l0 -8 l8 0" fill="none" stroke="url(#rm-g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

/* Overflow — collaborative operations dashboard */
export function OverflowIso() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" fill="none">
      <defs>
        <G id="of-g" from="#2F6BFF" to="#10B981" />
      </defs>
      {/* dashboard panel */}
      <motion.g initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOut }}>
        <IsoPanel x={70} y={50} w={280} h={200} fill="white" stroke="#E5E7EB" />
        <rect x="70" y="50" width="280" height="34" rx="10" fill="#F8F9FC" />
        <rect x="70" y="76" width="280" height="8" fill="#F8F9FC" />
        <text x="210" y="72" textAnchor="middle" fontSize="12" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">Workload Distribution</text>
        {/* bars before */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect key={i} x={100 + i * 28} y={200 - i * 16} width="20" height={28 + i * 16} rx="5"
            fill={i === 3 ? '#FCA5A5' : '#CBD5E1'} opacity={i === 3 ? 0.6 : 0.4}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, ease: easeOut }} style={{ transformOrigin: `${110 + i * 28}px 228px` }} />
        ))}
        {/* divider */}
        <line x1="210" y1="100" x2="210" y2="230" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
        {/* bars after */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect key={i} x={240 + i * 26} y={208 - i * 12} width="18" height={20 + i * 12} rx="5"
            fill="url(#of-g)" opacity={0.3 + i * 0.15}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, ease: easeOut }} style={{ transformOrigin: `${249 + i * 26}px 228px` }} />
        ))}
        <text x="140" y="248" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="Manrope, sans-serif">Before</text>
        <text x="280" y="248" textAnchor="middle" fontSize="9" fontWeight="600" fill="#081522" fontFamily="Manrope, sans-serif">After</text>
      </motion.g>
      {/* capacity chip */}
      <motion.g animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <rect x="170" y="22" width="80" height="24" rx="12" fill="white" stroke="#E5E7EB" />
        <circle cx="184" cy="34" r="4" fill="url(#of-g)" />
        <text x="196" y="38" fontSize="9" fontWeight="600" fill="url(#of-g)" fontFamily="Manrope, sans-serif">+ Capacity</text>
      </motion.g>
    </svg>
  );
}

export const serviceIllustrations = [
  ParalegalIso,
  DocketingIso,
  RenewalsIso,
  AdministrativeIso,
  RecordsIso,
  OverflowIso,
];
