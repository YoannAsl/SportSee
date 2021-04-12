import React, { Fragment } from 'react';

import LeftNav from './../components/LeftNav/LeftNav';
import Dashboard from './../components/Dashboard/Dashboard';

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
