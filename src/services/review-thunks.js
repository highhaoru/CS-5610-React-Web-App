import * as service from "./review-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const findReviewsThunk  = createAsyncThunk(
    'reviews/findReviews',
    async (gid) => await service.findReviews(gid)
)
export const findRecentReviewsThunk  = createAsyncThunk(
    'reviews/findReviews',
    async () => await service.findRecentReviews()
)
export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (post) => {
        return await service.createReview(post)
    }
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (rid) => {
        await service.deleteReview(rid)
        return rid
    })