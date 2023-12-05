import { configureStore } from '@reduxjs/toolkit'
import widgetReducer from './features/widget/widgetSlice'
import chartReducer from './features/chart/chartSlice'
import tableReducer from './features/table/tableSlice'
import cardReducer from "./features/card/cardSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      widget: widgetReducer,
      chart: chartReducer,
      table: tableReducer,
      card: cardReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']