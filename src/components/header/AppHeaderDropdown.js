import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

const AppHeaderDropdown = () => {
  const { user } = useSelector((state) => state.auth)
  const disptach = useDispatch()
  const Logout = () => {
    console.debug('Logout')
    disptach(reset())
    disptach(logout())
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar color="primary" size="md" style={{ color: 'white' }}>
          {user?.user?.username[0]?.toUpperCase()}
        </CAvatar>
      </CDropdownToggle>
      <CDropdownMenu style={{ cursor: 'pointer' }}>
        <CDropdownItem>{user?.user?.username}</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={Logout}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CIcon icon={cilLockLocked} className="me-2" size="xl" /> Logout
          </div>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
