import React from 'react';
import styled from 'styled-components';

import ChartRadar from './ChartRadar';
import ChartLine from './ChartLine';

const Container = styled.div`
	margin: 70px 90px 88px 110px;
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
			<div>
				<ChartLine />
				<ChartRadar />
			</div>
		</Container>
	);
}
