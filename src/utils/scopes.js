export const SCOPES_LIST = {
  DASHBOARD: [
    {
      title: 'Missing A',
      scopes: ['MISSING_A_LIST', 'MISSING_A_EDIT'],
    },
    {
      title: 'Missing B',
      scopes: ['MISSING_B_LIST', 'MISSING_B_EDIT'],
    },
    {
      title: 'Missing C',
      scopes: ['MISSING_C_LIST', 'MISSING_C_EDIT'],
    },
  ],
  SETTINGS: [
    { title: 'CHANGE_PASSWORD', scopes: ['CHANGE_PASSWORD'] },
    { title: 'USER', scopes: ['USER_LIST', 'USER_EDIT'] },
    { title: 'ROLES', scopes: ['ROLES_LIST', 'ROLES_EDIT'] },
  ],
}

export const SCOPES = [
  // MASTERS
  'Missing_A_LIST',
  'Missing_A_EDIT',
  'Missing_B_LIST',
  'Missing_B_EDIT',
  'Missing_C_LIST',
  'Missing_C_EDIT',
  // SETTINGS
  'CHANGE_PASSWORD',
  'USER_LIST',
  'USER_EDIT',
  'ROLES_LIST',
  'ROLES_EDIT',
]
