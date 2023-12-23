import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { useSelector } from 'react-redux'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Navigation = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" element={user ? <DefaultLayout /> : <Login />} />

          <Route exact path="/404" element={<Page404 />} />
          <Route exact path="/500" element={<Page500 />} />
          <Route path="/*" element={user ? <DefaultLayout /> : <Login />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default Navigation
