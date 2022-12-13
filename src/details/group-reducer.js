import {createSlice} from "@reduxjs/toolkit";
import {findJoinedThunk, joinGroupThunk} from "../services/group-thunks";

const groupReducer = createSlice({
    name: 'group',
    initialState: {
        joined: []
    },
    extraReducers: {
        [joinGroupThunk.fulfilled]: (state, {payload}) => {
            state.joined.push(payload)
        },
        [findJoinedThunk.fulfilled]: (state, {payload}) => {
            state.joined = payload
        },
    }
})

export default groupReducer.reducer