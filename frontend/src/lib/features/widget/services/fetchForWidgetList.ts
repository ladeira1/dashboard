import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { WidgetsData } from "../../../../components/WidgetList/WidgetList.interface";

export const fetchForWidgetList = createAsyncThunk<WidgetsData>(
  "widget/list",
  async () => {
    const response = await api.get("/widgets")
    return response?.data ?? []
  }
)