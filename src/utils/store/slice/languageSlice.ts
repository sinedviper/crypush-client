import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { languageType } from 'utils/types'

function languageDefault(): languageType {
  const languageSystem = navigator.language.split('').slice(0, 2).join('')

  switch (languageSystem) {
    case 'ru': {
      return 'ru'
    }
    case 'uk': {
      return 'uk'
    }
    default: {
      return 'en'
    }
  }
}

interface LanguageState {
  language: languageType
}

const initialState: LanguageState = {
  language: languageDefault(),
}

export const languageSlice = createSlice({
  name: '@@language',
  initialState,
  reducers: {
    actionChangeLanguage: (state, action: PayloadAction<languageType>) => {
      state.language = action.payload
    },
  },
})

export const { actionChangeLanguage } = languageSlice.actions

export const languageReducer = languageSlice.reducer
