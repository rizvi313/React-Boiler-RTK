import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSettings, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    scopes: [],
    category: 'DASHBOARD',
  },
  {
    component: CNavItem,
    name: 'Missing A',
    to: '/missinga',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    scopes: ['MISSING_A_LIST', 'MISSING_A_EDIT'],
  },
  {
    component: CNavGroup,
    name: 'Setting',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Change Password',
        to: '/change-password',
        scopes: ['CHANGE_PASSWORD'],
        category: 'SETTINGS',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/users',
        scopes: ['USER_LIST'],
        category: 'SETTINGS',
      },
      {
        component: CNavItem,
        name: 'Roles',
        to: '/roles',
        scopes: ['ROLES_LIST'],
        category: 'SETTINGS',
      },
    ],
    scopes: ['CHANGE_PASSWORD', 'USER_LIST', 'ROLES_LIST  '],
    category: 'SETTINGS',
  },
]

export default _nav
