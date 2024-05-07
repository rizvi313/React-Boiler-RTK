import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { getDashboardDetails, reset } from 'src/features/dashboard/dashboardSlice'
import toast from 'react-hot-toast'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Loader from '../../components/loader'

const Dashboard = () => {
  const { dashboardDetails, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.dashboard,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!dashboardDetails) {
      dispatch(getDashboardDetails())
    }
  }, [])

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

  return (
    <>
      <WidgetsDropdown dashboardDetails={dashboardDetails} />
      <CTable color="primary">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {dashboardDetails?.doctors?.length > 0 && (
            <>
              {dashboardDetails?.doctors.map((option, index) => (
                <>
                  <CTableRow>
                    <CTableHeaderCell scope="row" key={index}>
                      {index + 1}
                    </CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
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
      {dashboardDetails?.doctors?.length === 0 && (
        <div className="col-12 p-3 text-center">
          <h4>No Record Found!</h4>
        </div>
      )}
    </>
  )
}

export default Dashboard
