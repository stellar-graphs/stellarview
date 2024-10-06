import { twMerge } from "tailwind-merge"
import { siteConfig } from '@/lib/config'
import { type ClassValue, clsx } from 'clsx'
import type { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}
export function ny(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || siteConfig.url}${path}`
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = absoluteUrl('/og'),
  ...props
}: {
  title?: string
  description?: string
  image?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
     title: {
        template: `%s | ${siteConfig.name}`,
        default: siteConfig.name,
     },
     description: description || siteConfig.description,
     keywords: siteConfig.keywords,
     openGraph: {
        title,
        description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
           {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
           },
        ],
        type: 'website',
        locale: 'en_US',
     },
     icons: '/favicon.ico',
     metadataBase: new URL(siteConfig.url),
     authors: [
        {
           name: siteConfig.name,
           url: siteConfig.url,
        },
     ],
     ...props,
  }
}

export function formatDate(date: string) {
  const currentDate = new Date().getTime()
  if (!date.includes('T')) {
     date = `${date}T00:00:00`
  }
  const targetDate = new Date(date).getTime()
  const timeDifference = Math.abs(currentDate - targetDate)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  const fullDate = new Date(date).toLocaleString('en-us', {
     month: 'long',
     day: 'numeric',
     year: 'numeric',
  })

  if (daysAgo < 1) {
     return 'Today'
  }
  else if (daysAgo < 7) {
     return `${fullDate} (${daysAgo}d ago)`
  }
  else if (daysAgo < 30) {
     const weeksAgo = Math.floor(daysAgo / 7)
     return `${fullDate} (${weeksAgo}w ago)`
  }
  else if (daysAgo < 365) {
     const monthsAgo = Math.floor(daysAgo / 30)
     return `${fullDate} (${monthsAgo}mo ago)`
  }
  else {
     const yearsAgo = Math.floor(daysAgo / 365)
     return `${fullDate} (${yearsAgo}y ago)`
  }
}
