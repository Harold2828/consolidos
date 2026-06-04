import { useEffect, useMemo, useState, type MouseEvent } from 'react'

type RouteDefinition<Page extends string> = {
  path: string
  page: Page
}

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }

  return path || '/'
}

export function usePageNavigation<Page extends string>(
  routes: readonly RouteDefinition<Page>[],
  defaultPage: Page,
) {
  const routeMap = useMemo(() => {
    return new Map(routes.map((route) => [normalizePath(route.path), route.page]))
  }, [routes])

  const getCurrentPage = () => {
    const currentPath = normalizePath(window.location.pathname)
    return routeMap.get(currentPath) ?? defaultPage
  }

  const [page, setPage] = useState<Page>(getCurrentPage)

  useEffect(() => {
    const handlePopState = () => {
      setPage(getCurrentPage())
      window.scrollTo({ top: 0 })
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [routeMap])

  const navigateTo = (path: string, event?: MouseEvent<HTMLAnchorElement>) => {
    if (
      event &&
      (event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey)
    ) {
      return
    }

    event?.preventDefault()

    const nextPath = normalizePath(path)

    if (normalizePath(window.location.pathname) !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }

    setPage(routeMap.get(nextPath) ?? defaultPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkProps = (path: string) => {
    const normalizedPath = normalizePath(path)
    const isCurrent = normalizePath(window.location.pathname) === normalizedPath

    return {
      href: normalizedPath,
      onClick: (event: MouseEvent<HTMLAnchorElement>) => navigateTo(normalizedPath, event),
      'aria-current': isCurrent ? ('page' as const) : undefined,
    }
  }

  return {
    page,
    linkProps,
    navigateTo,
  }
}
