import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LeftNav from '../components/LeftNav';
import Dashboard from '../components/Dashboard';

export default function UserPage({ match }) {
	return (
		<Fragment>
			<LeftNav />
			<main>
				<Dashboard match={match} />
			</main>
		</Fragment>
	);
}

UserPage.protTypes = {
	match: PropTypes.array.isRequired,
};
