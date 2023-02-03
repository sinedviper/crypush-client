import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

export interface ScrollState {
  scroll: number
}

const initialState: ScrollState = {
  scroll: 0,
}

export const scrollSlice = createSlice({
  name: '@@scroll',
  initialState,
  reducers: {
    actionClearScroll: () => initialState,
    actionChangeScroll: (state: Draft<ScrollState>, action: PayloadAction<number>) => {
      state.scroll = action.payload
    },
  },
})

export const scrollReducer = scrollSlice.reducer

export const { actionClearScroll, actionChangeScroll } = scrollSlice.actions
