import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WidgetState } from "./widgetSlice.interface";
import { fetchForWidgetList } from "./services/fetchForWidgetList";
import { fetchForWidgetFilters } from "./services/fetchForWidgetFilters";

const initialState: WidgetState = {
  widgetsData: {
    title: "",
    widgets: []
  },
  shownItems: [],
  filters: [],
  isLoading: false,
}

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    updateShownItems: (state, action: PayloadAction<string>) => {
      const item = state.shownItems.find(i => i === action.payload)
      if(item) {
        state.shownItems = state.shownItems.filter(i => i !== action.payload)
      }

      state.shownItems = [...state.shownItems, action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchForWidgetList.pending, (state) => {
      state.widgetsData = {
        title: "",
        widgets: []
      }
    })

    builder.addCase(fetchForWidgetList.fulfilled, (state, action) => {
      state.isLoading = false

      if(state.shownItems.length >= 1) {
        state.widgetsData = {
          title: action.payload.title,
          widgets: action.payload.widgets.filter(i => state.shownItems.includes(i.title))
        }

        return
      }

      state.widgetsData = action.payload
    })

    builder.addCase(fetchForWidgetList.rejected, (state)  => {
      state.isLoading = false
      state.widgetsData = {
        title: "",
        widgets: []
      }
    })

    builder.addCase(fetchForWidgetFilters.pending, state => {
      state.isLoading = false
      state.filters = []
    })

    builder.addCase(fetchForWidgetFilters.fulfilled, (state, action) => {
      state.isLoading = false
      state.filters = action.payload
    })

    builder.addCase(fetchForWidgetFilters.rejected, (state)  => {
      state.isLoading = false
      state.filters = []
    })
  }
})

export const {
  updateShownItems
} = widgetSlice.actions
export default widgetSlice.reducer;