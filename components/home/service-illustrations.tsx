'use client';

import { motion } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

/* Each illustration is a unique animated SVG representing the actual workflow */

/* Paralegal Support — Document review workspace */
export function ParalegalArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="pa-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* desk surface */}
      <rect x="40" y="220" width="320" height="60" rx="8" fill="#F2F0EA" />
      {/* main document */}
      <motion.g
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <rect x="120" y="60" width="160" height="170" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="138" y="80" width="80" height="8" rx="4" fill="#081522" opacity="0.08" />
        <motion.line x1="138" y1="104" x2="262" y2="104" stroke="#CBD5E1" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} />
        <motion.line x1="138" y1="120" x2="240" y2="120" stroke="#CBD5E1" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} />
        <motion.line x1="138" y1="136" x2="252" y2="136" stroke="#CBD5E1" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
        <motion.line x1="138" y1="152" x2="220" y2="152" stroke="#CBD5E1" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }} />
        {/* review checkmark */}
        <motion.circle cx="248" cy="196" r="16" fill="none" stroke="url(#pa-grad)" strokeWidth="2"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring', stiffness: 200 }} />
        <motion.path d="M241 196 l5 5 l9 -10" stroke="url(#pa-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.4 }} />
      </motion.g>
      {/* secondary stacked docs */}
      <motion.rect x="80" y="100" width="40" height="130" rx="6" fill="white" stroke="#E5E7EB"
        initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
      <motion.rect x="290" y="90" width="40" height="140" rx="6" fill="white" stroke="#E5E7EB"
        initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
      {/* cursor */}
      <motion.g
        animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M200 180 l0 14 l4 -4 l3 7 l3 -1 l-3 -7 l5 0 z" fill="url(#pa-grad)" />
      </motion.g>
    </svg>
  );
}

/* Docketing — Interactive calendar with moving deadlines */
export function DocketingArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="do-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <motion.rect x="60" y="40" width="280" height="220" rx="14" fill="white" stroke="#E5E7EB" strokeWidth="1.5"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
      {/* header */}
      <rect x="60" y="40" width="280" height="40" rx="14" fill="#F8F7F4" />
      <rect x="60" y="66" width="280" height="14" fill="#F8F7F4" />
      <text x="200" y="66" textAnchor="middle" fontSize="14" fontWeight="600" fill="#081522" fontFamily="Inter, sans-serif">Deadline Calendar</text>
      {/* day labels */}
      {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
        <text key={i} x={92 + i * 52} y="102" textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="Inter, sans-serif">{d}</text>
      ))}
      {/* grid cells */}
      {Array.from({ length: 15 }).map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const x = 78 + col * 52;
        const y = 114 + row * 44;
        const isDeadline = i === 4 || i === 8 || i === 13;
        return (
          <motion.rect
            key={i}
            x={x} y={y} width="40" height="36" rx="6"
            fill={isDeadline ? 'url(#do-grad)' : '#F2F0EA'}
            opacity={isDeadline ? 0.15 : 1}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: isDeadline ? 0.15 : 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          />
        );
      })}
      {/* moving deadline pulse */}
      {[4, 8, 13].map((idx, k) => {
        const col = idx % 5;
        const row = Math.floor(idx / 5);
        const x = 78 + col * 52 + 20;
        const y = 114 + row * 44 + 18;
        return (
          <motion.circle
            key={idx}
            cx={x} cy={y} r="6" fill="url(#do-grad)"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: k * 0.8, ease: 'easeInOut' }}
          />
        );
      })}
      {/* connecting arrow */}
      <motion.path
        d="M172 132 C 180 160, 200 180, 224 186"
        stroke="url(#do-grad)" strokeWidth="1.5" strokeDasharray="3 3" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.6 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }}
      />
    </svg>
  );
}

