import React, { useState, useEffect } from 'react';
import {
	RadarChart,
	PolarGrid,
	Radar,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts';
import './ChartRadar.css';

import { getUserPerformance } from '../../services/api.js';

export default function ChartRadar() {
	// const [kind, setKind] = useState({});
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserPerformance(12);
			setData(request.data.data);
			// setKind(request.data.kind);
		};
		getData();
	}, []);

	// const adjustedData = data.map((el) => {
	// 	switch (el.kind) {
	// 		case 1:
	// 			return { ...el, type: 'Cardio' };
	// 		case 2:
	// 			return { ...el, type: 'Energy' };
	// 		case 3:
	// 			return { ...el, type: 'Endurance' };
	// 		case 4:
	// 			return { ...el, type: 'Strength' };
	// 		case 5:
	// 			return { ...el, type: 'Speed' };
	// 		case 6:
	// 			return { ...el, type: 'Intensity' };

	// 		default:
	// 			return { ...el };
	// 	}
	// });

	// const changeAxisLabel = data.map((el, index) => {
	// 	el.type = kind[index + 1];
	// });

	// changeAxisLabel();

	return (
		<div className='radar-container'>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart cx='50%' cy='50%' outerRadius='70%' data={data}>
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
		</div>
	);
}
