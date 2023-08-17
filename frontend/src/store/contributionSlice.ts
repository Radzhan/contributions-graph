import {Contributions} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {getObject} from './contributionThunks';
import {RootState} from '../app/store';


interface ContributionsState {
	contributions: Contributions;
}

const initialState: ContributionsState = {
	contributions: {},
}

export const contributionSlice = createSlice({
	name: 'contributions',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getObject.fulfilled, (state, {payload: contributions}) => {
			state.contributions = contributions;
		});
	}
});

export const contributionsReducer = contributionSlice.reducer;
export const contrObj = (state: RootState) => state.contributions.contributions;


