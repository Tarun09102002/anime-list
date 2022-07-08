import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    watchList: ['9253', '5114'],

}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            state.watchList = action.payload
        }
    }
})


export const { addToWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;