import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";

export const fetchForWidgetFilters = createAsyncThunk<string[]>(
  "widget/filters",
  async () => {
    const response = await api.get("/widgets/filters")
    return response?.data ?? []
  }
)