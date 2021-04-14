import React, { useState, useEffect } from 'react';
import {
	RadarChart,
	PolarGrid,
	Radar,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

import { getUserPerformance } from '../services/api.js';

const Container = styled.div`
	height: 263px;
	width: 258px;
	background: #282d30;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`;

export default function ChartRadar() {
	const [kind, setKind] = useState({});
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserPerformance(12);
			setData(request.data.data);
			setKind(request.data.kind);
		};
		getData();
	}, []);

	// const adjustedData = data.map((el) => {
	// 	switch (el.kind) {
	// 		case 1:
	// 			return { ...el, kind: 'Cardio' };
	// 		case 2:
	// 			return { ...el, kind: 'Energy' };
	// 		case 3:
	// 			return { ...el, kind: 'Endurance' };
	// 		case 4:
	// 			return { ...el, kind: 'Strength' };
	// 		case 5:
	// 			return { ...el, kind: 'Speed' };
	// 		case 6:
	// 			return { ...el, kind: 'Intensity' };

	// 		default:
	// 			return { ...el };
	// 	}
	// });

	const adjustedData = data.map((el) => {
		return { ...el, kind: kind[el.kind] };
	});

	return (
		<Container>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart
					cx='50%'
					cy='50%'
					outerRadius='70%'
					data={adjustedData}
				>
					<PolarGrid />
					<PolarAngleAxis
						dataKey='kind'
						stroke='white'
						tickLine={false}
						tick={{ fontSize: 12 }}
					/>
					<Radar
						dataKey='value'
						stroke='#FF0101'
						fill='#FF0101'
						fillOpacity={0.7}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</Container>
	);
}
