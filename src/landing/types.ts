import type { ServiceModuleId } from '../modules'

export type EnquiryTrack = 'general' | 'enterprise' | 'investor' | 'service'

export type EnquiryPreset = {
  track: EnquiryTrack
  service?: ServiceModuleId
}
