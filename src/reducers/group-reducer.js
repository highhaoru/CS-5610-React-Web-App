import {createSlice} from "@reduxjs/toolkit";
import {checkJoinedThunk, findJoinedThunk, joinGroupThunk} from "../services/group-thunks";

const groupReducer = createSlice({
    name: 'group',
    initialState: {
        joined: [],
        joinedThis: null,
    },
    extraReducers: {
        [joinGroupThunk.fulfilled]: (state, {payload}) => {
            state.joined.push(payload)
        },
        [findJoinedThunk.fulfilled]: (state, {payload}) => {
            state.joined = payload
        },
        [checkJoinedThunk.fulfilled]: (state, {payload}) => {
            state.joinedThis = payload
        },
        [checkJoinedThunk.rejected]: (state) => {
            state.joinedThis = null
        },
    }
})

export default groupReducer.reducer