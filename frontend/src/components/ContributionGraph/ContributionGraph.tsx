import React, { useCallback, useEffect } from "react";
import "./ContributionGraph.css";
import DayBlock from "../DayBlock/DayBlock";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import './ContributionGraph.css'
import {contrObj} from '../../store/contributionSlice';
import {getObject} from '../../store/contributionThunks';

const ContributionGraph = () => {
	const dispatch = useAppDispatch();
	const contribution = useAppSelector(contrObj);

	const getContributions = useCallback(async () => {
		await dispatch(getObject());
	}, [dispatch]);

	useEffect(() => {
		getContributions().catch(console.error);
	}, [getContributions]);

	const getAllDaysOfYear = () => {
		const today = new Date();
		const currentYear = today.getFullYear();
		const lastYear = currentYear - 1;
		const startDate = new Date(currentYear, today.getMonth(), today.getDate());
		const endDate = new Date(lastYear, today.getMonth(), today.getDate());

		const days = [];
		const currentDate = new Date(startDate);

		while (currentDate >= endDate) {
			days.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() - 1);
		}

		return days.slice(0, -9).reverse();
	};

	const daysArray = getAllDaysOfYear();

	const createContriboyions = daysArray.map((el) => {
		const year = el.getFullYear();
		const month = el.getMonth() + 1;
		const day = el.getDate();

		const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
			.toString()
			.padStart(2, "0")}`;

		if (formattedDate in contribution) {
			return (
				<DayBlock
					key={formattedDate}
					contributions={contribution[formattedDate]}
					date={el}
				/>
			);
		} else {
			return <DayBlock key={formattedDate} contributions={0} date={el} />;
		}
	});

	return (
		<div className="year-block">
			<div className="weeks">
				<p>Пн</p>
				<p>Ср</p>
				<p>Пт</p>
			</div>
			<div className="Graph-block">{createContriboyions}</div>
		</div>
	);
};

export default ContributionGraph;
