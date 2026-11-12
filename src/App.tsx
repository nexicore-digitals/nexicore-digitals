import { useEffect, useMemo, useState } from 'react'
import { MessageCircle } from 'lucide-react'
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
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:flex-nowrap md:gap-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src={nexicoreLogo} alt="Nexicore logo" className="h-10 w-auto" />
            <div>
              <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
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
    </div>
  )
}

function App() {
  return <AppLayout />
}

export default App
