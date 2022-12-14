import * as service from "./history-service"
import {createAsyncThunk} from "@reduxjs/toolkit"

export const findAllHistoryThunk  = createAsyncThunk(
    'history/findAllHistory',
    async () => await service.findAllHistory()
)
export const findHistoryByIdThunk  = createAsyncThunk(
    'history/findHistoryById',
    async (uid) => await service.findHistoryById(uid)
)
export const createHistoryThunk = createAsyncThunk(
    'history/createHistory',
    async (post) => {
        return await service.createHistory(post)
    }
)

export const deleteHistoryThunk = createAsyncThunk(
    'history/deleteHistory',
    async (hid) => {
        await service.deleteHistory(hid)
        return hid
    })