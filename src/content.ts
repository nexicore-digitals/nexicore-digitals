import type { ServiceModuleId } from './modules'

export type ServicePillar = {
  pillar: string
  keyFocusAreas: string
  targetClientsAndDeliverables: string
}

export type ModuleHudContent = {
  moduleId: ServiceModuleId
  caseStudyTitle: string
  caseStudySummary: string
  architectureLines: string[]
  requestPrompt: string
}

export type CaseStudyProof = {
  title: string
  sector: string
  challenge: string
  intervention: string
  outcomes: string[]
  timeframe: string
}

export type CtaTrack = {
  audience: string
  label: string
  promise: string
  emailSubject: string
  ctaText: string
}

export const executiveSummary =
  'Nexicore Digital Hub (Nexicore Digitals) helps businesses move from ideas to reliable digital products with clearer architecture, stronger automation, and trust-first execution.'

export const serviceMatrix: ServicePillar[] = [
  {
    pillar: 'Enterprise Process Automation',
    keyFocusAreas:
      'Workflow automation for reconciliation, approvals, notifications, and operational handoffs.',
    targetClientsAndDeliverables:
      'For fintech, commerce, and logistics teams that need faster operations with fewer manual errors.',
  },
  {
    pillar: 'Software Architecture Development',
    keyFocusAreas:
      'Scalable platform design, service boundaries, performance optimization, and resilient backend foundations.',
    targetClientsAndDeliverables:
      'For scaling teams preparing for growth, high traffic, and more complex product demand.',
  },
  {
    pillar: 'Software Architecture Consultation',
    keyFocusAreas:
      'Architecture reviews, technical due diligence, delivery risk mapping, and cost-aware infrastructure decisions.',
    targetClientsAndDeliverables:
      'For founders and leadership teams that need confidence before scale-up, launch, or fundraising.',
  },
  {
    pillar: 'NexiTrade Escrow Infrastructure',
    keyFocusAreas:
      'Escrow custody, trade flow orchestration, dispatch routing support, and milestone-driven dispute processes.',
    targetClientsAndDeliverables:
      'For digital trade businesses that require secure transactions and trusted fulfillment journeys.',
  },
  {
    pillar: 'Full-Cycle Web & Mobile Engineering',
    keyFocusAreas:
      'Web and mobile product delivery with modern UX, robust integrations, and release-ready engineering quality.',
    targetClientsAndDeliverables:
      'For brands and SMEs building customer-facing products and internal operations tools.',
  },
  {
    pillar: 'Embedded IoT & Edge Hardware Solutions',
    keyFocusAreas:
      'Firmware engineering, telemetry pipelines, connected sensors, and edge-system monitoring.',
    targetClientsAndDeliverables:
      'For field operations, smart facilities, and hardware programs that need software-grade reliability.',
  },
]

export const nexiTradeHighlights = [
  'Escrow custody model designed to reduce trust friction in high-value transactions.',
  'Route and dispatch visibility for smoother fulfillment coordination.',
  'Milestone notifications across email, SMS, and in-app experiences.',
]

export const techStackChoices = [
  {
    area: 'Frontend Shell & Build Tooling',
    choice: 'Vite + React (TypeScript)',
    reason:
      'Fast builds, strong maintainability, and a lightweight foundation for polished product interfaces.',
  },
  {
    area: 'Experience Layer & Motion System',
    choice: 'React UI motion + CSS animation system',
    reason:
      'Delivers premium motion and interaction quality without relying on fragile WebGL dependencies.',
  },
  {
    area: 'Design System & Visual Layer',
    choice: 'Tailwind CSS + custom glass components',
    reason:
      'Keeps the interface consistent, elegant, and easy to evolve across sections and product surfaces.',
  },
  {
    area: 'Backend Microservices & API Runtime',
    choice: 'Node.js + Fastify (TypeScript)',
    reason: 'Supports secure APIs, low-latency requests, and well-structured service boundaries.',
  },
  {
    area: 'Primary Database & Data Layer',
    choice: 'PostgreSQL + Prisma ORM',
    reason: 'Provides transactional reliability and clean, type-safe schema management.',
  },
  {
    area: 'Caching, Session Management & Background Queues',
    choice: 'Redis + BullMQ',
    reason: 'Enables fast session operations, retries, and reliable asynchronous task handling.',
  },
  {
    area: 'Cloud Object Storage & Media Assets',
    choice: 'Cloudflare R2',
    reason: 'Scales media delivery with cost-aware storage and edge-friendly distribution.',
  },
  {
    area: 'Compute Deployment & Server Runtime',
    choice: 'Linux VPS + systemd/PM2 + Nginx',
    reason:
      'Provides direct runtime control, predictable performance, and straightforward operations management.',
  },
  {
    area: 'Edge Routing, CDN & Security',
    choice: 'Cloudflare DNS + SSL/TLS + WAF + DDoS',
    reason:
      'Protects public traffic while improving global response times and delivery reliability.',
  },
  {
    area: 'Embedded IoT & Edge Hardware Toolchain',
    choice: 'PlatformIO + Arduino (C++)',
    reason: 'Supports repeatable firmware workflows and reliable edge-device integration.',
  },
]

