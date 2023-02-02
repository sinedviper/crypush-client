import { useDispatch as Dispatch, useSelector as Selector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import type { RootState, AppDispatch } from '../store'

export const useDispatch: () => AppDispatch = Dispatch
export const useSelector: TypedUseSelectorHook<RootState> = Selector
