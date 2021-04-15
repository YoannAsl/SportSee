import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

import { getUserInfos } from './../services/api';

const Container = styled.div`
	position: relative;
	height: 263px;
	width: 258px;
	background: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
	h2 {
		position: absolute;
		top: 25px;
		left: 30px;
		font-weight: 500;
		font-size: 15px;
	}
`;

const Objective = styled.p`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: rgba(0, 0, 0, 0.65);
	font-weight: 500;
	text-align: center;
	line-height: 26px;
	span {
		color: rgba(0, 0, 0, 0.8);
		font-weight: 700;
		font-size: 26px;
	}
`;

const InnerCircle = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 57%;
	height: 57%;
	border-radius: 50%;
	background-color: white;
`;

export default function ScoreChart() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(12);
			setData([
				{ score: request.data.todayScore || request.data.score },
				{
					score:
						1 - request.data.todayScore || 1 - request.data.score,
				},
			]);
		};
		getData();
	}, []);

	// eslint-disable-next-line array-callback-return
	const adjustedData = data.map((el, index) => {
		if (index === 0) return el.score * 100;
		// console.log(el.score * 100);
	});
	// data[0].score * 100 || data[0].todayScore * 100;
	// console.log(adjustedData[0]);

	return (
		<Container>
			<h2>Score</h2>
			<InnerCircle></InnerCircle>
			<ResponsiveContainer width='100%' height='100%'>
				<PieChart>
					<Pie
						data={data}
						dataKey='score'
						innerRadius={73}
						outerRadius={85}
					>
						{data.map((entry, index) => {
							if (index === 0) {
								return (
									<Cell
										key={`cell-${index}`}
										fill='#FF0000'
										cornerRadius={10}
									/>
								);
							}
							return (
								<Cell
									key={`cell-${index}`}
									stroke='transparent'
									fill='transparent'
								/>
							);
						})}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<Objective>
				<span>{adjustedData[0]}%</span> <br /> de votre <br /> objectif
			</Objective>
		</Container>
	);
}
