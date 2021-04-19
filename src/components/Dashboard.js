import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import caloriesIcon from '../assets/icon-calories.svg';
import proteinsIcon from '../assets/icon-proteins.svg';
import carbsIcon from '../assets/icon-carbs.svg';
import lipidsIcon from '../assets/icon-lipids.svg';

import { getUserInfos } from './../services/api';
import PerformanceChart from './PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart';
import ScoreChart from './ScoreChart';
import ActivityChart from './ActivityChart';
import MacroCounter from './MacroCounter';

const Container = styled.div`
	margin: 60px 90px 88px 110px;
`;

const Header = styled.header`
	margin-bottom: 65px;
	h1 {
		font-weight: 500;
		font-size: 48px;
		span {
			color: #ff0000;
		}
	}
	p {
		font-size: 18px;
	}
`;

const ChartsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default function Dashboard(props) {
	const [data, setData] = useState([]);
	const [score, setScore] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const request = await getUserInfos(12);
			// console.log(request.data.keyData);
			setScore([
				{ score: request.data.todayScore || request.data.score },
				{
					score:
						1 - request.data.todayScore || 1 - request.data.score,
				},
			]);
		};
		getData();
	}, []);

	console.log(data);
	return (
		<Container>
			<Header>
				<h1>
					Bonjour <span>Thomas</span>
				</h1>
				<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			</Header>
			<ActivityChart />
			<ChartsContainer>
				<AverageSessionsChart />
				<PerformanceChart />
				<ScoreChart score={score} />
			</ChartsContainer>
			<MacroCounter image={caloriesIcon} color='rgba(255, 0, 0, 0.1)' />
			<MacroCounter
				image={proteinsIcon}
				color='rgba(74, 184, 255, 0.1)'
			/>
			<MacroCounter image={carbsIcon} color='rgba(249, 206, 35, 0.1)' />
			<MacroCounter image={lipidsIcon} color='rgba(253, 81, 129, 0.1)' />
		</Container>
	);
}
