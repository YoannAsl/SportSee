import React from 'react';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<header>
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
