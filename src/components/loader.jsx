import { CSpinner } from '@coreui/react'
import React from 'react'

const loader = () => {
  return (
    <div className="d-flex justify-content-center">
    <CSpinner color="spinner-border text-spinner-selector" />
  </div>
  )
}

export default loader