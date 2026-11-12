import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartColumnBig,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  aiPipelineStages,
  caseStudyProofBlocks,
  corporateCredentials,
  ctaFunnelSteps,
  ctaTracks,
  executiveSummary,
  founderProfile,
  moduleHudContent,
  nexiTradeHighlights,
  serviceMatrix,
  techStackChoices,
} from './content'
import { serviceModules, type ServiceModuleId } from './modules'

const navigationItems = [
  { label: 'Story', path: '#overview' },
  { label: 'Dashboard', path: '#dashboard' },
  { label: 'Services', path: '#services' },
  { label: 'Technology', path: '#technology' },
  { label: 'Proof', path: '#proof' },
  { label: 'Enquiry', path: '#enquiry' },
  { label: 'Founder', path: '#about' },
]

const nexicoreLogo = `${import.meta.env.BASE_URL}brand/logos/high-resolution-color-logo.png`
const notebookMockup = `${import.meta.env.BASE_URL}brand/mockups/notebook-brick-wall-mockup.webp`

const storyIcons: LucideIcon[] = [ShieldCheck, Workflow, Rocket]
const techIcons: LucideIcon[] = [Layers3, Workflow, Server, Database, Cloud, Cpu]

const idealClientProfiles = ['Fintech founders', 'Digital commerce teams', 'Operations-heavy SMEs']

const trustSignals = ['CAC registered', 'Founder-led delivery', 'Trust-first systems']

const outcomeHighlights = [
  '68% reduction in manual reconciliation workload',
  '47% improvement in p95 API latency',
  '33% increase in onboarding completion',
]

