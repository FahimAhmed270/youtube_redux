import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
})
export const fetchAsyncMovieOrShowsDetails = createAsyncThunk('movies/fetchAsyncMovieOrShowsDetail', async (id) => {
    const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
})
const initialState = {
    movies: {},
    shows: {},
    movieOrShow: {},
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectMovieOrShow: (state) => {
            state.movieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowsDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movieOrShow: payload };
        },
    },
})

export const { removeSelectMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectMovieOrShow = (state) => state.movies.movieOrShow
export default movieSlice.reducer