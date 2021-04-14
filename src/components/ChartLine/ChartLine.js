import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts';
import './ChartLine.css';

import { getUserAverageSessions } from '../../services/api';
import CustomTooltip from './CustomTooltip/CustomTooltip';

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
		<div className='line-container'>
			<h2>Durée moyenne des sessions</h2>
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
		</div>
	);
}
