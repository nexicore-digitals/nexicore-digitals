import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartColumnBig,
  Cloud,
  Cpu,
  Database,
  Layers3,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { founderProfile } from '../content'
import { serviceModules, type ServiceModuleId } from '../modules'
import type { EnquiryPreset } from './types'

const sectionImageWidths = [640, 960, 1280, 1600]

function buildUnsplashUrl(photoId: string, width: number, quality: number, blur?: number) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    crop: 'entropy',
    w: String(width),
    h: '534',
    q: String(quality),
  })

  if (blur) {
    params.set('blur', String(blur))
  }

  return `https://images.unsplash.com/${photoId}?${params.toString()}`
}

export type SectionImageAsset = {
  src: string
  placeholderSrc: string
  srcSet: string
}

function buildSectionImage(photoId: string): SectionImageAsset {
  return {
    src: buildUnsplashUrl(photoId, 1600, 80),
    placeholderSrc: buildUnsplashUrl(photoId, 56, 20, 80),
    srcSet: sectionImageWidths
      .map((width) => `${buildUnsplashUrl(photoId, width, 72)} ${width}w`)
      .join(', '),
  }
}

export const navigationItems = [
  { label: 'Story', path: '#overview' },
  { label: 'Dashboard', path: '#dashboard' },
  { label: 'Services', path: '#services' },
  { label: 'Technology', path: '#technology' },
  { label: 'Proof', path: '#proof' },
  { label: 'Enquiry', path: '#enquiry' },
  { label: 'Founder', path: '#about' },
]

export const nexicoreLogo = `${import.meta.env.BASE_URL}brand/logos/high-resolution-color-logo.png`
export const notebookMockup = `${import.meta.env.BASE_URL}brand/mockups/notebook-brick-wall-mockup.webp`
const techIconsBasePath = `${import.meta.env.BASE_URL}brand/tech-icons`

function buildTechIconSrc(slug: string) {
  return `${techIconsBasePath}/${slug}.svg`
}

const techIconSrc = {
  arduino: buildTechIconSrc('arduino'),
  cloudflare: buildTechIconSrc('cloudflare'),
  cplusplus: buildTechIconSrc('cplusplus'),
  css: buildTechIconSrc('css'),
  fastify: buildTechIconSrc('fastify'),
  linux: buildTechIconSrc('linux'),
  nginx: buildTechIconSrc('nginx'),
  nodedotjs: buildTechIconSrc('nodedotjs'),
  postgresql: buildTechIconSrc('postgresql'),
  prisma: buildTechIconSrc('prisma'),
  react: buildTechIconSrc('react'),
  redis: buildTechIconSrc('redis'),
  tailwindcss: buildTechIconSrc('tailwindcss'),
  typescript: buildTechIconSrc('typescript'),
  vite: buildTechIconSrc('vite'),
} as const

export const sectionImages = {
  context: buildSectionImage('photo-1454165804606-c3d57bc86b40'),
  engagement: buildSectionImage('photo-1552664730-d307ca884978'),
  proof: buildSectionImage('photo-1556761175-4b46a572b786'),
  services: buildSectionImage('photo-1498050108023-c5249f4df085'),
  dashboard: buildSectionImage('photo-1461749280684-dccba630e2f6'),
}

export const storyIcons: LucideIcon[] = [ShieldCheck, Workflow, Rocket]
export const techIcons: LucideIcon[] = [Layers3, Workflow, Server, Database, Cloud, Cpu]

export const idealClientProfiles = [
  'Fintech founders',
  'Digital commerce teams',
  'Operations-heavy SMEs',
]

export const trustSignals = [
  'CAC registered',
  'Direct delivery accountability',
  'Trust-first systems',
]

export const outcomeHighlights = [
  '68% reduction in manual reconciliation workload',
  '47% improvement in p95 API latency',
  '33% increase in onboarding completion',
]

export const audiencePaths: Array<{
  title: string
  detail: string
  href: string
  icon: LucideIcon
}> = [
  {
    title: 'Business leaders',
    detail: 'Start with business context and outcomes.',
    href: '#context',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Technical teams',
    detail: 'Jump to technology and implementation decisions.',
    href: '#technology',
    icon: Cpu,
  },
  {
    title: 'Investors',
    detail: 'Review process flow and case-study proof.',
    href: '#proof',
    icon: Rocket,
  },
]

export const contextPrimers: Array<{
  title: string
  detail: string
  icon: LucideIcon
}> = [
  {
    title: 'Business view',
    detail: 'See the commercial context before technical details.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Trust view',
    detail: 'Review verification and operating credibility upfront.',
    icon: ShieldCheck,
  },
  {
    title: 'Outcome view',
    detail: 'Anchor decisions to measurable business outcomes.',
    icon: ChartColumnBig,
  },
]

export const proofPrimers: Array<{
  label: string
  icon: LucideIcon
}> = [
  { label: 'Challenge', icon: ShieldCheck },
  { label: 'Intervention', icon: Workflow },
  { label: 'Outcome', icon: Rocket },
]

export const founderStoryPrimers: Array<{
  label: string
  detail: string
  icon: LucideIcon
}> = [
  {
    label: 'Who',
    detail: 'Direct technical accountability',
    icon: BadgeCheck,
  },
  {
    label: 'What',
    detail: 'Architecture and automation execution',
    icon: Layers3,
  },
  {
    label: 'Why',
    detail: 'Dependable outcomes teams can trust',
    icon: Sparkles,
  },
]

export type TechLogoBadge = {
  label: string
  iconSrc: string
}

