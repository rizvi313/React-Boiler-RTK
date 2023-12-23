// PaginationComponent.js
import { CPagination, CPaginationItem } from '@coreui/react'
import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange, decrementPage, incrementPage }) => {
  // Pagination logic goes here
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <>
      <CPagination aria-label="Page navigation example">
        <CPaginationItem onClick={() => decrementPage()}>Previous</CPaginationItem>
        {pageNumbers.map((page) => (
          <CPaginationItem
            key={page}
            className={`page-number ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </CPaginationItem>
        ))}
        <CPaginationItem onClick={() => incrementPage()}>Next</CPaginationItem>
      </CPagination>
    </>
  )
}

export default Pagination
