import {
  ArrowUpRight,
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  Cpu,
  Database,
  Download,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap,
} from 'lucide-react';
import React, { useEffect } from 'react';

const profile = {
  name: 'Harsh Gatesaniya',
  role: 'Senior Full-Stack Developer',
  location: 'Ahmedabad, Gujarat, India',
  email: 'patelharsh7458@gmail.com',
  phone: '+91 6354991839',
  linkedin: 'https://linkedin.com/in/patel-harsh-ab871016a',
  resume: '/harshkumar-resume.pdf',
};

const coreStack = [
  'React',
  'Node.js',
  'TypeScript',
  'Express',
  'PostgreSQL',
  'MS SQL Server',
  'Redis',
  'Docker',
  'AWS',
  'Kafka',
  'RabbitMQ',
  'GraphQL',
  'MongoDB',
  'WebSockets',
  'Tailwind CSS',
  'GitLab CI/CD',
];

const strengths = [
  {
    icon: Braces,
    title: 'Product-grade full stack',
    text: 'Builds React interfaces, Node.js APIs, authentication, payments, dashboards, and admin workflows with clean handoff from design to deployment.',
  },
  {
    icon: Database,
    title: 'High-level database design',
    text: 'Comfortable modeling relational data, tuning query patterns, caching hot paths, and choosing the right store for SQL, document, or realtime workloads.',
  },
  {
    icon: Network,
    title: 'Distributed systems mindset',
    text: 'Designs services around queues, idempotency, caching, observability, fault isolation, async jobs, and event-driven integration.',
  },
  {
    icon: ServerCog,
    title: 'Production operations',
    text: 'Ships with Docker, CI/CD, Linux workflows, Redis caching, and practical performance improvements across frontend and backend paths.',
  },
];

const experience = [
  {
    company: 'Eastman Auto & Power Limited',
    role: 'Senior Full-Stack Developer',
    period: 'Jul 2025 - Present',
    location: 'Delhi, India',
    points: [
      'Engineering scalable full-stack applications with React, Node.js, Express, Redux, SQL, Redis, Docker, and GitLab CI/CD.',
      'Improving application performance and data retrieval through state management, caching strategy, and backend optimization.',
      'Containerizing services and streamlining deployment workflows for repeatable releases.',
    ],
  },
  {
    company: 'Subnet Labs LLP',
    role: 'Software Developer',
    period: 'Oct 2022 - Jul 2025',
    location: 'Ahmedabad, India',
    points: [
      'Owned end-to-end delivery across frontend, backend services, authentication, payment flows, and platform features.',
      'Worked across MQTT, GNSS, JSON-RPC, Web3 wallet integrations, desktop apps, and service APIs.',
      'Translated business goals into technical architecture, implementation plans, and production-ready features.',
    ],
  },
  {
    company: 'Skillmax Academy',
    role: 'Blockchain Intern',
    period: 'Internship',
    location: 'Bangalore, India',
    points: [
      'Built a stronger base in operating systems, networking, TCP/IP, computer architecture, and blockchain fundamentals.',
      'Explored multiple modern technology stacks and software development workflows.',
    ],
  },
];

const projects = [
  {
    title: 'Remote Server & Solana Node Management Portal',
    label: 'Web3 infrastructure',
    text: 'A web application to manage JSON-RPC nodes and remote servers with admin/user authentication, Web3 wallet functionality, payment processing, and a dynamic management dashboard.',
    stack: ['Node.js', 'Express', 'React', 'JSON-RPC', 'Solana', 'Payments'],
  },
  {
    title: 'Crypto Token & NFT Trading Desktop Application',
    label: 'Desktop + workers',
    text: 'Desktop application with worker-thread execution, remote job coordination, localized database storage, and licensing for secure operations.',
    stack: ['Node.js', 'Worker Threads', 'Desktop App', 'Local DB', 'Licensing'],
  },
  {
    title: 'Discord Role & Messaging Automation Server',
    label: 'Automation API',
    text: 'Server, API, and management webpage for Discord role assignment and scheduled channel messaging, improving moderation and community operations.',
    stack: ['Node.js', 'API Design', 'Discord', 'Automation', 'Admin UI'],
  },
];

const architecture = [
  'React app with route-level data loading, optimistic UI, and resilient API states',
  'Node.js services split by domain boundaries with REST, GraphQL, or event APIs',
  'PostgreSQL / MS SQL for transactional truth, MongoDB for flexible document workloads',
  'Redis for cache-aside, sessions, rate limits, queues, and hot read paths',
  'Kafka or RabbitMQ for async workflows, retries, stream processing, and integration events',
  'Elasticsearch for fast search, audit exploration, log discovery, and read-heavy indexing',
  'Dockerized services with GitLab CI/CD, environment promotion, and repeatable releases',
  'Observability through structured logs, metrics, traces, health checks, and alert-ready signals',
];

const databaseDepth = [
  { name: 'Schema design', text: 'Normalized transactional models, indexes, constraints, audit fields, and migration-safe evolution.' },
  { name: 'Query performance', text: 'Pagination, joins, aggregate reads, indexing strategy, and cache boundaries for high-traffic screens.' },
  { name: 'Data reliability', text: 'Transactions, idempotency keys, retries, outbox patterns, backups, and clear consistency choices.' },
  { name: 'Read models', text: 'Materialized views, Redis snapshots, Elasticsearch indexes, and reporting-friendly data shapes.' },
];

