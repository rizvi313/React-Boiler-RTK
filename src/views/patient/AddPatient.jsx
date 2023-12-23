import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'
import React from 'react'
import { useDoctorStore } from 'src/zustandStore'
import { cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const AddPatient = () => {
  return (
    <CCard className="p-3">
      <CContainer>
        <CRow className="pb-3">
          <CCol xs="auto" className="me-auto">
            <h3>Add Doctors</h3>
          </CCol>
          <CCol xs="auto">
            <CIcon
              icon={cilX}
              size="xl"
              onClick={() =>
                useDoctorStore.setState({
                  addDoctor: false,
                })
              }
            />
          </CCol>
        </CRow>
        <CForm>
          <CRow className="align-items-start pb-3">
            <CCol>
              <CFormInput
                type="text"
                label="First Name"
                placeholder="Syed"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol>
              <CFormInput
                type="email"
                label="Last Name"
                placeholder="Saif"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>{' '}
            <CCol>
              <CFormInput
                type="text"
                label="DOB"
                placeholder="13/01/2000"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow className="align-items-start pb-3">
            <CCol>
              <CFormSelect
                aria-label="Default select example"
                label="Gender"
                options={['Select', { label: 'Male', value: '1' }, { label: 'Female', value: '2' }]}
              />
            </CCol>
            <CCol>
              <CFormSelect
                aria-label="Default select example"
                label="Specialty"
                options={[
                  'Select',
                  { label: 'Cardiologist', value: '1' },
                  { label: 'Neurologist', value: '2' },
                ]}
              />
            </CCol>{' '}
            <CCol>
              <CFormInput
                type="number"
                label="Phone Number"
                placeholder="03350316727"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
          <CRow className="align-items-start pb-3">
            <CCol>
              <CFormInput
                type="email"
                label="Email"
                placeholder="Syed@gmail.com"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol>
              <CFormInput
                type="number"
                label="CNIC"
                placeholder="42201-1325443-5"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>{' '}
            <CCol>
              <CFormInput
                type="text"
                label="Username"
                placeholder="syed_saif_123"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
        </CForm>
        <CRow className="pt-3">
          <CCol xs="auto">
            <CButton
              color="dark" variant="outline"
              onClick={() =>
                useDoctorStore.setState({
                  addDoctor: true,
                })
              }
            >
              Cancel
            </CButton>
          </CCol>
          <CCol xs="auto">
            <CButton
              onClick={() =>
                useDoctorStore.setState({
                  addDoctor: false,
                })
              }
            >
              Add Doctor
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </CCard>
  )
}

export default AddPatient
