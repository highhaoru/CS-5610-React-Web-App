import * as service from "./group-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const joinGroupThunk = createAsyncThunk(
    'group/joinGroup',
    async (toJoin) => {
        await service.joinGroup(toJoin)
    })

export const findJoinedThunk  = createAsyncThunk(
    'group/findJoined',
    async (user) => await service.findJoined(user)
)
export const checkJoinedThunk  = createAsyncThunk(
    'group/checkJoined',
    async (check) => await service.checkJoined(check)
)
// export const createReviewThunk = createAsyncThunk(
//     'reviews/createReview',
//     async (post) => {
//         return await service.createReview(post)
//     }
// )

// export const checkJoinedThunk = createAsyncThunk(
//     'group/checkJoined',
//     async (gid) => {
//         await service.checkJoined(gid)
//     })

// export const deleteReviewThunk = createAsyncThunk(
//     'reviews/deleteReview',
//     async (rid) => {
//         await service.deleteReview(rid)
//         return rid
//     })