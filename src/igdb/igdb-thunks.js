import {createAsyncThunk} from "@reduxjs/toolkit";
import {findGameBySearchTerm} from "./igdb-service";

export const findGameBySearchTermThunk = createAsyncThunk(
    'findGameBySearchTerm',
    (term) => findGameBySearchTerm(term)
)