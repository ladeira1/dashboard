import { createSlice } from "@reduxjs/toolkit";
import { ChartState } from "./chartSlice.interface";
import { fetchForChartData } from "./services/fetchForChartData";

const initialState: ChartState = {
  chartOptions: [],
  series: [],
  isLoading: false,
}

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchForChartData.pending, state => {
      state.isLoading = true
    })

    builder.addCase(fetchForChartData.fulfilled, (state, action) => {
      state.isLoading = false
      state.series = action.payload.series
      state.chartOptions = action.payload.chartOptions
    })

    builder.addCase(fetchForChartData.rejected, state => {
      state.isLoading = false
    })
  }
})

export const {
} = chartSlice.actions
export default chartSlice.reducer;