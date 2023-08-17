import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { Contributions } from "../types";

export const getObject = createAsyncThunk<Contributions>('contribution/getObject', async () => {
	const response = await axiosApi.get('contributions');

	return response.data;
});
