import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { Serie } from "../cardSlice.interface";

export const fetchForSeries = createAsyncThunk<Serie[]>(
  "card/series",
  async () => {
    const response = await api.get("/series")
    return response?.data ?? []
  }
)