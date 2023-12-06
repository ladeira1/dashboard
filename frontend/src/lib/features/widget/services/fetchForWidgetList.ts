import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../services/api";
import { Filters, WidgetsData } from "../../../../components/WidgetList/WidgetList.interface";
import { parseFilterParams } from "../../../../utils/parseFilterParams";

export const fetchForWidgetList = createAsyncThunk<WidgetsData, { titles: string[]; filters?: Filters }>(
  "widget/list",
  async ({ titles, filters = {} }) => {
    const { period, comparedTo, frequency } = filters
    const params = parseFilterParams({ 
      titles,
      period: period?.value,
      comparedTo: comparedTo?.value,
      frequency: frequency?.value
    })
    const response = await api.get(`/widgets?${params}`)
    return response?.data ?? []
  }
)