export const aiPipelineStages = [
  {
    stage: 'Discovery & Requirement Mapping',
    detail: 'Translate goals into implementation scope, constraints, and delivery checkpoints.',
  },
  {
    stage: 'Architecture & Build Planning',
    detail:
      'Define service boundaries, API contracts, and rollout plan before implementation starts.',
  },
  {
    stage: 'Delivery & Validation',
    detail: 'Ship features with testing coverage, observability, and measurable quality gates.',
  },
  {
    stage: 'Optimization & Scale Readiness',
    detail: 'Improve performance, automate recurring operations, and prepare systems for growth.',
  },
]

export const investorDeck = [
  {
    label: 'Problem',
    title: 'Growing businesses lose momentum when systems are fragmented.',
    detail:
      'Teams often juggle disconnected tools, manual handoffs, and unclear ownership while product demand keeps growing.',
    accent: 'Fast-moving businesses need dependable operating systems, not more point tools.',
  },
  {
    label: 'Solution',
    title: 'Nexicore turns business intent into working systems.',
    detail:
      'We combine product architecture, automation, and engineering delivery so teams can execute clearly and scale responsibly.',
    accent: 'From idea to live system, the company builds for execution clarity and governance.',
  },
  {
    label: 'Differentiation',
    title: 'Founder-led execution with direct technical accountability.',
    detail:
      'This is not a generic agency model. It is a hands-on engineering partnership aligned with business outcomes and delivery quality.',
    accent:
      'Clients get strategic guidance with technical accountability from the same lead decision-maker.',
  },
  {
    label: 'Why now',
    title: 'Trust, speed, and automation now define competitive advantage.',
    detail:
      'As businesses scale, they need secure transaction models, dependable operations, and platforms that evolve without chaos.',
    accent:
      'This moment favors businesses with a clear operating model and disciplined technical execution.',
  },
  {
    label: 'Roadmap',
    title: 'Build a strong operating core, then scale product expansion.',
    detail:
      'Phase one focuses on architecture quality, automation, and trust infrastructure; phase two expands delivery across broader product programs.',
    accent: 'The roadmap is designed for measurable commercial value and sustainable growth.',
  },
  {
    label: 'Ask',
    title: 'Engage Nexicore as your execution partner for the next growth stage.',
    detail:
      'Whether you need stronger architecture, secure digital trade rails, or automation maturity, the team is ready to support real delivery.',
    accent: 'The business is ready to help operators simplify complexity and accelerate outcomes.',
  },
]

export const caseStudyProofBlocks: CaseStudyProof[] = [
  {
    title: 'Reconciliation automation for a payments operation',
    sector: 'Fintech operations',
    challenge:
      'Finance and ops teams were manually resolving settlement mismatches and closing reports late.',
    intervention:
      'Introduced event-driven reconciliation workflows with retry-safe processing and exception routing.',
    outcomes: [
      'Manual reconciliation workload reduced by 68%',
      'Settlement close window moved from next-day to same-day',
      'Dispute escalation turnaround improved by 42%',
    ],
    timeframe: '10-week delivery cycle',
  },
  {
    title: 'Architecture reset before growth push',
    sector: 'Digital commerce platform',
    challenge:
      'Core services were tightly coupled, causing release bottlenecks and performance regression under traffic peaks.',
    intervention:
      'Restructured service boundaries, introduced cache-aware API paths, and added observability checkpoints.',
    outcomes: [
      'P95 API latency improved by 47%',
      'Release confidence improved with staged quality gates',
      'Cloud cost efficiency improved by 21% after rightsizing',
    ],
    timeframe: '12-week stabilization program',
  },
  {
    title: 'Customer onboarding and trust-flow redesign',
    sector: 'Service-led enterprise workflow',
    challenge:
      'Onboarding drop-offs and unclear trust signals reduced activation and delayed enterprise conversion.',
    intervention:
      'Reworked journey flow, surfaced trust checkpoints, and aligned product messaging with decision-maker needs.',
    outcomes: [
      'Onboarding completion rate improved by 33%',
      'Support tickets in first-week usage dropped by 29%',
      'Pilot-to-contract conversion improved by 24%',
    ],
    timeframe: '8-week product + UX sprint',
  },
]

export const ctaFunnelSteps = [
  {
    step: '01',
    title: 'Share context',
    detail: 'Tell us your stage, bottleneck, and timeline.',
  },
  {
    step: '02',
    title: 'Joint working session',
    detail: 'We align leadership and technical options in one focused call.',
  },
  {
    step: '03',
    title: 'Execution brief',
    detail: 'You get a scoped plan, phased roadmap, and outcome path.',
  },
]

export const ctaTracks: CtaTrack[] = [
  {
    audience: 'Enterprise',
    label: 'Enterprise delivery track',
    promise: 'Architecture, automation, and product execution in one track.',
    emailSubject: 'Enterprise delivery discovery with Nexicore',
    ctaText: 'Book enterprise briefing',
  },
  {
    audience: 'Investor',
    label: 'Investor readiness track',
    promise: 'Diligence-ready planning and roadmap validation support.',
    emailSubject: 'Investor readiness session with Nexicore',
    ctaText: 'Book investor session',
  },
]

