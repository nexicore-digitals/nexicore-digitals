import { useEffect, useState } from 'react'

type ProgressiveImageProps = {
  src: string
  alt: string
  width: number
  height: number
  placeholderSrc?: string
  srcSet?: string
  sizes?: string
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
  decoding?: 'sync' | 'async' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
  preload?: boolean
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  placeholderSrc,
  srcSet,
  sizes,
  className,
  imgClassName,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  preload = false,
}: ProgressiveImageProps) {
  const [loadedSource, setLoadedSource] = useState<string | null>(null)

  useEffect(() => {
    if (!preload || typeof document === 'undefined') {
      return
    }

    const existingTag = document.head.querySelector<HTMLLinkElement>(
      `link[data-preload-image="${src}"]`,
    )

    if (existingTag) {
      return
    }

    const preloadTag = document.createElement('link')
    preloadTag.rel = 'preload'
    preloadTag.as = 'image'
    preloadTag.href = src
    preloadTag.setAttribute('data-preload-image', src)

    if (srcSet) {
      preloadTag.setAttribute('imagesrcset', srcSet)
    }

    if (sizes) {
      preloadTag.setAttribute('imagesizes', sizes)
    }

    document.head.append(preloadTag)
  }, [preload, sizes, src, srcSet])

  const showFullImage = loadedSource === src || !placeholderSrc

  return (
    <div className={joinClasses('progressive-image', className)}>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className={joinClasses(
            'progressive-image__placeholder',
            showFullImage ? 'is-hidden' : undefined,
            imgClassName,
          )}
          width={width}
          height={height}
          loading={loading === 'eager' ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : null}

      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={joinClasses(
          'progressive-image__full',
          showFullImage ? 'is-visible' : undefined,
          imgClassName,
        )}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={() => setLoadedSource(src)}
        onError={() => setLoadedSource(src)}
      />
    </div>
  )
}
