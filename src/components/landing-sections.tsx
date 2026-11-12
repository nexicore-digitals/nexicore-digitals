import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChartColumnBig,
  CheckCircle2,
  ChevronRight,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
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
} from '../content'
import {
  audiencePaths,
  buildReasonHighlights,
  compactText,
  contextPrimers,
  dashboardKpiCards,
  dashboardTechnologyBadges,
  defaultWhatsappMessage,
  founderFocusAreas,
  founderStoryPrimers,
  idealClientProfiles,
  moduleIcons,
  notebookMockup,
  outcomeHighlights,
  proofPrimers,
  sectionImages,
  serviceTechnologyBadges,
  storyIcons,
  techIcons,
  technologyLogoBadges,
  trustSignals,
  whatsappBusinessNumber,
  whatsappLink,
} from '../landing/constants'
import type { EnquiryPreset, EnquiryTrack } from '../landing/types'
import { serviceModules, type ServiceModuleId } from '../modules'
import { SectionVisual } from './SectionVisual'

type StartEnquiryHandler = (preset: EnquiryPreset) => void

export function StorySection({ onStartEnquiry }: { onStartEnquiry: StartEnquiryHandler }) {
  return (
    <section id="overview" className="deck-section space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
        <article className="glass-card hero-stage h-full rounded-[32px] p-6 md:p-8">
          <div className="hero-glow" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
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

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <article id="context" className="glass-card rounded-[28px] p-5">
          <SectionVisual
            image={sectionImages.context}
            alt="Business context visual summary"
            className="mb-4 rounded-2xl"
            preload
          />

          <div className="intro-chip-grid mb-4 grid gap-2 sm:grid-cols-3">
            {contextPrimers.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="intro-chip rounded-2xl p-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-700">
                  <Icon size={14} />
                </span>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-slate-700 uppercase">
                  {title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{detail}</p>
              </div>
            ))}
          </div>

          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            Business context
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-900">
            What this means for your team.
          </h3>

          <div className="grid gap-3 text-sm sm:grid-cols-3">
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Service coverage
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                {serviceMatrix.length} capabilities
              </p>
            </div>
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Delivery ownership
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                Direct accountability
              </p>
            </div>
            <div className="metric-chip rounded-2xl p-4">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                Compliance posture
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-900">
                CAC active
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

          <details className="case-detail mt-4 rounded-2xl border border-slate-200 bg-white/75 p-3">
            <summary className="case-detail-summary">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Representative outcomes
              </span>
              <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
            </summary>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {outcomeHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs leading-relaxed text-slate-700"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </details>
        </article>

        <article id="engagement" className="glass-card rounded-[28px] p-5 md:p-6">
          <SectionVisual
            image={sectionImages.engagement}
            alt="Engagement flow visual"
            className="mb-4 rounded-2xl"
          />

          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-700 uppercase">
            Engagement process
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-900">
            How we move from first conversation to execution brief.
          </h3>

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
        <SectionVisual
          image={sectionImages.proof}
          alt="Proof narrative visual"
          className="mt-4 w-full rounded-2xl"
        />
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

              <div className="proof-primer mt-3 grid gap-2 sm:grid-cols-3">
                {proofPrimers.map(({ label, icon: PrimerIcon }) => (
                  <div
                    key={label}
                    className="proof-primer-step inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2"
                  >
                    <PrimerIcon size={13} />
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {study.outcomes.slice(0, 2).map((outcome) => (
                  <span
                    key={outcome}
                    className="inline-flex items-start gap-2 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{outcome}</span>
                  </span>
                ))}
              </div>

              <details className="case-detail mt-3 rounded-xl border border-slate-200 bg-white/75 p-3">
                <summary className="case-detail-summary">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Open full case narrative
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
                </summary>
                <div className="mt-2 rounded-xl border border-slate-200 bg-white/80 p-3">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Challenge
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{study.challenge}</p>
                </div>
                <div className="mt-3 rounded-xl border border-slate-200 bg-white/80 p-3">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Intervention
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {study.intervention}
                  </p>
                </div>
                <ul className="mt-2 space-y-2">
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="inline-flex items-start gap-2 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function ProductDashboardSection() {
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

            <SectionVisual
              image={sectionImages.dashboard}
              alt="Dashboard operations visual"
              className="dashboard-visual-shell rounded-2xl"
            />

            <div className="flex flex-wrap gap-2">
              {dashboardTechnologyBadges.map(({ label, iconSrc }) => (
                <span
                  key={label}
                  className="tech-logo-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-100"
                >
                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="tech-logo-icon h-3.5 w-3.5"
                    loading="lazy"
                    decoding="async"
                    width={14}
                    height={14}
                  />
                  {label}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {dashboardKpiCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="dashboard-kpi-card rounded-2xl p-3">
                  <p className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-slate-300 uppercase">
                    <Icon size={13} />
                    {label}
                  </p>
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

export function ServicesSection({
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
  onStartEnquiry: StartEnquiryHandler
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
        <SectionVisual
          image={sectionImages.services}
          alt="Services architecture visual"
          className="mt-5 rounded-2xl"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {serviceModules.map((module) => {
            const Icon = moduleIcons[module.id]
            const moduleBadges = serviceTechnologyBadges[module.id]

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
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {compactText(module.summary, 88)}
                </p>
                {moduleBadges.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {moduleBadges.map(({ label, iconSrc }) => (
                      <span
                        key={`${module.id}-${label}`}
                        className="tech-logo-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        <img
                          src={iconSrc}
                          alt=""
                          aria-hidden="true"
                          className="tech-logo-icon h-3.5 w-3.5"
                          loading="lazy"
                          decoding="async"
                          width={14}
                          height={14}
                        />
                        {label}
                      </span>
                    ))}
                  </div>
                )}
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
            {compactText(selectedHud.caseStudySummary, 150)}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {(serviceTechnologyBadges[selectedModuleId] ?? []).map(({ label, iconSrc }) => (
              <span
                key={`selected-${label}`}
                className="tech-logo-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700"
              >
                <img
                  src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="tech-logo-icon h-3.5 w-3.5"
                  loading="lazy"
                  decoding="async"
                  width={14}
                  height={14}
                />
                {label}
              </span>
            ))}
          </div>

          <details className="case-detail mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <summary className="case-detail-summary">
              <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Architecture breakdown
              </span>
              <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
            </summary>
            <div className="mt-3 space-y-3">
              {selectedHud.architectureLines.map((line, index) => (
                <div
                  key={line}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-500">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">{line}</p>
                </div>
              ))}
            </div>
          </details>

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

export function TechnologySection() {
  const featuredTechChoices = techStackChoices.slice(0, 4)
  const extendedTechChoices = techStackChoices.slice(4)

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
        {featuredTechChoices.map((item, index) => {
          const Icon = techIcons[index % techIcons.length]
          const highlights = buildReasonHighlights(item.reason).slice(0, 2)
          const stackLogos = technologyLogoBadges[item.area] ?? []

          return (
            <article key={item.area} className="tech-card rounded-[26px] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-600 uppercase">
                  <Icon size={13} />
                  {item.area}
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">{item.choice}</p>
              {stackLogos.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {stackLogos.map(({ label, iconSrc }) => (
                    <span
                      key={label}
                      className="tech-logo-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      <img
                        src={iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="tech-logo-icon h-3.5 w-3.5"
                        loading="lazy"
                        decoding="async"
                        width={14}
                        height={14}
                      />
                      {label}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/75 px-2.5 py-1 text-[11px] font-medium text-indigo-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <details className="case-detail mt-3 rounded-xl border border-slate-200 bg-white/75 p-3">
                <summary className="case-detail-summary">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Why this matters
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.reason}</p>
              </details>
            </article>
          )
        })}
      </div>

      <details className="case-detail rounded-[24px] border border-slate-200 bg-white/75 p-4">
        <summary className="case-detail-summary">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
            View full stack map ({extendedTechChoices.length} more)
          </span>
          <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
        </summary>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {extendedTechChoices.map((item, index) => {
            const Icon = techIcons[(index + 2) % techIcons.length]
            const highlights = buildReasonHighlights(item.reason).slice(0, 2)
            const stackLogos = technologyLogoBadges[item.area] ?? []

            return (
              <article key={item.area} className="tech-card rounded-[24px] p-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-600 uppercase">
                  <Icon size={13} />
                  {item.area}
                </span>
                <p className="mt-3 text-base font-semibold text-slate-900">{item.choice}</p>
                {stackLogos.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {stackLogos.map(({ label, iconSrc }) => (
                      <span
                        key={label}
                        className="tech-logo-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        <img
                          src={iconSrc}
                          alt=""
                          aria-hidden="true"
                          className="tech-logo-icon h-3.5 w-3.5"
                          loading="lazy"
                          decoding="async"
                          width={14}
                          height={14}
                        />
                        {label}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  {highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/75 px-2.5 py-1 text-[11px] font-medium text-indigo-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </details>

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

export function EnquirySection({
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

export function FounderSection() {
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

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {founderStoryPrimers.map(({ label, detail, icon: Icon }) => (
                  <div key={label} className="founder-primer-chip rounded-xl px-3 py-2">
                    <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] text-slate-600 uppercase">
                      <Icon size={13} />
                      {label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{detail}</p>
                  </div>
                ))}
              </div>

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
                {compactText(founderProfile.background, 128)}
              </p>

              <details className="case-detail mt-4 rounded-2xl border border-slate-200 bg-white/75 p-3">
                <summary className="case-detail-summary">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Founder details
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">Tap to expand</span>
                </summary>
                <div className="mt-3">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Focus areas
                  </p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {founderFocusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-xl border border-slate-200 bg-white/80 p-3">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                    Operating principle
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {founderProfile.philosophy}
                  </p>
                </div>
              </details>
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
