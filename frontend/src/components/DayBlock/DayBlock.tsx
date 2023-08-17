import dayjs from "dayjs";
import React from "react";
import './DayBlock.css'
interface Props {
	contributions: number;
	date: Date;
}

const dayBlock: React.FC<Props> = ({ contributions, date }) => {
	const getColor = (contributions: number): string => {
		if (contributions === 0) {
			return "#EDEDED";
		} else if (contributions >= 1 && contributions <= 9) {
			return "#ACD5F2";
		} else if (contributions >= 10 && contributions <= 19) {
			return "#7FA8C9";
		} else if (contributions >= 20 && contributions <= 29) {
			return "#527BA0";
		} else {
			return "#254E77";
		}
	};

	const color = getColor(contributions);

	const formattedDate = dayjs(date).format("dddd, MMMM D, YYYY");

	return (
		<div className="day-block" style={{ background: color }}>
			<div className="hint-block">
				<p className="hint-block-contribution">{contributions} contributions</p>
				<p className="hint-block-date">{formattedDate}</p>
			</div>
		</div>
	);
};

export default dayBlock;