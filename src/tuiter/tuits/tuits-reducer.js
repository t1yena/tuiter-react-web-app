import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

// represents currently logged in user which contains profile info
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

// template tuit object with some default values and copy over fields from current user
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        // reducer function to delete tuit by looking up index of tuit from state
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.splice(index, 1);
        },

        // create Tuit reducer function that adds new tuit in the payload at the beginning
        // of array of tuits contained in the state
        createTuit(state, action) {
          state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
          })
        }
    }
     
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;