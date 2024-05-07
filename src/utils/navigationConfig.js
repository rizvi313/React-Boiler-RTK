const filterNavItems = (navItems, userScopes) => {
  return navItems.filter((navItem) => {
    if (navItem.items) {
      navItem.items = filterNavItems(navItem.items, userScopes)
      return navItem.items.length > 0
    } else if (navItem.scopes && navItem.scopes.length > 0) {
      return navItem.scopes.some((scope) => userScopes?.includes(scope))
    }

    return true
  })
}

const filterRoutes = (routes, userScopes) => {
  return routes.filter((route) => {
    if (route.scopes.includes('DASHBOARD')) return true
    return route.scopes.some((scope) => userScopes?.includes(scope))
  })
}

export { filterNavItems, filterRoutes }
