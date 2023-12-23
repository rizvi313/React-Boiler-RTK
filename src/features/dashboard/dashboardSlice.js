import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dashboardService from './dashboardService'

const initialState = {
  dashboardDetails: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

// Login User
export const getDashboardDetails = createAsyncThunk(
  'dashboard/getDashboardDetails',
  async (userToken, thunkAPI) => {
    try {
      return await dashboardService.getDashboardDetailsData(userToken)
    } catch (error) {
      console.debug(error)
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getDashboardDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.dashboardDetails = action.payload?.data?.data
        state.message = action.payload?.data?.message
      })
      .addCase(getDashboardDetails.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = dashboardSlice.actions
export default dashboardSlice.reducer
