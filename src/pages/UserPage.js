import React, { Fragment } from 'react';

import LeftNav from '../components/LeftNav';
import Dashboard from '../components/Dashboard';

export default function UserPage(props) {
	return (
		<Fragment>
			<LeftNav />
			<main>
				<Dashboard match={props.match} />
			</main>
		</Fragment>
	);
}
