import React from 'react';
import RadarChart from '../ChartRadar/ChartRadar';

export default function Dashboard(props) {
	return (
		<div className='dashboard'>
			<header className='user-header'>
				<h1>
					Bonjour <span className='first-name'>Thomas</span>
				</h1>
				<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			</header>
			<RadarChart />
		</div>
	);
}
