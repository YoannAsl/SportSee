import React from 'react';
import styled from 'styled-components';

import PerformanceChart from './PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart';
import ScoreChart from './ScoreChart';

const Container = styled.div`
	margin: 70px 90px 88px 110px;
`;

const ChartsContainer = styled.div`
	display: flex;
`;

export default function Dashboard(props) {
	return (
		<Container>
			<header className='user-header'>
				<h1>
					Bonjour <span className='first-name'>Thomas</span>
				</h1>
				<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<ChartsContainer>
				<AverageSessionsChart />
				<PerformanceChart />
				<ScoreChart />
			</ChartsContainer>
		</Container>
	);
}
