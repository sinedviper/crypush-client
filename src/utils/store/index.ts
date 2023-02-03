import { configureStore } from '@reduxjs/toolkit'

import { languageReducer, themeReducer } from './slice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
