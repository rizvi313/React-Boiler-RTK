import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Charts = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home', scopes: [], category: 'MASTERS' },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
    scopes: ['DASHBOARD'],
    category: 'DASHBOARD',
  },
  {
    path: '/missinga',
    name: 'Missing A',
    element: Charts,
    exact: true,
    scopes: ['MISSING_A_LIST', 'MISSING_A_EDIT'],
    category: 'DASHBOARD',
  },
  {
    path: '/missingb',
    name: 'Missing B',
    // element: CustomerList,
    scopes: ['MISSING_B_LIST', 'MISSING_A_EDIT'],
    category: 'DASHBOARD',
  },
  {
    path: '/missingc',
    name: 'Missing C',
    // element: SalesRepList,
    scopes: ['MISSING_C_LIST', 'MISSING_C_EDIT'],
    category: 'DASHBOARD',
  },
  {
    path: '/setting',
    name: 'Setting',
    // element: UserList,
    exact: true,
    scopes: ['CHANGE_PASSWORD', 'USER_LIST', 'ROLES_LIST'],
    category: 'SETTINGS',
  },
  {
    path: '/users',
    name: 'Setting',
    // element: UserList,
    scopes: ['USER_LIST'],
    category: 'SETTINGS',
  },
  {
    path: '/change-password',
    name: 'Setting',
    // element: ChangePassword,
    scopes: ['CHANGE_PASSWORD'],
    category: 'SETTINGS',
  },
  {
    path: '/roles',
    name: 'Setting',
    // element: RoleList,
    scopes: ['ROLES_LIST'],
    category: 'SETTINGS',
  },
]

export default routes
