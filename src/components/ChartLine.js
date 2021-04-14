import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts';
import styled from 'styled-components';

import { getUserAverageSessions } from '../services/api';
import CustomTooltip from './ChartLineTooltip';

const Container = styled.div`
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
	// position: absolute;
	font-weight: 500;
	font-size: 15px;
	color: rgba(255, 255, 255, 0.5);
`;

export default function ChartLine() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserAverageSessions(12);
			setData(request.data.sessions);
		};
		getData();
	}, []);

	return (
		<Container>
			<Title>Durée moyenne des sessions</Title>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart data={data}>
					<XAxis
						axisLine={false}
						tickLine={false}
						dataKey='day'
						stroke='rgba(255, 255, 255, 0.5)'
						tick={{ fontSize: 12 }}
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
						content={<CustomTooltip />}
						cursor={{
							stroke: 'rgba(0, 0, 0, 0.1)',
							strokeWidth: 100,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Container>
	);
}