const audiencePaths: Array<{
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

type EnquiryTrack = 'general' | 'enterprise' | 'investor' | 'service'

type EnquiryPreset = {
  track: EnquiryTrack
  service?: ServiceModuleId
}

const whatsappBusinessNumber = '2348102573331'
const defaultWhatsappMessage =
  'Hello Nexicore Digital Hub, I would like to make an enquiry about your services.'
const whatsappLink = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`

function buildEnquiryMessage(preset: EnquiryPreset) {
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

const moduleIcons: Record<ServiceModuleId, LucideIcon> = {
  automation: Workflow,
  architecture: Layers3,
  consultation: BriefcaseBusiness,
  nexitrade: BadgeCheck,
  'web-mobile': Building2,
  'iot-edge': Cpu,
}

function AppLayout() {
  const [selectedModuleId, setSelectedModuleId] = useState<ServiceModuleId>('nexitrade')
  const [enquiryTrack, setEnquiryTrack] = useState<EnquiryTrack>('general')
  const [enquiryService, setEnquiryService] = useState<ServiceModuleId | 'general'>('general')
  const [enquiryMessage, setEnquiryMessage] = useState<string>(
    buildEnquiryMessage({ track: 'general' }),
  )

  const selectedModule = useMemo(
    () => serviceModules.find((module) => module.id === selectedModuleId),
    [selectedModuleId],
  )

  const selectedHud = moduleHudContent[selectedModuleId]

  const startEnquiry = (preset: EnquiryPreset) => {
    setEnquiryTrack(preset.track)
    setEnquiryService(preset.service ?? 'general')
    setEnquiryMessage(buildEnquiryMessage(preset))

    if (typeof document !== 'undefined') {
      document.getElementById('enquiry')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="app-root min-h-screen bg-[linear-gradient(180deg,#f7f9ff_0%,#edf2ff_48%,#f5f8ff_100%)] text-slate-900">
      <div className="bg-orb bg-orb-left" />
      <div className="bg-orb bg-orb-right" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <img src={nexicoreLogo} alt="Nexicore logo" className="h-10 w-auto" />
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                Nexicore Digital Hub
              </p>
              <p className="text-xs font-medium text-slate-700">Founder-led engineering partner</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navigationItems.map((item) => (
              <a key={item.path} href={item.path} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => startEnquiry({ track: 'general' })}
              className="button-primary rounded-full px-4 py-2 text-sm"
            >
              Send enquiry
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-3 py-2 text-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </header>

      <main className="main-shell mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-10 pt-6 md:gap-16 md:px-8 md:pt-8">
        <StorySection onStartEnquiry={startEnquiry} />
        <ProductDashboardSection />
        <ServicesSection
          selectedModuleId={selectedModuleId}
          selectedHud={selectedHud}
          selectedModule={selectedModule}
          onSelectModule={setSelectedModuleId}
          onStartEnquiry={startEnquiry}
        />
        <TechnologySection />
        <EnquirySection
          enquiryTrack={enquiryTrack}
          setEnquiryTrack={setEnquiryTrack}
          enquiryService={enquiryService}
          setEnquiryService={setEnquiryService}
          enquiryMessage={enquiryMessage}
          setEnquiryMessage={setEnquiryMessage}
        />
        <FounderSection />
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 text-sm text-slate-600 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-6 md:flex-row">
          <p>© 2026 Nexicore Digital Hub</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-wide text-slate-500 uppercase">
            <span>Clarity</span>
            <span>Trust</span>
            <span>Execution</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StorySection({ onStartEnquiry }: { onStartEnquiry: (preset: EnquiryPreset) => void }) {
  return (
    <section id="overview" className="deck-section space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
        <article className="glass-card hero-stage h-full rounded-[32px] p-6 md:p-8">
          <div className="hero-glow" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
              <Sparkles size={14} className="shrink-0" />
              Nexicore Digitals
            </div>

            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.07em] text-slate-900 md:text-6xl">
                We build digital systems that business teams can trust and use.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {executiveSummary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onStartEnquiry({ track: 'general' })}
                className="button-primary rounded-full px-5 py-3 text-sm"
              >
                Send project enquiry
                <ArrowRight size={16} className="ml-1.5" />
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button-secondary rounded-full px-5 py-3 text-sm"
              >
                <MessageCircle size={16} className="mr-1.5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {idealClientProfiles.map((profile) => (
                <span
                  key={profile}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-600"
                >
                  <CheckCircle2 size={13} className="text-indigo-600" />
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="image-panel mockup-stage relative h-full overflow-hidden rounded-[30px]">
          <img
            src={notebookMockup}
            alt="Nexicore platform mockup"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1500}
            height={1000}
          />
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {audiencePaths.map(({ title, detail, href, icon: Icon }) => (
          <a key={title} href={href} className="audience-path rounded-2xl p-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-700">
              <Icon size={16} />
            </span>
            <p className="mt-3 text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{detail}</p>
          </a>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 backdrop-blur-sm">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
          Reading guide
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          The cards below are split into three parts: <strong>business context</strong> (left),
          <strong> engagement process</strong> (right), and <strong>proof snapshots</strong> (next
          row).
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <article id="context" className="glass-card rounded-[28px] p-5">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            Business context
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">
            What this means for your team.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Snapshot of capability breadth, delivery ownership, and compliance readiness.
          </p>

          <div className="grid gap-3 text-sm sm:grid-cols-3">
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Service coverage
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                {serviceMatrix.length} capabilities
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Architecture, automation, product, and trust rails.
              </p>
            </div>
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Delivery ownership
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                Founder-led
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Direct technical accountability end to end.
              </p>
            </div>
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Compliance posture
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                CAC active
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Registered legal entity with active banking rails.
              </p>
            </div>
          </div>

          <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Trust baseline
          </p>
          <div className="proof-strip mt-3 grid gap-2 rounded-2xl p-3 sm:grid-cols-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-600"
              >
                <CheckCircle2 size={14} className="text-indigo-600" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Representative outcomes
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {outcomeHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs leading-relaxed text-slate-700"
              >
                {highlight}
              </div>
            ))}
          </div>
        </article>

        <article id="engagement" className="glass-card rounded-[28px] p-5 md:p-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            Engagement process
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-900">
            How we move from first conversation to execution brief.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Built for enterprise teams and investor-backed founders that need clear decisions
            quickly.
          </p>

          <div className="mt-4 grid gap-2 md:grid-cols-3">
            {ctaFunnelSteps.map((item) => (
              <div
                key={item.step}
                className="funnel-step rounded-xl border border-slate-200 bg-white/70 px-3 py-2.5"
              >
                <div className="flex items-start gap-2">
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-600">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Choose your path
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {ctaTracks.map((track) => (
              <button
                key={track.audience}
                type="button"
                onClick={() =>
                  onStartEnquiry({
                    track: track.audience === 'Enterprise' ? 'enterprise' : 'investor',
                  })
                }
                className="story-card rounded-2xl p-3"
              >
                <p className="text-[10px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
                  {track.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{track.promise}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-slate-900">
                  {track.ctaText}
                  <ChevronRight size={14} />
                </p>
              </button>
            ))}
          </div>
        </article>
      </div>

      <div id="proof">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
          Case-study proof
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-900">
          Representative engagements with measurable outcomes.
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          These snapshots show the challenge, intervention, and results pattern teams can expect.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {caseStudyProofBlocks.map((study, index) => {
          const Icon = storyIcons[index % storyIcons.length]

          return (
            <article key={study.title} className="proof-card rounded-[28px] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-600 uppercase">
                  <Icon size={13} />
                  {study.sector}
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-[10px] font-semibold text-slate-500">
                  {study.timeframe}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                {study.title}
              </h2>
              <div className="mt-3 rounded-xl border border-slate-200 bg-white/75 p-3">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                  Challenge
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{study.challenge}</p>
              </div>
              <div className="mt-3 rounded-xl border border-slate-200 bg-white/75 p-3">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                  Intervention
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{study.intervention}</p>
              </div>

              <p className="mt-4 text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Outcomes
              </p>
              <ul className="mt-2 space-y-2">
                {study.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="inline-flex items-start gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ProductDashboardSection() {
  return (
    <section id="dashboard" className="deck-section space-y-6">
      <div className="dashboard-stage rounded-[32px] p-6 md:p-8">
        <div className="relative z-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="space-y-6">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-cyan-100 uppercase">
                <ChartColumnBig size={13} />
                Product dashboard
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.06em] text-white md:text-4xl">
                A visual operating room that leadership can understand at a glance.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Instead of overwhelming walls of text, this layout surfaces what matters:
                transaction trust, workflow momentum, and delivery status.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['Escrow checks passed', '94%'],
                ['Active service lanes', '28'],
                ['Ops satisfaction score', '96%'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-700/90 bg-slate-900/55 p-3"
                >
                  <p className="text-[10px] tracking-[0.18em] text-slate-400 uppercase">{label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="dashboard-panel rounded-[24px] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-300 uppercase">
                  Weekly delivery momentum
                </p>
                <p className="text-[10px] text-slate-400">Past 8 weeks</p>
              </div>
              <div className="dashboard-bars mt-4">
                {[34, 42, 48, 57, 66, 74, 82, 91].map((value, index) => (
                  <span
                    key={value}
                    style={{
                      height: `${value}%`,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="dashboard-panel rounded-[24px] p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-300 uppercase">
                NexiTrade highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {nexiTradeHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 rounded-xl border border-slate-700/80 bg-slate-900/55 px-3 py-2"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashboard-panel rounded-[24px] p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-300 uppercase">
                Delivery priorities
              </p>
              <div className="mt-4 space-y-3">
                {[
                  'Reduce settlement friction',
                  'Improve client onboarding quality',
                  'Expand automation coverage',
                ].map((priority) => (
                  <div
                    key={priority}
                    className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/55 px-3 py-2"
                  >
                    <span className="text-sm text-slate-200">{priority}</span>
                    <span className="text-[10px] font-semibold text-cyan-300">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ServicesSection({
  selectedModuleId,
  selectedHud,
  selectedModule,
  onSelectModule,
  onStartEnquiry,
}: {
  selectedModuleId: ServiceModuleId
  selectedHud: (typeof moduleHudContent)[ServiceModuleId]
  selectedModule: { shortLabel?: string } | undefined
  onSelectModule: (id: ServiceModuleId) => void
  onStartEnquiry: (preset: EnquiryPreset) => void
}) {
  const ActiveModuleIcon = moduleIcons[selectedModuleId]

  return (
    <section id="services" className="deck-section space-y-6">
      <div className="glass-card rounded-[30px] p-6 md:p-8">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-indigo-700 uppercase">
          Services
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-slate-900 md:text-5xl">
          Pick a capability and see how the system is designed.
        </h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {serviceModules.map((module) => {
            const Icon = moduleIcons[module.id]

            return (
              <button
                key={module.id}
                type="button"
                onClick={() => onSelectModule(module.id)}
                className={`service-card rounded-[28px] border p-5 text-left ${
                  module.id === selectedModuleId ? 'service-card-active' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: module.color }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-600 uppercase">
                    Explore
                  </span>
                </div>

                <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  {module.shortLabel}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{module.summary}</p>
              </button>
            )
          })}
        </div>

        <aside className="detail-card rounded-[30px] p-5 md:p-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            <ActiveModuleIcon size={12} />
            {selectedModule?.shortLabel ?? 'Selected module'} focus
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.06em] text-slate-900">
            {selectedHud.caseStudyTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {selectedHud.caseStudySummary}
          </p>

          <div className="mt-5 space-y-3">
            {selectedHud.architectureLines.map((line, index) => (
              <div
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-500">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-700">{line}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onStartEnquiry({ track: 'service', service: selectedModuleId })}
              className="button-primary rounded-full px-4 py-3 text-sm"
            >
              Request service briefing
              <ArrowRight size={15} className="ml-1.5" />
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-4 py-3 text-sm"
            >
              <MessageCircle size={15} className="mr-1.5" />
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

function TechnologySection() {
  return (
    <section id="technology" className="deck-section space-y-6">
      <div className="glass-card rounded-[32px] p-6 md:p-8">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-indigo-700 uppercase">
          Technology
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-slate-900 md:text-5xl">
          Technology decisions explained in plain business language.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {techStackChoices.map((item, index) => {
          const Icon = techIcons[index % techIcons.length]

          return (
            <article key={item.area} className="tech-card rounded-[26px] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-600 uppercase">
                  <Icon size={13} />
                  {item.area}
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">{item.choice}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.reason}</p>
            </article>
          )
        })}
      </div>

      <div className="rounded-[30px] border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:p-8">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-indigo-200 uppercase">
          Delivery pipeline
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">
          From idea to implementation with clear stages.
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {aiPipelineStages.map((stage, index) => (
            <article key={stage.stage} className="timeline-card rounded-[22px] p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-200 uppercase">
                Stage {index + 1}
              </p>
              <p className="mt-2 text-base font-semibold text-white">{stage.stage}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{stage.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EnquirySection({
  enquiryTrack,
  setEnquiryTrack,
  enquiryService,
  setEnquiryService,
  enquiryMessage,
  setEnquiryMessage,
}: {
  enquiryTrack: EnquiryTrack
  setEnquiryTrack: (value: EnquiryTrack) => void
  enquiryService: ServiceModuleId | 'general'
  setEnquiryService: (value: ServiceModuleId | 'general') => void
  enquiryMessage: string
  setEnquiryMessage: (value: string) => void
}) {
  const enquirySubject = `Website enquiry (${enquiryTrack})`
  const whatsappPrefill = enquiryMessage.trim().length > 0 ? enquiryMessage : defaultWhatsappMessage

  return (
    <section id="enquiry" className="deck-section space-y-6">
      <div className="glass-card rounded-[32px] p-6 md:p-8">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-indigo-700 uppercase">
          Enquiry
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-slate-900 md:text-5xl">
          Send a real service enquiry.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
          Use this form for project, enterprise, or investor-related requests. For faster
          conversation, you can also chat directly on WhatsApp Business.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <form
          action="https://formsubmit.co/info@nexicore.dev"
          method="POST"
          className="glass-card rounded-[30px] p-5 md:p-6"
        >
          <input type="hidden" name="_subject" value={enquirySubject} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Full name</span>
              <input
                name="full_name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Work email</span>
              <input
                name="work_email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Company / team</span>
              <input
                name="company"
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Enquiry track</span>
              <select
                name="enquiry_track"
                value={enquiryTrack}
                onChange={(event) => setEnquiryTrack(event.target.value as EnquiryTrack)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="general">General enquiry</option>
                <option value="enterprise">Enterprise delivery</option>
                <option value="investor">Investor readiness</option>
                <option value="service">Service-specific request</option>
              </select>
            </label>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Service interest</span>
              <select
                name="service_interest"
                value={enquiryService}
                onChange={(event) =>
                  setEnquiryService(event.target.value as ServiceModuleId | 'general')
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="general">General / not sure yet</option>
                {serviceModules.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-1.5">
              <span className="text-xs font-medium text-slate-700">Timeline</span>
              <input
                name="timeline"
                type="text"
                placeholder="e.g. 4-8 weeks, this quarter"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-1.5">
            <span className="text-xs font-medium text-slate-700">Project brief</span>
            <textarea
              name="project_brief"
              required
              rows={7}
              value={enquiryMessage}
              onChange={(event) => setEnquiryMessage(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button type="submit" className="button-primary rounded-full px-5 py-3 text-sm">
              Send enquiry form
              <ArrowRight size={15} className="ml-1.5" />
            </button>
            <a
              href={`https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(whatsappPrefill)}`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-5 py-3 text-sm"
            >
              <MessageCircle size={15} className="mr-1.5" />
              Continue on WhatsApp
            </a>
          </div>
        </form>

        <aside className="glass-card rounded-[30px] p-5 md:p-6">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            WhatsApp Business
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-900">
            Prefer chat-first? Reach us directly.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Use WhatsApp for quick alignment, then continue with a scoped enquiry form when needed.
          </p>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-3">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Business number
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">+234 810 257 3331</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-3">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Best for
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                <li>• quick pre-engagement questions</li>
                <li>• timing and scope clarification</li>
                <li>• immediate connection before formal brief</li>
              </ul>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-5 rounded-full px-5 py-3 text-sm"
          >
            <MessageCircle size={15} className="mr-1.5" />
            Open WhatsApp chat
          </a>
        </aside>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section id="about" className="deck-section space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
        <article className="glass-card rounded-[32px] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div className="founder-photo-wrap">
              <img
                src={founderProfile.photoUrl}
                alt={founderProfile.name}
                className="founder-photo"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-slate-900">
                {founderProfile.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{founderProfile.role}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  <MapPin size={14} />
                  {founderProfile.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5">
                  <BriefcaseBusiness size={14} />
                  Systems architecture
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                {founderProfile.background}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {founderProfile.philosophy}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${founderProfile.email}`}
              className="button-primary rounded-full px-5 py-3 text-sm"
            >
              <Mail size={15} className="mr-1.5" />
              {founderProfile.email}
            </a>
            <a
              href={founderProfile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full px-5 py-3 text-sm"
            >
              <Linkedin size={15} className="mr-1.5" />
              Connect on LinkedIn
            </a>
          </div>
        </article>

        <article className="glass-card rounded-[32px] p-6 md:p-8">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            Trust signals
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-slate-900">
            Business verification and readiness.
          </h3>

          <div className="mt-5 space-y-3">
            {corporateCredentials.map((credential) => (
              <div
                key={credential.asset}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600">
                  <BadgeCheck size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{credential.asset}</p>
                  <p className="mt-1 text-xs text-slate-500">{credential.provider}</p>
                  <p className="mt-2 text-xs font-medium text-emerald-700">{credential.status}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function App() {
  return <AppLayout />
}

export default App
