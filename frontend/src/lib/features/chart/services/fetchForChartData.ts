import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { FetchForChartDataResponse } from "../chartSlice.interface";

export const fetchForChartData = createAsyncThunk<FetchForChartDataResponse, string>(
  "chart/list",
  async (filter: string) => {
    const response = await api.get(`/chart?filter=${filter}`)
    return response?.data ?? []
  }
)