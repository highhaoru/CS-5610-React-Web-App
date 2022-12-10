import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./games-service"

export const findGamesThunk = createAsyncThunk(
    'games/findGames', async () =>
        await service.findGames()
)
