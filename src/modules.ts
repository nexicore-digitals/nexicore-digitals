export type ServiceModuleId =
  'automation' | 'architecture' | 'consultation' | 'nexitrade' | 'web-mobile' | 'iot-edge'

export type ServiceModule = {
  id: ServiceModuleId
  title: string
  shortLabel: string
  summary: string
  details: string
  orbitPosition: [number, number, number]
  cameraPosition: [number, number, number]
  color: string
}

export const serviceModules: ServiceModule[] = [
  {
    id: 'automation',
    title: 'Enterprise Process Automation',
    shortLabel: 'Automation',
    summary:
      'Event-driven backend workflows, reconciliation pipelines, and operational automations.',
    details:
      'Builds resilient process pipelines that reduce manual errors across fintech, logistics, and e-commerce operations.',
    orbitPosition: [4.4, 0.2, 0],
    cameraPosition: [5.3, 2.1, 3.4],
    color: '#52e5ff',
  },
  {
    id: 'architecture',
    title: 'Software Architecture Development',
    shortLabel: 'Architecture',
    summary:
      'Distributed system design, microservices decomposition, and high-concurrency backend engineering.',
    details:
      'Designs scalable platform foundations with strong performance, observability, and service boundaries.',
    orbitPosition: [2.2, 2, -3.5],
    cameraPosition: [3.6, 3.6, -5.1],
    color: '#8bb4ff',
  },
  {
    id: 'consultation',
    title: 'Software Architecture Consultation',
    shortLabel: 'Consultation',
    summary:
      'System design review, code audits, security/compliance checks, and cloud cost optimization.',
    details:
      'Supports CTO and leadership teams with architecture decisions before major scale, funding, or migration events.',
    orbitPosition: [-2.2, 2, -3.5],
    cameraPosition: [-3.8, 3.3, -5.4],
    color: '#7f91ff',
  },
  {
    id: 'nexitrade',
    title: 'NexiTrade Escrow Infrastructure',
    shortLabel: 'NexiTrade',
    summary:
      'Peer-to-peer escrow, auction flow, dispute handling, and logistics-aware transaction pathways.',
    details:
      'Nexicore flagship platform focused on transaction trust, digital custody, and reliable fulfillment orchestration.',
    orbitPosition: [-4.4, 0.2, 0],
    cameraPosition: [-5.5, 2.2, 3.6],
    color: '#6f7aff',
  },
  {
    id: 'web-mobile',
    title: 'Full-Cycle Web & Mobile Engineering',
    shortLabel: 'Web + Mobile',
    summary:
      'High-performance web products and cross-platform mobile apps with reactive user experiences.',
    details:
      'Builds delivery-focused product experiences with resilient frontends and production-grade integration layers.',
    orbitPosition: [-2.2, -2.1, 3.5],
    cameraPosition: [-3.5, -1.2, 5.9],
    color: '#4ef2d0',
  },
  {
    id: 'iot-edge',
    title: 'Embedded IoT & Edge Hardware',
    shortLabel: 'IoT + Edge',
    summary:
      'Firmware, telemetry streaming, RFID access control, and edge-connected monitoring systems.',
    details:
      'Bridges hardware and software for reliable field telemetry and operational intelligence at the network edge.',
    orbitPosition: [2.2, -2.1, 3.5],
    cameraPosition: [3.8, -1, 5.7],
    color: '#7bc8ff',
  },
]
