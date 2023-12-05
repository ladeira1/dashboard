import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { Serie } from "../cardSlice.interface";

export const fetchUpdateSeries = createAsyncThunk<Serie[], Record<string, any>>(
  "card/update-series",
  async (data) => {
    const response = await api.post("/updateSeries", data)
    return response?.data ?? []
  }
)