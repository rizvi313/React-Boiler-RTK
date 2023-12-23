import axiosInstance from 'src/utils/axiosInstance'

const getDashboardDetailsData = async (credentials) => {
  const response = await axiosInstance.get('api/admin/auth/dashboard')
  return response
}

const dashboardService = {
  getDashboardDetailsData,
}

export default dashboardService
