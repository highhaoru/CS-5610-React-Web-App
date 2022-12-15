import {createAsyncThunk} from "@reduxjs/toolkit";
import {findGameByImdbId, findGameBySearchTerm} from "./igdb-service";

export const findGameBySearchTermThunk = createAsyncThunk(
    'findGameBySearchTerm',
    (term) => findGameBySearchTerm(term)
)
export const findGameByImdbIdThunk = createAsyncThunk(
    'findMovieByImdbId',
    (imdbID) => findGameByImdbId(imdbID)
)
export const findGameRandomThunk = createAsyncThunk(
    'findGameRandom',
    (term) => findGameBySearchTerm(term)
)