export const founderProfile = {
  name: 'Owen Erhabor',
  role: 'Founder & Lead Software Engineer',
  location: 'Nigeria',
  email: 'info@nexicore.dev',
  linkedinUrl: 'https://www.linkedin.com/in/owen-erhabor-80958b262/',
  photoUrl: 'https://avatars.githubusercontent.com/u/125702493?s=460&v=4',
  background:
    'I lead Nexicore Digital Hub (Nexicore Digitals) with a focus on designing and shipping high-trust digital systems that businesses can rely on.',
  philosophy:
    'My focus is practical systems design: clear architecture, dependable automation, and product experiences that scale with control and measurable value.',
  focusAreas:
    'Software architecture, automation, fintech systems, web/mobile engineering, embedded and edge systems.',
}

export const corporateCredentials = [
  {
    asset: 'Certificate of Business Name Registration',
    provider: 'Corporate Affairs Commission (CAC), Nigeria',
    status: 'Officially registered',
  },
  {
    asset: 'Registered Entity Name',
    provider: 'Nexicore Digital Hub',
    status: 'Active and verified',
  },
  {
    asset: 'Corporate Banking & Settlement Infrastructure',
    provider: 'Moniepoint MFB / commercial banking rails',
    status: 'Active dedicated corporate account',
  },
  {
    asset: 'Payment Gateway Integration',
    provider: 'Monnify / Paystack',
    status: 'Configured for escrow dynamic routing',
  },
]

export const moduleHudContent: Record<ServiceModuleId, ModuleHudContent> = {
  automation: {
    moduleId: 'automation',
    caseStudyTitle: 'Settlement Drift Elimination',
    caseStudySummary:
      'Automated reconciliation pipelines eliminated settlement drift and reduced manual finance checks by moving webhook events into deterministic ERP/CRM flow chains.',
    architectureLines: [
      'Event bus -> webhook worker -> reconciliation engine -> ERP/CRM adapters',
      'Idempotency keys and retry queues with Redis + BullMQ',
      'Audit logs and incident replay snapshots for compliance',
    ],
    requestPrompt:
      'Request a process audit to map automation bottlenecks and workflow recovery points.',
  },
  architecture: {
    moduleId: 'architecture',
    caseStudyTitle: 'High-Throughput Service Decomposition',
    caseStudySummary:
      'A monolith was decomposed into bounded services with cache-aware read paths and optimized query lanes for high-traffic product launches.',
    architectureLines: [
      'Gateway -> domain services -> PostgreSQL + Redis',
      'Async orchestration with event contracts and retry queues',
      'Observability baseline with latency budgets per service',
    ],
    requestPrompt: 'Submit a scale-readiness review request for your platform architecture.',
  },
  consultation: {
    moduleId: 'consultation',
    caseStudyTitle: 'Executive Architecture Readiness',
    caseStudySummary:
      'Leadership teams received risk-ranked architecture recommendations before a growth financing cycle and cut projected cloud cost by rightsizing throughput assumptions.',
    architectureLines: [
      'Current-state audit -> risk model -> remediation map',
      'Data privacy compliance checkpoints (NDPR)',
      'Cloud resource optimization and spend forecasts',
    ],
    requestPrompt: 'Open an architecture consultation request for audit and roadmap advisory.',
  },
  nexitrade: {
    moduleId: 'nexitrade',
    caseStudyTitle: 'Escrow Trust Rails for Digital Trade',
    caseStudySummary:
      'NexiTrade combines escrow custody, dispatch coordination, and milestone notifications to reduce trust and fulfillment friction in P2P transactions.',
    architectureLines: [
      'Escrow ledger + virtual account routing',
      'Dispatch matching and route telemetry streams',
      'Milestone-triggered SMS, email, and socket notifications',
    ],
    requestPrompt: 'Request NexiTrade partnership or escrow API integration briefing.',
  },
  'web-mobile': {
    moduleId: 'web-mobile',
    caseStudyTitle: 'Cross-Platform Product Delivery',
    caseStudySummary:
      'Built responsive web and mobile channels with synchronized service APIs and offline-aware data layers for uninterrupted user journeys.',
    architectureLines: [
      'React web shell + mobile clients + API gateway',
      'Offline-first cache and sync queue strategy',
      'Shared design system and release cadence governance',
    ],
    requestPrompt: 'Start a full-cycle delivery request for web and mobile product engineering.',
  },
  'iot-edge': {
    moduleId: 'iot-edge',
    caseStudyTitle: 'Field Telemetry and Edge Observability',
    caseStudySummary:
      'Edge devices streamed secure telemetry for near real-time monitoring and anomaly detection across distributed assets.',
    architectureLines: [
      'ESP32/ARM firmware + sensor polling loops',
      'MQTT/WebSocket uplink to telemetry processing',
      'Access control and alerting with event routing',
    ],
    requestPrompt:
      'Schedule an edge architecture session for IoT hardware and telemetry stack planning.',
  },
}
