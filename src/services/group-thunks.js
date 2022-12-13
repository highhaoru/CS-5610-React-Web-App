import * as service from "./group-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

// export const findReviewsThunk  = createAsyncThunk(
//     'reviews/findReviews',
//     async (gid) => await service.findReviews(gid)
// )

// export const createReviewThunk = createAsyncThunk(
//     'reviews/createReview',
//     async (post) => {
//         return await service.createReview(post)
//     }
// )

export const joinGroupThunk = createAsyncThunk(
    'group/joinGroup',
    async ({user, gid}) => {
        await service.joinGroup({user, gid})

    })
// export const deleteReviewThunk = createAsyncThunk(
//     'reviews/deleteReview',
//     async (rid) => {
//         await service.deleteReview(rid)
//         return rid
//     })