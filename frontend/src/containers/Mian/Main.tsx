import React from "react";
import ContributionGraph from "../../components/ContributionGraph/ContributionGraph";
import Info from "../../components/Info/Info";
import './Main.css'

const Main = () => {
	const today = new Date();
	const currentMonth = today.getMonth();

	const months = [
		"Янв.",
		"Февр.",
		"Март.",
		"Апр.",
		"Май.",
		"Июнь.",
		"Июль.",
		"Авг.",
		"Сент.",
		"Окт.",
		"Нояб.",
		"Дек.",
	];

	const monthsList = months
		.slice(currentMonth)
		.concat(months.slice(0, currentMonth));

	return (
		<div className="main">
			<div className="months">
				{monthsList.map((month) => (
					<p key={month}>{month}</p>
				))}
			</div>
			<ContributionGraph />
			<Info />
		</div>
	);
};

export default Main;