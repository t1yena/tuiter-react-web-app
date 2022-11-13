import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}
 
// represents currently logged in user which contains profile info
// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa.png",
// };

// template tuit object with some default values and copy over fields from current user
// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
        },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
                console.log(payload);
        },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
                console.log("rejected");
        },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
                }
        }

    },

     
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;