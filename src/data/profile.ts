// ─────────────────────────────────────────────────────────────
// All portfolio content lives in this file.
// Edit text here; the layout updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jamiu Sanni",
  fullName: "Sanni Jamiu Oladayo",
  role: "Senior mobile & full-stack engineer",
  location: "Lagos, Nigeria",
  availability: "Available now for senior mobile and full-stack roles, remote or Lagos-based.",
  email: "sannioladayo16@gmail.com",
  phone: "+234 803 287 7945",
  phoneHref: "+2348032877945",
  linkedin: "https://www.linkedin.com/in/jamiusanni",
  github: "https://github.com/EmjayTech",
  cv: "/Jamiu-Sanni-CV.pdf",
  // Put a square photo at public/me.jpg and it will show automatically.
  photo: "/me.jpg",
};

export const hero = {
  headline: "I build mobile apps people trust with their money.",
  intro:
    "Senior React Native engineer with 5+ years shipping fintech and edtech products: mobile banking at Stanbic IBTC Bank, payments at ShopPay, and EdMira, the AI learning platform I founded for students across Africa.",
};

export const story = [
  "I'm a mobile engineer who likes the parts of an app that have to be right. Sign-in, payments, balances, the transfer screen that must never show the wrong number. Most of my work over the last five years has lived there, in banking, wallets and e-commerce checkout.",
  "I build mainly in React Native and TypeScript, with Node.js and Firebase behind them. I care about apps that stay fast on a mid-range Android phone with a patchy network, because that's how most people in Nigeria use them. I read crash reports like other people read the news.",
  "I'm also a founder. At EdMira I lead the product and engineering for an AI-powered learning platform on Android, iOS and the web, from system architecture to app store releases to hiring. Building my own company taught me to think past the ticket: what the feature costs, who uses it, and whether it's worth shipping.",
  "And I teach. Through Miratech Institute, Axia Africa and TS Academy I've helped new developers go from their first component to their first job. Explaining my code to beginners keeps it simple enough for teammates too.",
];

export const facts = [
  { value: "5+", label: "years building production web and mobile apps" },
  { value: "30%", label: "fewer payment failures after rebuilding ShopPay's transaction system" },
  { value: "40%", label: "lower server costs through containerisation and autoscaling" },
  { value: "99.9%", label: "uptime while scaling ShopPay past 1,000 users" },
];

export type CaseStudy = {
  id: string;
  org: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  did: string[];
  outcome?: string;
  stack: string[];
  link?: { label: string; href: string };
  note?: string;
};

