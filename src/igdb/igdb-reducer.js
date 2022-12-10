import {createSlice} from "@reduxjs/toolkit";
import {findGameBySearchTerm} from "./igdb-service";
import {findGameBySearchTermThunk} from "./igdb-thunks";

const initialState = {
    games: [],
    loading: false
}

const igdbReducer = createSlice({
    name: 'igdb',
    initialState,
    extraReducers: {
        [findGameBySearchTermThunk.fulfilled]: (state, action) => {
            state.games = action.payload
        }
    }
})

export default igdbReducer.reducer