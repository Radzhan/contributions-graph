import {configureStore} from "@reduxjs/toolkit";
import {contributionsReducer} from '../store/contributionSlice';

export const store = configureStore({
	reducer: {
		contributions: contributionsReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;