export const work: CaseStudy[] = [
  {
    id: "stanbic",
    org: "Stanbic IBTC Bank",
    title: "Mobile banking used across Nigeria",
    period: "2025 – 2026",
    role: "Senior Software Engineer (contract)",
    summary:
      "I built and maintained features in the bank's React Native apps for Android and iOS, focused on the parts customers can't afford to have fail: sign-in, payments and transactions.",
    did: [
      "Built secure authentication, payment and transaction flows that meet banking compliance standards.",
      "Integrated backend services and Firebase Authentication so sessions stay consistent across mobile and web.",
      "Tracked down and removed critical crashes, and reworked app architecture for faster, steadier performance.",
      "Reviewed code and took part in system design and sprint planning with a cross-functional team.",
    ],
    stack: ["React Native", "TypeScript", "Firebase Auth", "REST APIs"],
    note: "Screens and code are under NDA, so this one is described rather than shown.",
  },
  {
    id: "edmira",
    org: "EdMira",
    title: "An AI study platform for students across Africa",
    period: "2025 – present",
    role: "Founder & CTO",
    summary:
      "A mobile and web learning platform for university students in Nigeria and across Africa, with AI-powered quizzes, real-time sync and a subscription model. Live on Android and iOS.",
    did: [
      "Designed the architecture: React Native client, Node.js and MongoDB services, and Firebase for auth, real-time sync, storage, cloud functions and notifications.",
      "Built the AI-driven quiz features at the centre of the study experience.",
      "Integrated in-app payments to support a subscription model.",
      "Lead a team of developers, designers and content creators, and shipped to both app stores.",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Firebase", "AI"],
  },
  {
    id: "shoppay",
    org: "ShopPay",
    title: "E-commerce with its own payments stack",
    period: "2023 – 2025",
    role: "Chief Technology Officer",
    summary:
      "I led engineering for a fintech-backed marketplace, from cloud infrastructure to the mobile app customers bought from.",
    did: [
      "Rebuilt the transaction system with fraud detection, following PCI-DSS requirements.",
      "Moved services to Docker and Kubernetes on AWS with automated scaling.",
      "Shipped a React Native shopping app with AI-driven product recommendations.",
    ],
    outcome:
      "Payment failures dropped 30%, server costs fell 40%, sales rose 25%, and the platform held 99.9% uptime while growing past 1,000 users.",
    stack: ["React Native", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    id: "automation",
    org: "Automation Hub",
    title: "Event registration that runs itself",
    period: "Personal project",
    role: "Designer & builder",
    summary:
      "Event registration usually means checking payments and emailing tickets by hand. I built an n8n workflow that handles the whole journey from sign-up to QR ticket.",
    did: [
      "Verifies payments and manages separate capacity for physical and virtual attendees.",
      "Generates tickets and QR codes, updates Google Sheets and files records in Google Drive.",
      "Sends confirmation and status emails through Gmail without anyone touching them.",
    ],
    stack: ["n8n", "Webhooks", "Google Sheets", "Gmail", "QR codes"],
  },
];

export type Role = { period: string; title: string; org: string; detail: string };

export const timeline: Role[] = [
  {
    period: "2025 – 2026",
    title: "Senior Software Engineer",
    org: "Stanbic IBTC Bank",
    detail: "Built React Native banking features: auth, payments, transactions.",
  },
  {
    period: "2025 – now",
    title: "Founder & CTO",
    org: "EdMira",
    detail: "Leading product and engineering for an AI learning platform.",
  },
  {
    period: "May – Aug 2026",
    title: "Student Moderator, AI & Automation",
    org: "TS Academy",
    detail: "Supported a cohort working with n8n, Make, Zapier, AI agents and RAG.",
  },
  {
    period: "2025",
    title: "Mobile Development Mentor",
    org: "Axia Africa",
    detail: "Taught React Native, ran live coding sessions and code reviews.",
  },
  {
    period: "2023 – 2025",
    title: "Chief Technology Officer",
    org: "ShopPay",
    detail: "Led engineering for an e-commerce and payments platform.",
  },
  {
    period: "2023 – 2025",
    title: "Senior Developer & Tech Educator",
    org: "dervacHUB",
    detail: "Built web apps for secondary schools and ran coding bootcamps.",
  },
];

export const skills = [
  {
    area: "Mobile",
    items: ["React Native", "Expo", "Android & iOS", "App Store & Play Store releases", "Performance & crash debugging"],
  },
  {
    area: "Web & backend",
    items: ["React", "TypeScript", "Node.js", "REST API design", "Microservices"],
  },
  {
    area: "Data & cloud",
    items: ["Firebase", "MongoDB", "PostgreSQL", "MySQL", "AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    area: "Payments",
    items: ["Payment gateway integration", "Wallet services", "PCI-DSS", "Fraud detection"],
  },
  {
    area: "AI & automation",
    items: ["n8n", "Make", "Zapier", "AI agents", "RAG workflows", "Vapi", "Twilio", "Voiceflow"],
  },
  {
    area: "Ways of working",
    items: ["Agile & Scrum", "TDD", "Code review", "System design", "Mentoring"],
  },
];

export const teaching = {
  intro:
    "Teaching is how I pay forward the help I got early in my career. I founded Miratech Institute to train new developers, and I've mentored cohorts at Axia Africa, TS Academy and dervacHUB.",
  award: "Outstanding Tech Leadership Award, Dervac ICT Hub, 2024",
};

export const certifications = [
  "Cybersecurity & AI, Harvard Online",
  "Full Stack Development, Harvard Online & Udemy",
  "AI & Automation Specialist, TS Academy",
];

// ─────────────────────────────────────────────────────────────
// LinkedIn posts. Paste a short excerpt (your own words) and the
// post link. The section stays hidden until at least one exists.
// ─────────────────────────────────────────────────────────────
export type Post = { date: string; excerpt: string; href: string };

export const posts: Post[] = [
  // {
  //   date: "Aug 2026",
  //   excerpt: "What moderating an AI & Automation cohort taught me about ...",
  //   href: "https://www.linkedin.com/posts/jamiusanni_...",
  // },
];
