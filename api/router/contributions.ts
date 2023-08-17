import axios from "axios";
import * as express from "express";
import { ContribotionsI } from "../types";

const contributionsRouter = express.Router();

contributionsRouter.get("/", async (req, res, next) => {
	try {
		const url = 'https://dpg.gg/test/calendar.json'

		const response = await axios.get<ContribotionsI>(url);

		res.send(response.data)
	} catch (e) {
		return next(e);
	}
});

export default contributionsRouter;
