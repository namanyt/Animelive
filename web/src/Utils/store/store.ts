import { configureStore, createSlice } from '@reduxjs/toolkit'
import { pageViewSlice } from './pageView'

export const store = configureStore({
  reducer: {
    page: pageViewSlice.reducer
  },
})
