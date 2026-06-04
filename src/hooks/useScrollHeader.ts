import { useEffect, useState } from 'react'

export function useScrollHeader() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingDown = currentY > lastY

      setIsAtTop(currentY < 12)
      setIsHidden(scrollingDown && currentY > 120)
      lastY = currentY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isAtTop, isHidden }
}
