import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import { filterRoutes } from 'src/utils/navigationConfig'
import { useSelector } from 'react-redux'

const AppContent = () => {
  const { user } = useSelector((state) => state.auth)
  const userRoutes = filterRoutes(routes, user?.scopes)
  console.debug('userRoutes', userRoutes, 'route', routes, 'user', user)
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {userRoutes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
