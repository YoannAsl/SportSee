import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getUserAverageSessions } from '../services/api';
import AverageSessionsChartTooltip from './AverageSessionsChartTooltip';

const Container = styled.div`
	position: relative;
	width: 258px;
	height: 263px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #ff0000;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`;

const Title = styled.h2`
	font-weight: 500;
	font-size: 15px;
	padding: 29px 34px 0 34px;
	color: rgba(255, 255, 255, 0.5);
`;

export default function AverageSessionsChart({ id }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserAverageSessions(id);
			setData(request.data.sessions);
		};
		getData();
	}, [id]);

	const adjustedData = data.map((el) => {
		switch (el.day) {
			case 1:
				return { ...el, day: 'L' };
			case 2:
				return { ...el, day: 'M' };
			case 3:
				return { ...el, day: 'M' };
			case 4:
				return { ...el, day: 'J' };
			case 5:
				return { ...el, day: 'V' };
			case 6:
				return { ...el, day: 'S' };
			case 7:
				return { ...el, day: 'D' };

			default:
				return { ...el };
		}
	});

	return (
		<Container>
			<Title>Durée moyenne des sessions</Title>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart data={adjustedData}>
					<XAxis
						axisLine={false}
						tickLine={false}
						dataKey='day'
						stroke='rgba(255, 255, 255, 0.5)'
						tick={{ fontSize: 12 }}
						minTickGap={3}
						padding={{ left: 10, right: 10 }}
					/>
					<Line
						dataKey='sessionLength'
						type='monotone'
						stroke='rgba(255, 255, 255, 0.5)'
						strokeWidth={2}
						dot={false}
						activeDot={{
							stroke: 'rgba(255, 255, 255, 0.3)',
							strokeWidth: 10,
							r: 5,
						}}
					/>
					<Tooltip
						content={<AverageSessionsChartTooltip />}
						cursor={{
							stroke: 'rgba(0, 0, 0, 0.1)',
							strokeWidth: 100,
							height: '1000px',
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Container>
	);
}

AverageSessionsChart.propTypes = {
	id: PropTypes.string.isRequired,
};
