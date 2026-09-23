import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | TrackOne Paralegals',
  description: 'Terms of Use for TrackOne Paralegals.',
};

export default function TermsPage() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            Terms of Use
          </span>
          <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Coming soon
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re finalizing our full Terms of Use. Check back soon.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#0E1830] px-8 py-14 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
            <FileText className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium text-muted-foreground">
            Content not published yet
          </p>
        </div>
      </div>
    </section>
  );
}