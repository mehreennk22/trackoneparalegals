import {
  FileCheck2,
  CalendarClock,
  RefreshCw,
  FolderKanban,
  Database,
  Layers,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  category: 'Operational Support' | 'Paralegal Support' | 'Administrative Support' | 'Deadlines & Records' | 'Flexible Capacity';
  description: string;
  benefits: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: 'paralegal',
    title: 'Paralegal Support',
    short:
      'Trained IP paralegals working inside your systems and processes.',
    icon: FileCheck2,
    category: 'Paralegal Support',
    description:
      'Experienced intellectual property paralegals who integrate directly into your existing workflows, templates and case management systems — delivering consistent, verified work without the overhead of recruitment.',
    benefits: [
      'Work inside your existing systems and templates',
      'Trained on IP procedures and jurisdictional requirements',
      'No recruitment, onboarding or long-term commitments',
      'Consistent execution with documented checklists',
    ],
    deliverables: [
      'Filing preparation and prosecution support',
      'Deadline calculation and docket reconciliation',
      'Correspondence drafting and management',
      'Status reporting at your preferred cadence',
    ],
  },
  {
    slug: 'docketing',
    title: 'Docketing Support',
    short:
      'Deadline calculation, docket management and reconciliation.',
    icon: CalendarClock,
    category: 'Deadlines & Records',
    description:
      'Precise deadline calculation and docket management that keeps your portfolio accurate. We reconcile dockets, calculate statutory and response deadlines, and maintain a clean, dependable record.',
    benefits: [
      'Accurate statutory and response deadline calculation',
      'Reconciliation against official records',
      'Reduced risk of missed deadlines',
      'Clean, auditable docket history',
    ],
    deliverables: [
      'Deadline calculation sheets',
      'Docket reconciliation reports',
      'Weekly docket health summaries',
      'Exception and discrepancy logs',
    ],
  },
  {
    slug: 'renewals',
    title: 'Maintenance & Renewal Fees',
    short: 'Renewal tracking, reminders and payment administration.',
    icon: RefreshCw,
    category: 'Deadlines & Records',
    description:
      'End-to-end renewal tracking and fee administration. We monitor maintenance fee windows, send structured reminders, and administer payments so nothing lapses unnoticed.',
    benefits: [
      'Proactive renewal window monitoring',
      'Structured reminder cadence',
      'Payment administration support',
      'Full visibility on upcoming obligations',
    ],
    deliverables: [
      'Renewal forecast calendars',
      'Reminder notifications and confirmations',
      'Payment instruction summaries',
      'Lapse risk reports',
    ],
  },
  {
    slug: 'administrative',
    title: 'Administrative Support',
    short: 'Documents, correspondence and billing administration.',
    icon: FolderKanban,
    category: 'Administrative Support',
    description:
      'Day-to-day administrative coverage for your IP function — document handling, correspondence management and billing administration handled with the same discipline as your core team.',
    benefits: [
      'Reliable document and correspondence handling',
      'Billing administration aligned to your processes',
      'Frees senior team for higher-value work',
      'Structured handoffs and tracking',
    ],
    deliverables: [
      'Document preparation and filing packs',
      'Correspondence logs and responses',
      'Billing support and invoice reconciliation',
      'Weekly administrative summaries',
    ],
  },
  {
    slug: 'records',
    title: 'Records & Data Management',
    short: 'Portfolio clean-up, migration and verification.',
    icon: Database,
    category: 'Administrative Support',
    description:
      'Keep your portfolio data clean and trustworthy. We handle portfolio clean-up, data migration between systems, and verification against official records to eliminate drift and gaps.',
    benefits: [
      'Eliminate data drift and duplicate records',
      'Smooth migration between systems',
      'Verified, auditable portfolio data',
      'Improved reporting accuracy',
    ],
    deliverables: [
      'Portfolio audit and clean-up reports',
      'Data migration worksheets',
      'Verification against official records',
      'Data quality dashboards',
    ],
  },
  {
    slug: 'overflow',
    title: 'Overflow & Project Support',
    short:
      'Temporary capacity for projects, leave cover and workload peaks.',
    icon: Layers,
    category: 'Flexible Capacity',
    description:
      'Flexible capacity when workloads spike. Whether it is a project, leave cover or a seasonal peak, we provide trained support that ramps up quickly and scales back down when the surge passes.',
    benefits: [
      'Rapid ramp-up for workload peaks',
      'Ideal for leave cover and projects',
      'No permanent headcount commitment',
      'Scoped to your exact requirement',
    ],
    deliverables: [
      'Scoped project plans',
      'Capacity allocation summaries',
      'Progress reports against milestones',
      'Handover documentation on completion',
    ],
  },
];

export const serviceCategories = [
  {
    name: 'Operational Support',
    description:
      'Ongoing operational support that keeps your IP function running smoothly day to day.',
    items: ['Paralegal Support', 'Administrative Support'],
  },
  {
    name: 'Deadlines & Records',
    description:
      'Accuracy where it matters most — deadline integrity and portfolio data you can trust.',
    items: ['Docketing Support', 'Maintenance & Renewal Fees'],
  },
  {
    name: 'Flexible Capacity',
    description:
      'Support that flexes with your workload, from dedicated capacity to short-term project surges.',
    items: ['Records & Data Management', 'Overflow & Project Support', 'Customised Support Packages'],
  },
];
