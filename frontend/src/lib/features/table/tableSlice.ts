import { createSlice } from "@reduxjs/toolkit";
import { TableState } from "./tableSlice.interface";
import { fetchForTableData } from "./services/fetchForTableData";

const initialState: TableState = {
  columns: [],
  isLoading: false,
}

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchForTableData.pending, state => {
      state.isLoading = true
    })

    builder.addCase(fetchForTableData.fulfilled, (state, action) => {
      state.isLoading = false
      state.columns = action.payload.columns
    })

    builder.addCase(fetchForTableData.rejected, state => {
      state.isLoading = false
    })
  }
})

export const {
} = tableSlice.actions
export default tableSlice.reducer;