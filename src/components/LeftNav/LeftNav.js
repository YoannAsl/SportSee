import React from 'react';
import dumbell from '../../assets/icon-dumbell.svg';
import bike from '../../assets/icon-bike.svg';
import meditation from '../../assets/icon-meditation.svg';
import swimming from '../../assets/icon-swimming.svg';
import { NavLink } from 'react-router-dom';
import './LeftNav.css';

export default function LeftNav() {
	return (
		<nav className='left-nav'>
			<div>
				<NavLink to='#'>
					<img src={meditation} alt='Meditation' />
				</NavLink>
				<NavLink to='#'>
					<img src={swimming} alt='Swimming' />
				</NavLink>
				<NavLink to='#'>
					<img src={bike} alt='Bike' />
				</NavLink>
				<NavLink to='#'>
					<img src={dumbell} alt='Dumbell' />
				</NavLink>
			</div>
			<p>Copyright, SportSee 2020</p>
		</nav>
	);
}