export const technologyLogoBadges: Record<string, TechLogoBadge[]> = {
  'Frontend Shell & Build Tooling': [
    { label: 'Vite', iconSrc: techIconSrc.vite },
    { label: 'React', iconSrc: techIconSrc.react },
    { label: 'TypeScript', iconSrc: techIconSrc.typescript },
  ],
  'Experience Layer & Motion System': [
    { label: 'React', iconSrc: techIconSrc.react },
    { label: 'CSS', iconSrc: techIconSrc.css },
  ],
  'Design System & Visual Layer': [{ label: 'Tailwind', iconSrc: techIconSrc.tailwindcss }],
  'Backend Microservices & API Runtime': [
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
    { label: 'Fastify', iconSrc: techIconSrc.fastify },
  ],
  'Primary Database & Data Layer': [
    { label: 'PostgreSQL', iconSrc: techIconSrc.postgresql },
    { label: 'Prisma', iconSrc: techIconSrc.prisma },
  ],
  'Caching, Session Management & Background Queues': [
    { label: 'Redis', iconSrc: techIconSrc.redis },
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
  ],
  'Cloud Object Storage & Media Assets': [{ label: 'Cloudflare', iconSrc: techIconSrc.cloudflare }],
  'Compute Deployment & Server Runtime': [
    { label: 'Linux', iconSrc: techIconSrc.linux },
    { label: 'Nginx', iconSrc: techIconSrc.nginx },
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
  ],
  'Edge Routing, CDN & Security': [
    { label: 'Cloudflare', iconSrc: techIconSrc.cloudflare },
    { label: 'Nginx', iconSrc: techIconSrc.nginx },
  ],
  'Embedded IoT & Edge Hardware Toolchain': [
    { label: 'Arduino', iconSrc: techIconSrc.arduino },
    { label: 'C++', iconSrc: techIconSrc.cplusplus },
  ],
}

export const serviceTechnologyBadges: Record<ServiceModuleId, TechLogoBadge[]> = {
  automation: [
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
    { label: 'Redis', iconSrc: techIconSrc.redis },
    { label: 'Cloudflare', iconSrc: techIconSrc.cloudflare },
  ],
  architecture: [
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
    { label: 'PostgreSQL', iconSrc: techIconSrc.postgresql },
    { label: 'Nginx', iconSrc: techIconSrc.nginx },
  ],
  consultation: [
    { label: 'Cloudflare', iconSrc: techIconSrc.cloudflare },
    { label: 'PostgreSQL', iconSrc: techIconSrc.postgresql },
    { label: 'Linux', iconSrc: techIconSrc.linux },
  ],
  nexitrade: [
    { label: 'PostgreSQL', iconSrc: techIconSrc.postgresql },
    { label: 'Redis', iconSrc: techIconSrc.redis },
    { label: 'Cloudflare', iconSrc: techIconSrc.cloudflare },
  ],
  'web-mobile': [
    { label: 'React', iconSrc: techIconSrc.react },
    { label: 'Tailwind', iconSrc: techIconSrc.tailwindcss },
    { label: 'TypeScript', iconSrc: techIconSrc.typescript },
  ],
  'iot-edge': [
    { label: 'Arduino', iconSrc: techIconSrc.arduino },
    { label: 'C++', iconSrc: techIconSrc.cplusplus },
    { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
  ],
}

export const dashboardTechnologyBadges: TechLogoBadge[] = [
  { label: 'Cloudflare', iconSrc: techIconSrc.cloudflare },
  { label: 'Node.js', iconSrc: techIconSrc.nodedotjs },
  { label: 'PostgreSQL', iconSrc: techIconSrc.postgresql },
  { label: 'Redis', iconSrc: techIconSrc.redis },
]

export const moduleIcons: Record<ServiceModuleId, LucideIcon> = {
  automation: Workflow,
  architecture: Layers3,
  consultation: BriefcaseBusiness,
  nexitrade: BadgeCheck,
  'web-mobile': Building2,
  'iot-edge': Cpu,
}

export const founderFocusAreas = founderProfile.focusAreas
  .split(',')
  .map((area) => area.trim())
  .filter((area) => area.length > 0)

export const dashboardKpiCards: Array<{
  label: string
  value: string
  icon: LucideIcon
}> = [
  { label: 'Escrow checks passed', value: '94%', icon: ShieldCheck },
  { label: 'Active service lanes', value: '28', icon: Workflow },
  { label: 'Ops satisfaction score', value: '96%', icon: BadgeCheck },
]

export const whatsappBusinessNumber = '2348102573331'
export const defaultWhatsappMessage =
  'Hello Nexicore Digital Hub, I would like to make an enquiry about your services.'
export const whatsappLink = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`

export function buildEnquiryMessage(preset: EnquiryPreset) {
  const serviceTitle = preset.service
    ? serviceModules.find((module) => module.id === preset.service)?.title
    : undefined

  if (preset.track === 'enterprise') {
    return 'Hello Nexicore team,\n\nI am reaching out for enterprise delivery support.\n\nCurrent business stage:\nTop bottleneck:\nTimeline:\n'
  }

  if (preset.track === 'investor') {
    return 'Hello Nexicore team,\n\nI would like an investor-readiness engagement.\n\nCurrent product stage:\nFundraising timeline:\nAreas requiring review:\n'
  }

  if (preset.track === 'service' && serviceTitle) {
    return `Hello Nexicore team,\n\nI would like to discuss ${serviceTitle}.\n\nCurrent stage:\nPrimary goal:\nTimeline:\n`
  }

  return 'Hello Nexicore team,\n\nI would like to make a service enquiry.\n\nCurrent stage:\nPrimary challenge:\nTimeline:\n'
}

export function buildReasonHighlights(reason: string) {
  return reason
    .replace(/\.$/, '')
    .split(',')
    .flatMap((part) => part.split(' and '))
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .slice(0, 3)
}

export function compactText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength).trimEnd()}…`
}