function App() {
  useRevealOnScroll();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-100">
      <Hero />
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-3 sm:grid-cols-4 lg:grid-cols-8">
          {coreStack.map((item) => (
            <div key={item} className="stack-chip rounded-md px-3 py-2 text-center text-sm font-semibold text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>
      <Section eyebrow="Why hire me" title="A full-stack developer who thinks beyond screens.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface lift-card p-5">
              <Icon className="mb-5 h-7 w-7 text-mint" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Experience" title="3.5+ years shipping real products.">
        <div className="space-y-4">
          {experience.map((item) => (
            <article key={item.company} className="surface lift-card grid gap-5 p-5 lg:grid-cols-[280px_1fr]">
              <div>
                <p className="text-sm font-semibold text-mint">{item.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.role}</h3>
                <p className="mt-1 text-slate-300">{item.company}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {item.location}
                </p>
              </div>
              <ul className="grid gap-3 text-sm leading-6 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="System design" title="Architecture signals recruiters can understand fast.">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface lift-card p-5">
            <div className="mb-5 flex items-center gap-3">
              <Workflow className="h-7 w-7 text-amber" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold">Scalable service blueprint</h3>
            </div>
            <div className="architecture-grid">
              {['Client', 'API Gateway', 'Node Services', 'Postgres / MS SQL', 'Redis', 'Kafka / RabbitMQ', 'Elasticsearch', 'Observability'].map((node) => (
                <div key={node} className="architecture-node">{node}</div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              I approach systems as data flows: write path, read path, cache strategy, failure mode, async processing, and deployment path. That keeps features fast, debuggable, and maintainable.
            </p>
          </div>
          <div className="grid gap-3">
            {architecture.map((item) => (
              <div key={item} className="signal-row flex gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                <Zap className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Database depth" title="Strong data modeling for product and scale.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {databaseDepth.map((item) => (
            <article key={item.name} className="surface lift-card p-5">
              <Database className="mb-5 h-7 w-7 text-cyan" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Projects" title="Work that shows breadth across web, infra, and automation.">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="surface lift-card flex min-h-[320px] flex-col p-5">
              <div className="mb-5 inline-flex w-fit rounded-full border border-coral/30 bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-coral">
                {project.label}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">{project.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md bg-white/8 px-2.5 py-1 text-xs font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Certifications" title="Proof of continuous learning.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            'LinkedIn Skill Badge: Node.js Development',
            'LinkedIn Skill Badge: Front-End Technologies',
            'JavaScript Algorithms and Data Structures - freeCodeCamp',
            'The Complete Node.js Developer Course',
          ].map((certificate) => (
            <div key={certificate} className="surface lift-card flex items-start gap-3 p-4">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
              <span className="text-sm leading-6 text-slate-300">{certificate}</span>
            </div>
          ))}
        </div>
      </Section>
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <header className="relative min-h-[92vh] border-b border-white/10">
      <div className="hero-mesh" aria-hidden="true" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <a href="#top" className="font-display text-lg font-bold tracking-wide text-white">
          HG
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
          <a href="#systems">Systems</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </nav>
      <div id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20">
        <section className="hero-copy">
          <div className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-sm font-semibold text-mint">
            <Cpu className="h-4 w-4" aria-hidden="true" />
            React + Node.js + Databases + Distributed Systems
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Harsh Gatesaniya
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">
            Senior full-stack developer building product-grade React apps, Node.js services, database-heavy platforms, and scalable backend systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              <Mail className="h-5 w-5" aria-hidden="true" />
              Hire me
            </a>
            <a className="secondary-button" href={profile.resume} download>
              <Download className="h-5 w-5" aria-hidden="true" />
              Resume
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <Info icon={MapPin} text={profile.location} />
            <Info icon={Mail} text={profile.email} />
            <Info icon={Phone} text={profile.phone} />
          </div>
        </section>
        <aside className="surface terminal-card relative p-5 shadow-glow">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="mt-6 space-y-5 font-mono text-sm">
            <CodeLine label="focus" value="full-stack product engineering" />
            <CodeLine label="frontend" value="React, Redux, TypeScript, Tailwind" />
            <CodeLine label="backend" value="Node.js, Express, GraphQL, WebSockets" />
            <CodeLine label="data" value="PostgreSQL, MS SQL, MongoDB, Redis" />
            <CodeLine label="scale" value="Kafka, RabbitMQ, Elasticsearch, Docker" />
            <CodeLine label="ship" value="CI/CD, Linux, AWS, production ownership" />
          </div>
        </aside>
      </div>
    </header>
  );
}

function Section({ eyebrow, title, children }) {
  const id = eyebrow === 'System design' ? 'systems' : eyebrow === 'Projects' ? 'projects' : undefined;

  return (
    <section id={id} className="reveal mx-auto max-w-7xl px-5 py-16 sm:py-20">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-mint">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="reveal border-t border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-mint">Available for strong teams</p>
          <h2 className="mt-3 font-display text-3xl font-black text-white">Let’s build reliable products at scale.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Best fit: React + Node.js roles, full-stack ownership, backend-heavy product teams, platform dashboards, data systems, and distributed architecture work.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <a className="primary-button justify-center" href={`mailto:${profile.email}`}>
            <MessageSquareText className="h-5 w-5" aria-hidden="true" />
            {profile.email}
          </a>
          <a className="secondary-button justify-center" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            LinkedIn
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Info({ icon: Icon, text }) {
  return (
    <div className="info-pill flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
      <Icon className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
      <span className="truncate">{text}</span>
    </div>
  );
}

function CodeLine({ label, value }) {
  return (
    <div className="code-line grid gap-2 rounded-lg border border-white/10 bg-black/20 p-3 sm:grid-cols-[110px_1fr]">
      <span className="text-cyan">{label}</span>
      <span className="text-slate-200">{value}</span>
    </div>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

export default App;
