import { configureStore } from '@reduxjs/toolkit';
import watchListReducer from './feature/watchListSlice'

export const store = configureStore({
  reducer: {
    watchList: watchListReducer
  },
});
