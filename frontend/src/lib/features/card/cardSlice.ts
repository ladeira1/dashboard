import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardState } from "./cardSlice.interface";
import { fetchForCards } from "./services/fetchForCards";
import { fetchForSeries } from "./services/fetchForSeries";
import { fetchUpdateSeries } from "./services/fetchUpdateSeries";

const initialState: CardState = {
  isLoading: false,
  cards: [],
  series: [],
  goals: {}
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    changeGoal: (state, action: PayloadAction<{ text: string; newGoal: number }>) => {
      if(action.payload.text in state.goals) {
        state.goals[action.payload.text] = action.payload.newGoal
        return
      }

      state.goals = {
        ...state.goals,
        [action.payload.text]: action.payload.newGoal
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchForCards.pending, state => {
      state.isLoading = true
    })

    builder.addCase(fetchForCards.fulfilled, (state, action) => {
      state.isLoading = false
      state.cards = action.payload
    })

    builder.addCase(fetchForCards.rejected, state => {
      state.isLoading = false
    })

    builder.addCase(fetchForSeries.pending, state => {
      state.isLoading = true
    })

    builder.addCase(fetchForSeries.fulfilled, (state, action) => {
      state.isLoading = false
      state.series = action.payload
      state.goals = action.payload.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.text]: curr.goal
        }
      }, {})
    })

    builder.addCase(fetchForSeries.rejected, state => {
      state.isLoading = false
    })

    builder.addCase(fetchUpdateSeries.fulfilled, (state, action) => {
      state.series = action.payload
      state.goals = action.payload.reduce((acc, curr) => {
        return {
          ...acc,
          [curr.text]: curr.goal
        }
      }, {})
    })
  }
})

export const {
  changeGoal
} = cardSlice.actions
export default cardSlice.reducer;