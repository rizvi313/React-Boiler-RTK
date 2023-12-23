import axios from 'axios'
import axiosInstance from 'src/utils/axiosInstance'

const baseURL = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_SERVER_LINK}/`

const login = async (credentials) => {
  const response = await axios.post(`${baseURL}api/auth/login`, credentials)
  if (response) {
    const authToken = {
      access: response?.data?.data?.accessToken,
      refresh: response?.data?.data?.refreshToken,
    }
    localStorage.setItem('authTokens', JSON.stringify(authToken))
  }
  return response?.data
}

const logout = async () => {
  const response = await axiosInstance.post(`${baseURL}api/auth/logout`)

  return response?.data
}

const dummyLogin = async (credentials) => {
  if (credentials?.username === 'admin' && credentials?.password === 'admin') {
    return { user: { username: 'admin', password: 'admin' } }
  }
  throw new Error('Invalid credentials') // Throw an error for the "else" case
}

const authService = {
  login,
  logout,
  dummyLogin,
}

export default authService
