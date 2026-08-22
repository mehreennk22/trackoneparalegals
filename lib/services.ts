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
  title: 'Paralegal Services',
  short:
    'Flexible paralegal support tiers — from 10 to 40 hours a week, starting at $1,000/month.',
  icon: FileCheck2,
  category: 'Paralegal Support',
  description:
    'Trained IP paralegals available across three flexible packages, starting at $1,000/month — so you can match support to your firm\u2019s exact workload without the cost of recruiting in-house.',
  benefits: [
    'Flex Support — up to 10 hrs/week: filing, docketing and forms & correspondence support',
    'Core Support — 25 hrs/week: USPTO and PCT filing support, docket management, client communications and weekly status updates',
    'Dedicated Support — 40 hrs/week: full coverage from filing to case management with a dedicated paralegal assigned to your firm',
    'No recruitment, onboarding or long-term commitments',
  ],
  deliverables: [
    'USPTO and PCT filing preparation and follow-up',
    'Docket management and tracking',
    'Client correspondence and communications',
    'Weekly or scheduled status reporting',
  ],
},
  {
  slug: 'docketing',
  title: 'Docketing Services',
  short: 'Reliable paralegal capacity without hiring full-time staff.',
  icon: CalendarClock,
  category: 'Deadlines & Records',
  description:
    'Precise, reliable docketing support across three flexible packages, starting at $1,500/month — matched to the size of your matter portfolio.',
  benefits: [
    'Docket Lite — management of up to 50 matters, with docketing, tracking, weekly reports and daily deadline reminders',
    'Docket Pro — management of up to 150 matters, with docketing, tracking, weekly reports and daily deadline reminders',
    'Docket Plus — unlimited matters, with docketing, tracking, weekly reports, daily deadline reminders and customized reports for different clients',
    'Reliable paralegal capacity without hiring full-time staff',
  ],
  deliverables: [
    'Docketing and tracking of all deadlines',
    'Weekly docket reports',
    'Daily reminders for hard deadlines',
    'Customized client reporting (Docket Plus)',
  ],
},
  {
  slug: 'renewals',
  title: 'Maintenance',
  short: 'Patent maintenance monitoring and payment administration, starting at $500/month.',
  icon: RefreshCw,
  category: 'Deadlines & Records',
  description:
    'Maintenance support starting at $500/month or $5,000/year, covering anywhere from 15 to 150+ patents in your portfolio.',
  benefits: [
    'Coverage from 15 to 150+ patents',
    'Ongoing monitoring and payment administration',
    'Quarterly reports on portfolio status',
    'Flexible monthly or annual pricing',
  ],
  deliverables: [
    'Maintenance fee monitoring',
    'Payment administration',
    'Quarterly status reports',
    'Portfolio coverage tracking',
  ],
},
  {
  slug: 'administrative',
  title: 'Administrative',
  short: 'Cross-department administrative support, starting at $500/month.',
  icon: FolderKanban,
  category: 'Administrative Support',
  description:
    'Administrative support starting at $500/month or $5,000/year, covering all departments with regular reporting and rapid response for urgent filings.',
  benefits: [
    'Support across all departments',
    'Regular reporting cadence',
    'Support for last-minute and exigent filings',
    'Flexible monthly or annual pricing',
  ],
  deliverables: [
    'Cross-department administrative coverage',
    'Regular status reports',
    'Urgent and exigent filing support',
    'Responsive turnaround on time-sensitive requests',
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
  title: 'Overflow',
  short: 'Short-term, task-based overflow support, starting at $500/month.',
  icon: Layers,
  category: 'Flexible Capacity',
  description:
    'Overflow support starting at $500/month or $5,000/year — short-term, task-based engagements across all departments for when workload spikes.',
  benefits: [
    'Short-term, task-based engagement',
    'Support across all departments',
    'Includes IDS backlogs, assignment recordation and file clean-ups',
    'Flexible monthly or annual pricing',
  ],
  deliverables: [
    'IDS backlog clearance',
    'Assignment recordation',
    'File clean-up and organization',
    'Cross-department task support',
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
