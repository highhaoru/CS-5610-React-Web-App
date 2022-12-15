import {createSlice} from "@reduxjs/toolkit";
import {findGameBySearchTerm} from "../services/igdb-service";
import {findGameByImdbIdThunk, findGameBySearchTermThunk, findGameRandomThunk} from "../services/igdb-thunks";

const initialState = {
    random: [],
    loading: false,
    details: {}
}

const igdbReducer = createSlice({
    name: 'igdb',
    initialState,
    extraReducers: {
        [findGameRandomThunk.pending]: (state) => {
            state.random = []
            state.loading = false
        },
        [findGameRandomThunk.fulfilled]: (state, action) => {
            state.random = action.payload
            state.loading = true
        },
        [findGameRandomThunk.rejected]: (state) => {
            state.random = false
        },

    }
})

export default igdbReducer.reducer