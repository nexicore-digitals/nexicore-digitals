import type { SectionImageAsset } from '../landing/constants'
import { ProgressiveImage } from './ProgressiveImage'

type SectionVisualProps = {
  image: SectionImageAsset
  alt: string
  className?: string
  sizes?: string
  preload?: boolean
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function SectionVisual({
  image,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 960px',
  preload = false,
  loading = 'lazy',
  fetchPriority = 'auto',
}: SectionVisualProps) {
  return (
    <ProgressiveImage
      src={image.src}
      placeholderSrc={image.placeholderSrc}
      srcSet={image.srcSet}
      alt={alt}
      width={960}
      height={320}
      sizes={sizes}
      preload={preload}
      loading={loading}
      fetchPriority={fetchPriority}
      className={joinClasses('section-visual-shell', className)}
      imgClassName="section-visual-image"
    />
  )
}
