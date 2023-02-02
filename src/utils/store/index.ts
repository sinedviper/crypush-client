import { configureStore } from '@reduxjs/toolkit'

import { languageReducer } from './slice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
