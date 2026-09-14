'use client';

import Link from 'next/link';
import { ArrowUpRight, FileText, ClipboardList, RefreshCw, Settings, Archive, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';

const icons = [FileText, ClipboardList, RefreshCw, Settings, Archive, Users];

export function ServicesEditorial() {
  return (
    <section className="relative bg-canvas-alt py-24 sm:py-32">
      <div className="container-px">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Five Ways We Take
                <br className="hidden sm:block" /> Work Off Your Desk
              </>
            }
            description="Support scoped around your workflows - from a single recurring task to a dedicated outsourced team."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-400"
          >
            <span className="link-underline">All services</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
  {services.map((s, i) => {
    const Icon = icons[i];
    const remainder = services.length % 3;
    const isInLastRow = i >= services.length - remainder && remainder !== 0;
    const positionInLastRow = i - (services.length - remainder);
    const centerStart =
      remainder === 1 ? 'lg:col-start-3' : remainder === 2 ? (positionInLastRow === 0 ? 'lg:col-start-2' : 'lg:col-start-4') : '';
    return (
      <Link
        key={s.slug}
        href={`/services#${s.slug}`}
        className={cn(
          'group relative flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-[#0E1830] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-[#111E3B] sm:p-10 lg:col-span-2',
          isInLastRow && centerStart,
        )}
      >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300" />
                </div>

                <div>
                  <h3 className="font-sans text-2xl font-medium tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
                    <span className="link-underline">Learn more</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}