/* Maintenance & Renewals — Circular renewal workflow */
export function RenewalsArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="re-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2F6BFF" />
        </linearGradient>
      </defs>
      {/* outer ring */}
      <circle cx="200" cy="150" r="90" stroke="#E5E7EB" strokeWidth="10" />
      <motion.circle
        cx="200" cy="150" r="90" stroke="url(#re-grad)" strokeWidth="10" strokeLinecap="round" fill="none"
        strokeDasharray="565" transform="rotate(-90 200 150)"
        initial={{ strokeDashoffset: 565 }} whileInView={{ strokeDashoffset: 140 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: easeOut }}
      />
      {/* rotating dot */}
      <motion.g
        style={{ transformOrigin: '200px 150px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="200" cy="60" r="7" fill="url(#re-grad)" />
      </motion.g>
      {/* center content */}
      <text x="200" y="146" textAnchor="middle" fontSize="32" fontWeight="700" fill="#081522" fontFamily="Cormorant Garamond, serif">75%</text>
      <text x="200" y="168" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="Inter, sans-serif">Renewals on track</text>
      {/* orbiting labels */}
      {['Monitor', 'Remind', 'Pay', 'Confirm'].map((label, i) => {
        const angle = (i * 90 - 45) * (Math.PI / 180);
        const x = 200 + Math.cos(angle) * 110;
        const y = 150 + Math.sin(angle) * 110;
        return (
          <motion.g
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15 }}
          >
            <rect x={x - 34} y={y - 12} width="68" height="24" rx="12" fill="white" stroke="#E5E7EB" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill="#081522" fontFamily="Inter, sans-serif">{label}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* Records Management — Secure database visualization */
export function RecordsArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="rm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* database cylinders */}
      {[0, 1, 2].map((i) => {
        const y = 80 + i * 60;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, ease: easeOut }}
          >
            <ellipse cx="200" cy={y} rx="80" ry="16" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
            <path d={`M120 ${y} v24 a80 16 0 0 0 160 0 v-24`} fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
            <ellipse cx="200" cy={y} rx="80" ry="16" fill="none" stroke="url(#rm-grad)" strokeWidth="1.5" opacity="0.5" />
            {/* data lines */}
            <motion.line x1="140" y1={y + 6} x2="260" y2={y + 6} stroke="#CBD5E1" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.3 }} />
          </motion.g>
        );
      })}
      {/* verification checkmarks */}
      {[80, 140, 200].map((y, i) => (
        <motion.g key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.2, type: 'spring', stiffness: 200 }}
        >
          <circle cx="310" cy={y} r="10" fill="url(#rm-grad)" />
          <path d={`M305 ${y} l3 3 l6 -6`} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      ))}
      {/* shield */}
      <motion.path
        d="M200 30 l14 6 v14 a14 14 0 0 1 -28 0 v-14 z" fill="url(#rm-grad)" opacity="0.15"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: 'spring' }}
      />
    </svg>
  );
}

/* Overflow Support — Workload balancing illustration */
export function OverflowArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="of-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* left bar group (overloaded) */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={70} y={230 - i * 36} width="40" height={28 + i * 6} rx="6"
          fill={i === 3 ? '#FCA5A5' : '#CBD5E1'} opacity={i === 3 ? 0.6 : 0.4}
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
          transition={{ delay: i * 0.1, ease: easeOut }}
          style={{ transformOrigin: '90px 250px' }}
        />
      ))}
      {/* arrow */}
      <motion.path
        d="M140 150 Q 180 120, 220 150" stroke="url(#of-grad)" strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.path d="M214 144 l8 6 l-2 -10 z" fill="url(#of-grad)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
      {/* right bar group (balanced) */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={250} y={230 - i * 22} width="40" height={18 + i * 4} rx="6"
          fill="url(#of-grad)" opacity={0.3 + i * 0.15}
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.8 + i * 0.1, ease: easeOut }}
          style={{ transformOrigin: '270px 250px' }}
        />
      ))}
      {/* labels */}
      <text x="90" y="270" textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="Inter, sans-serif">Before</text>
      <text x="270" y="270" textAnchor="middle" fontSize="10" fill="#081522" fontWeight="600" fontFamily="Inter, sans-serif">After</text>
      {/* floating capacity chip */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="170" y="60" width="60" height="22" rx="11" fill="white" stroke="#E5E7EB" />
        <text x="200" y="75" textAnchor="middle" fontSize="10" fontWeight="600" fill="url(#of-grad)" fontFamily="Inter, sans-serif">+ Capacity</text>
      </motion.g>
    </svg>
  );
}

/* Administrative Support — Document processing workflow */
export function AdministrativeArt() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="ad-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* conveyor belt */}
      <rect x="30" y="200" width="340" height="6" rx="3" fill="#E5E7EB" />
      <motion.rect x="30" y="200" width="340" height="6" rx="3" fill="url(#ad-grad)" opacity="0.3"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ transformOrigin: '30px 203px' }} />
      {/* belt wheels */}
      {[30, 370].map((x) => (
        <circle key={x} cx={x} cy="203" r="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      ))}
      {/* documents moving along belt */}
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: [0, 260, 320], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 1.6, ease: 'easeInOut' }}
        >
          <rect x="60" y="150" width="50" height="50" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
          <line x1="70" y1="165" x2="100" y2="165" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="70" y1="175" x2="95" y2="175" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="70" y1="185" x2="98" y2="185" stroke="#CBD5E1" strokeWidth="2" />
        </motion.g>
      ))}
      {/* processing station */}
      <motion.g
        initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
      >
        <rect x="170" y="80" width="60" height="60" rx="10" fill="white" stroke="url(#ad-grad)" strokeWidth="2" />
        <motion.circle cx="200" cy="110" r="14" fill="none" stroke="url(#ad-grad)" strokeWidth="2"
          animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 110px' }} />
        <path d="M200 96 v6 M200 118 v6 M186 110 h6 M208 110 h6" stroke="url(#ad-grad)" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* output checkmark */}
      <motion.g
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring' }}
      >
        <circle cx="340" cy="150" r="14" fill="url(#ad-grad)" />
        <path d="M334 150 l4 4 l8 -9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </motion.g>
      {/* input label */}
      <text x="60" y="140" fontSize="10" fill="#94A3B8" fontFamily="Inter, sans-serif">Input</text>
      <text x="330" y="135" fontSize="10" fill="#081522" fontWeight="600" fontFamily="Inter, sans-serif">Done</text>
    </svg>
  );
}
