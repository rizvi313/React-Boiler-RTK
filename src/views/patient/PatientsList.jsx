import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatients, reset } from 'src/features/patient/patientSlice'
import toast from 'react-hot-toast'
import {
  CButton,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Loader from '../../components/loader'
import AddPatient from './AddPatient'
import Pagination from 'src/components/Pagination'

const PatientsList = () => {
  const { patients, isLoading, isError, isSuccess, message } = useSelector((state) => state.patient)
  const dispatch = useDispatch()
  const [addPatient, setAddPatient] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    // Update state or trigger data fetch
    setCurrentPage(newPage);
  };

  const decrementPage = () => {
    const count = currentPage - 1;
    setCurrentPage(count);
    if(patients?.length > 0) {
      
      filters.page = count
      dispatch(getPatients(filters))
    }
  }

  const incrementPage = () => {
    const count = currentPage + 1;
    setCurrentPage(count);
    if(patients?.length > 0) {
      
      filters.page = count
      dispatch(getPatients(filters))
    }
  }

  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: '',
  })


  useEffect(() => {
    if (!patients) {
      console.debug(filters)
      dispatch(getPatients(filters))
      setFilters({
        page: 1,
        limit: 10,
        search: '',
      }) /// Just For Time being 
    }
  }, [])

  // useEffect(() => {
  //   console.debug('filters', filters)
  //   if(patients?.length > 0) {
      
  //     filters.page = currentPage
  //     dispatch(getPatients(filters))
  //   }
  // }, [currentPage])

  useEffect(() => {
    if (isError) {
      toast.error(message)
      dispatch(reset())
    }
  }, [isError, message])

  useEffect(() => {
    if (isSuccess) {
      toast.success(message)
      dispatch(reset())
    }
  }, [isSuccess, message])

  if (addPatient) {
    return <AddPatient />
  }

  return (
    <>
      <CContainer>
        <CRow className="pt-3 pb-3">
          <CCol xs="auto" className="me-auto">
            <h3>Patient List</h3>
          </CCol>
          <CCol xs="auto">
            <CButton
              onClick={() =>
                setAddPatient(!addPatient)}
            >
              Add Patient
            </CButton>
          </CCol>
        </CRow>
        <CTable>
          <CTableHead color="primary">
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {console.debug(patients)}
            {patients?.length > 0 && (
              <>
                {patients.map((option, index) => (
                  <>
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>
                        {index + 1}
                      </CTableHeaderCell>
                      <CTableDataCell>{option?.firstName}</CTableDataCell>
                      <CTableDataCell>{option?.lastName}</CTableDataCell>
                      <CTableDataCell>{option?.gender?.toUpperCase()}</CTableDataCell>
                    </CTableRow>
                  </>
                ))}
              </>
            )}
          </CTableBody>
        </CTable>
        {isLoading && (
          <>
            <Loader />
          </>
        )}
        {patients?.length === 0 && (
          <div className="col-12 p-3 text-center">
            <h4>No Record Found!</h4>
          </div>
        )}
      </CContainer>
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} decrementPage={decrementPage} incrementPage={incrementPage} />
    </>
  )
}

export default PatientsList
