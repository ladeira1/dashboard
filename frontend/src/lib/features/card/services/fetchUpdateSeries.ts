import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { Serie } from "../cardSlice.interface";

export const fetchUpdateSeries = createAsyncThunk<Serie[], Serie[]>(
  "card/update-series",
  async (data) => {
    const response = await api.put("/series/update", data)
    return response?.data ?? []
  }
)