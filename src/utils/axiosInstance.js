import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

const baseURL = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_SERVER_LINK}/`

let authTokens = localStorage.getItem('authTokens')
  ? JSON.parse(localStorage.getItem('authTokens'))
  : null

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens?.access}` },
})
console.debug('creating axiosInstance', authTokens)
console.debug('req axiosInstance', !authTokens)
axiosInstance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
    req.headers.Authorization = `Bearer ${authTokens?.access}`
  }

  const user = jwt_decode(authTokens.access)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

  if (!isExpired) return req

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.authTokens?.access}`,
    },
  }
  const response = await axios.post(
    `${baseURL}api/auth/refresh-token`,
    {
      token: authTokens.refresh,
    },
    config,
  )

  localStorage.setItem('authTokens', JSON.stringify(response.data))
  req.headers.Authorization = `Bearer ${response.data.access}`
  return req
})

export default axiosInstance
