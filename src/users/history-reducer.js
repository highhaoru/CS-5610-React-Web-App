import {createSlice} from "@reduxjs/toolkit";
import {
    createHistoryThunk,
    deleteHistoryThunk,
    findAllHistoryThunk,
    findHistoryByIdThunk
} from "../services/history-thunks";


const initialState = {
    history: [],
    loading: false
}

const historySlice = createSlice({
    name: 'history',
    initialState: initialState,
    extraReducers: {
        [findHistoryByIdThunk.pending]: (state) => {
            state.loading = true
            state.history = []
        },
        [findHistoryByIdThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.history = payload
        },
        [findHistoryByIdThunk.rejected]: (state) => {
            state.loading = false
        },
        [deleteHistoryThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.history = state.reviews.filter(t => t._id !== payload)
        },
        [createHistoryThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.history.unshift(payload)
        },

    }
});

export default historySlice.reducer;