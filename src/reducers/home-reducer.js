import {createSlice} from "@reduxjs/toolkit";
import {findRecentReviewsThunk} from "../services/review-thunks";


const initialState = {
    recents: [],
}

const homeSlice = createSlice({
    name: 'recents',
    initialState: initialState,
    extraReducers: {
        [findRecentReviewsThunk.fulfilled]: (state, {payload}) => {
            state.recents = payload
        },

    }
});

export default homeSlice.reducer;