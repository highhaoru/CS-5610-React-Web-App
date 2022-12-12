import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk, deleteReviewThunk, findReviewsThunk} from "../services/review-thunks";

const currentUser = {
    "userName": "Iron Man",
};

const templateReview = {
    ...currentUser,
    "gid": "tt2934286",
    "time": "2017-12-19",
    // "content": "The iconic Halo series received its latest entry in November 2021. Halo Infinite launched on Game" +
    //     " Pass and latched on to the modern trend of linear franchises releasing open-world adventures. As such, we've updated this list of the Halo games ranked, to include the latest release in the series, and to also expand on each pre-existing entry to give players a better idea of which Halo games they should play and which aren't worth their time. Each entry now details each game's release date, the platforms it can be played on, the main story completion time according to howlongtobeat.com, and the best feature.",
    "liked": false,
    "likes": 0,
    "stars": 3,
}

const initialState = {
    reviews: [],
    loading: false
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: initialState,
    extraReducers: {
        [findReviewsThunk.pending]: (state) => {
            state.loading = true
            state.reviews = []
        },
        [findReviewsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.reviews = payload
        },
        [findReviewsThunk.rejected]: (state) => {
            state.loading = false
        },
        [deleteReviewThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.reviews = state.reviews.filter(t => t._id !== payload)
        },
        [createReviewThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.reviews.unshift(payload)
        },
        // [updateTuitThunk.fulfilled]: (state, {payload}) => {
        //     state.loading = false
        //     const tuitIndex = state.tuits.findIndex(t => t._id === payload._id)
        //     state.tuits[tuitIndex] = payload
        // }
    }
});

export default reviewsSlice.reducer;