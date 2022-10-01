import { createSlice } from '@reduxjs/toolkit'
import { PageView } from '../PageView';

export const pageViewSlice = createSlice({
  name: 'pageView',
  initialState: {
    value: 0,
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { set: setPageView } = pageViewSlice.actions
