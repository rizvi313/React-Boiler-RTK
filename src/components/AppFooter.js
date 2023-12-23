import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        GenX Health Care System
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://" target="_blank" rel="noopener noreferrer">
          GEN-X
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
