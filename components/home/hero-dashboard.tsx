const stages = [
  { label: 'Task Received', color: '#94A3B8' },
  { label: 'Docketing', color: '#2F6BFF' },
  { label: 'Review', color: '#4F46E5' },
  { label: 'Renewal', color: '#06B6D4' },
  { label: 'Records Updated', color: '#0EA5E9' },
  { label: 'Completed', color: '#10B981' },
];

/* A single static document chip on the pipeline */
function DocChip() {
  return (
    <div className="absolute left-1/2 top-2 z-20 -translate-x-1/2">
      <div className="flex items-center gap-1.5 rounded-lg border border-ink/8 bg-white px-2.5 py-1.5 shadow-md">
        <span className="h-2 w-2 rounded-sm bg-brand-400" />
        <span className="h-1.5 w-10 rounded-full bg-ink/10" />
      </div>
    </div>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-50 blur-2xl"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(47,107,255,0.22), rgba(79,70,229,0.1) 45%, transparent 70%)',
        }}
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white/80 shadow-[0_40px_100px_-30px_rgba(8,21,34,0.25)] backdrop-blur-xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-teal-500" />
            IP Operations · Live
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">v2.0</span>
        </div>

        {/* Pipeline */}
        <div className="relative px-5 py-6">
          {/* vertical track */}
          <div className="absolute bottom-6 left-[44px] top-6 w-px bg-ink/8" aria-hidden />
          <div className="absolute bottom-6 left-[44px] top-6 w-px origin-top bg-gradient-to-b from-brand-500 via-iris-500 to-teal-500" />

          <div className="relative flex flex-col gap-[26px]">
            {stages.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                {/* node */}
                <div
                  className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white shadow-md"
                  style={{ borderColor: s.color }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
                </div>
                {/* stage row */}
                <div className="flex flex-1 items-center justify-between">
                  <span className="text-[13px] font-semibold text-slate-900">{s.label}</span>
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((b) => (
                      <span
                        key={b}
                        className="h-1.5 w-6 rounded-full"
                        style={{ backgroundColor: s.color, opacity: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating document chip */}
          <div className="pointer-events-none absolute inset-0">
            <DocChip />
          </div>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-px border-t border-ink/8 bg-ink/5 text-center">
          {[
            { v: '24', l: 'In progress' },
            { v: '142', l: 'This week' },
            { v: '0', l: 'Overdue' },
          ].map((stat) => (
            <div key={stat.l} className="bg-white/60 px-3 py-3">
              <div className="font-display text-lg font-semibold text-slate-900">{stat.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating accent badge */}
      <div className="absolute -right-4 -top-4 z-30 flex items-center gap-2 rounded-full bg-brand-500 px-3.5 py-2 text-[11px] font-semibold text-white shadow-xl">
        <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400" />
        Real-time workflow
      </div>
    </div>
  );
}