import * as service from "./review-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (tuit) => {
        return await service.createReview(tuit)
    }
)