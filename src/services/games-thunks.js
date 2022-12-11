import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./games-service"

export const findGamesThunk = createAsyncThunk(
    'games/findGames', async () =>
        await service.findGames()
)

export const deleteGamesThunk = createAsyncThunk(
    'games/deleteGames', async (tuitId) => {
        await service.deleteGames(tuitId)
    return tuitId
})
export const createGamesThunk = createAsyncThunk(
    'games/createGames', async (tuit) =>
        await service.createGames(tuit)
)
export const updateGamesThunk = createAsyncThunk(
    'games/updateGames', async (tuit) =>
        await service.updateGames(tuit)
)