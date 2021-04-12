import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className='page-header'>
			<img src={logo} alt={'Logo SportSee'} />
			<nav>
				<NavLink to='#'>Accueil</NavLink>
				<NavLink to='#'>Profil</NavLink>
				<NavLink to='#'>Réglage</NavLink>
				<NavLink to='#'>Communauté</NavLink>
			</nav>
		</header>
	);
}
