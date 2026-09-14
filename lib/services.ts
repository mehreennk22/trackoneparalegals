import {
  FileCheck2,
  CalendarClock,
  RefreshCw,
  FolderKanban,
  Layers,
  type LucideIcon,
} from 'lucide-react';

export type ServicePackage = {
  title: string;
  details: string[];
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  category: 'Operational Support' | 'Paralegal Support' | 'Administrative Support' | 'Deadlines & Records' | 'Flexible Capacity';
  description: string;
  benefits: string[];
  deliverables: ServicePackage[];
  simpleNote?: string;
};

export const services: Service[] = [
  {
    slug: 'paralegal',
    title: 'Paralegal Services',
    short: 'Flexible paralegal support tiers, starting at $1,000/month.',
    icon: FileCheck2,
    category: 'Paralegal Support',
    description:
      'Trained IP paralegals offering 10–40 hours of support a week, starting at $1,000/month — filing, docketing, reporting and client communications handled inside your existing systems.',
    benefits: [
      '10–40 hours of support',
      'Filing support for US and PCT applications',
      'Docket management and reporting',
      'Client communications',
    ],
    deliverables: [
      {
        title: 'Flex Support',
        details: [
          'Support for up to 10 hours/week',
          'Filing support for US and PCT filings',
          'Docketing and deadline management',
          'Scheduled reporting and docket meetings',
        ],
      },
      {
        title: 'Core Support',
        details: [
          '25 hours/week',
          'USPTO and PCT filing support and follow-up',
          'Docket management',
          'Client communications',
          'Weekly status updates',
        ],
      },
      {
        title: 'Dedicated Support',
        details: [
          '40 hours/week',
          'Full coverage from filing to case management',
          'Dedicated paralegal assigned to your firm',
          'Docket management',
          'Scheduled reporting',
        ],
      },
      {
        title: 'Build Your Own Package',
        details: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
  {
    slug: 'docketing',
    title: 'Docketing Services',
    short: 'Deadline tracking and case management, starting at $1,500/month.',
    icon: CalendarClock,
    category: 'Deadlines & Records',
    description:
      'Docketing support starting at $1,500/month, covering a minimum of 50 cases — deadline tracking, regular reporting and daily reminders to keep your portfolio accurate.',
    benefits: [
      'Case management and file updates starting at a minimum of 50 cases',
      'Docketing and tracking of all deadlines',
      'Regular scheduled docket reports',
      'Daily task reminders',
    ],
    deliverables: [
      {
        title: 'Docket Lite',
        details: [
          'Management of up to 50 matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
        ],
      },
      {
        title: 'Docket Pro',
        details: [
          'Management of up to 150 matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
        ],
      },
      {
        title: 'Docket Plus',
        details: [
          'Unlimited matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
          'Customized reports for different clients',
        ],
      },
      {
        title: 'Build Your Own Package',
        details: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
  {
    slug: 'renewals',
    title: 'Maintenance',
    short: 'Patent maintenance fee monitoring and payment, starting at $500/month.',
    icon: RefreshCw,
    category: 'Deadlines & Records',
    description:
      'Maintenance support starting at $500/month, covering monitoring and payment of maintenance fees for US and foreign patents — with regular reporting on completed and pending deadlines.',
    benefits: [
      'Monitoring and payment of maintenance fees',
      'US and foreign patent maintenance fee assistance',
      'Regular reports of completed and pending deadlines',
    ],
    deliverables: [
      {
        title: 'Portfolio Essential',
        details: [
          'Management of up to 15 patents',
          'Deadline monitoring',
          'Maintenance fee payment',
          'Regular reporting',
        ],
      },
      {
        title: 'Portfolio Professional',
        details: [
          'Management of 16–50 patents',
          'Deadline monitoring + reminders',
          'Fee payment execution',
          'Status confirmations',
          'Quarterly reports',
          'Deadline risk alerts',
        ],
      },
      {
        title: 'Portfolio Enterprise',
        details: [
          '51–150 patents',
          'Priority monitoring & payments',
          'Custom reporting',
          'Audit trail & documentation',
          'Liaison with foreign agents (if needed)',
          'Annual portfolio review call',
        ],
      },
    ],
  },
  {
  slug: 'administrative',
  title: 'Administrative Services',
  short: 'Assignment recordation, IDS services and rush filing support.',
  icon: FolderKanban,
  category: 'Administrative Support',
  description:
    'Administrative support covering assignment collection and recordation, IDS services, general administrative support and rush filings — billed hourly or tailored to your exact needs.',
  benefits: [
    'Assignment collection and recordation',
    'IDS Services',
    'Administrative Support',
    'Rush filings',
  ],
  deliverables: [
    {
      title: 'Hourly Package',
      details: [
        'Customized services on an hourly basis',
      ],
    },
    {
      title: 'Build Your Own Package',
      details: [
        'Send us your needs in an email or schedule a call',
        'Get a quote with services tailored to your needs',
      ],
    },
  ],
},
  {
  slug: 'drawings',
  title: 'Drawings',
  short: 'USPTO compliant patent drawings, with rush service available.',
  icon: Layers,
  category: 'Flexible Capacity',
  description:
    'Drafting utility patent drawings of various complexities. Timely completion of projects and rush projects are also available at rush rates.',
  benefits: [
    'USPTO compliant patent drawings',
    'Rush services available',
    'Typical completion time for regular orders is 5–7 business days',
  ],
  deliverables: [],
  simpleNote: 'Contact us for a quote.',
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
  items: ['Drawings', 'Customised Support Packages'],
},
];