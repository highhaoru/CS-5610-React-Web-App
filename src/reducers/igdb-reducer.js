import {createSlice} from "@reduxjs/toolkit";
import {findGameBySearchTerm} from "../igdb/igdb-service";
import {findGameByImdbIdThunk, findGameBySearchTermThunk} from "../igdb/igdb-thunks";

const initialState = {
    games: [],
    loading: false,
    details: {}
}

const igdbReducer = createSlice({
    name: 'igdb',
    initialState,
    extraReducers: {
        [findGameBySearchTermThunk.fulfilled]: (state, action) => {
            state.games = action.payload
            state.loading = true
        },
        [findGameByImdbIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default igdbReducer.reducer