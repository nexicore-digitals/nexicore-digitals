import { useEffect, useMemo, useState } from 'react'
import {
  BriefcaseBusiness,
  Cpu,
  LayoutDashboard,
  Home,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import { moduleHudContent } from './content'
import {
  buildEnquiryMessage,
  navigationItems,
  nexicoreLogo,
  whatsappLink,
} from './landing/constants'
import type { EnquiryPreset, EnquiryTrack } from './landing/types'
import { serviceModules, type ServiceModuleId } from './modules'
import {
  EnquirySection,
  FounderSection,
  ProductDashboardSection,
  ServicesSection,
  StorySection,
  TechnologySection,
} from './components/landing-sections'

const mobileNavigationItems: Array<{
  label: string
  path: string
  icon: LucideIcon
}> = [
  { label: 'Home', path: '#overview', icon: Home },
  { label: 'Dash', path: '#dashboard', icon: LayoutDashboard },
  { label: 'Service', path: '#services', icon: BriefcaseBusiness },
  { label: 'Technology', path: '#technology', icon: Cpu },
  { label: 'Enquiry', path: '#enquiry', icon: MessageCircle },
]

function AppLayout() {
  const [selectedModuleId, setSelectedModuleId] = useState<ServiceModuleId>('nexitrade')
  const [enquiryTrack, setEnquiryTrack] = useState<EnquiryTrack>('general')
  const [enquiryService, setEnquiryService] = useState<ServiceModuleId | 'general'>('general')
  const [showDeferredSections, setShowDeferredSections] = useState(false)
  const [enquiryMessage, setEnquiryMessage] = useState<string>(
    buildEnquiryMessage({ track: 'general' }),
  )

  const selectedModule = useMemo(
    () => serviceModules.find((module) => module.id === selectedModuleId),
    [selectedModuleId],
  )

  const selectedHud = moduleHudContent[selectedModuleId]

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setShowDeferredSections(true)
    }, 350)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [])

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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 md:gap-4 md:px-8 md:py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src={nexicoreLogo} alt="Nexicore logo" className="h-9 w-auto md:h-10" />
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase md:text-[10px] md:tracking-[0.22em]">
                Nexicore Digital Hub
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navigationItems.map((item) => (
              <a key={item.path} href={item.path} className="transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              type="button"
              onClick={() => startEnquiry({ track: 'general' })}
              className="button-primary rounded-full p-2.5 text-sm md:px-4 md:py-2"
              aria-label="Send enquiry"
            >
              <MessageCircle size={15} className="md:hidden" />
              <span className="hidden md:inline">Send enquiry</span>
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-full p-2.5 text-sm md:px-3 md:py-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </header>

      <main className="main-shell mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-28 pt-6 md:gap-16 md:px-8 md:pb-10 md:pt-8">
        <StorySection onStartEnquiry={startEnquiry} />
        <ProductDashboardSection />
        {showDeferredSections ? (
          <>
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
          </>
        ) : (
          <section aria-live="polite" className="deck-section">
            <div className="glass-card rounded-[28px] p-6 text-sm text-slate-600">
              Preparing detailed service and technology sections…
            </div>
          </section>
        )}
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

      <nav
        aria-label="Mobile section navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/90 bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"
      >
        <div className="grid grid-cols-5 gap-2">
          {mobileNavigationItems.map(({ label, path, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="inline-flex flex-col items-center justify-center gap-1.5 rounded-2xl px-1 py-2 text-[11px] leading-none font-medium text-slate-700 transition hover:bg-slate-100/90 hover:text-slate-900"
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

function App() {
  return <AppLayout />
}

export default App
