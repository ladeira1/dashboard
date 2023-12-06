import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { Card } from "../cardSlice.interface";

export const fetchForCards = createAsyncThunk<Card[]>(
  "card/list",
  async () => {
    const response = await api.get("/cards")
    return response?.data ?? []
  }
)