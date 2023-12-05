import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { TableState } from "../tableSlice.interface";

export const fetchForTableData = createAsyncThunk<TableState, string>(
  "table/list",
  async (filter) => {
    const response = await api.get(`/table?filter=${filter}`)
    return response?.data ?? []
  }
)