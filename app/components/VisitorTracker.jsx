'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function VisitorTracker() {
  const pathname = usePathname()
  const hasTracked = useRef(false)

  useEffect(() => {
    // Only track once per session/page load to avoid duplicate counts in React strict mode
    if (hasTracked.current) return

    const trackVisit = async () => {
      try {
        await fetch('http://localhost:5001/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        hasTracked.current = true
      } catch (error) {
        console.error('Failed to track visitor:', error)
      }
    }

    trackVisit()
  }, []) // empty dependency means it runs once when the app layout mounts

  return null // This component doesn't render anything
}
